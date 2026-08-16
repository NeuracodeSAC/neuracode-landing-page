<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, array $body): never {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['error' => 'Method not allowed']);
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    respond(400, ['error' => 'Invalid request']);
}

function field(array $input, string $name): string {
    return isset($input[$name]) && is_string($input[$name]) ? trim($input[$name]) : '';
}

$nombre = field($input, 'nombre');
$email = field($input, 'email');
$profesion = field($input, 'profesion');
$pais = field($input, 'pais');
$telefono = field($input, 'telefono');

if (!$nombre || !$email || !$profesion || !$pais || !$telefono) {
    respond(400, ['error' => 'Missing required fields']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['error' => 'Invalid email']);
}

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    respond(503, ['error' => 'Signup is temporarily unavailable']);
}

$config = require $configPath;
$apiKey = is_array($config) ? ($config['brevo_api_key'] ?? '') : '';
$listId = is_array($config) ? (int) ($config['brevo_list_id'] ?? 0) : 0;
if (!is_string($apiKey) || $apiKey === '' || $listId <= 0) {
    respond(503, ['error' => 'Signup is temporarily unavailable']);
}

$payload = json_encode([
    'email' => $email,
    'attributes' => [
        'NOMBRE' => $nombre,
        'PROFESION' => $profesion,
        'PAIS' => $pais,
        'SMS' => $telefono,
    ],
    'listIds' => [$listId],
    'updateEnabled' => true,
]);

$request = curl_init('https://api.brevo.com/v3/contacts');
curl_setopt_array($request, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => [
        'api-key: ' . $apiKey,
        'Content-Type: application/json',
        'Accept: application/json',
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
]);

curl_exec($request);
$status = (int) curl_getinfo($request, CURLINFO_RESPONSE_CODE);
curl_close($request);

if ($status < 200 || $status >= 300) {
    respond(502, ['error' => 'Could not save signup']);
}

respond(201, ['ok' => true]);
