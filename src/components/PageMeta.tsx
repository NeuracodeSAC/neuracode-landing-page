import { useEffect } from 'react'
const origin = 'https://www.neuracode.dev'
export default function PageMeta({ title, description, path }: { title: string; description: string; path: string }) {
  useEffect(() => {
    document.title = title
    const canonical = `${origin}${path === '/' ? '' : path}`
    const setMeta = (selector: string, attribute: 'name' | 'property', key: string, value: string) => {
      let node = document.head.querySelector<HTMLMetaElement>(selector)
      if (!node) { node = document.createElement('meta'); node.setAttribute(attribute, key); document.head.appendChild(node) }
      node.content = value
    }
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = canonical
  }, [description, path, title])
  return null
}
