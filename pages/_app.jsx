import { useEffect } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const navs = document.querySelectorAll('nav')
    if (navs[0]) navs[0].setAttribute('aria-label', 'Main')
    if (navs[1]) navs[1].setAttribute('aria-label', 'Sidebar')
    const aside = document.querySelector('aside')
    if (aside) aside.setAttribute('aria-label', 'On this page')
  }, [])

  return <Component {...pageProps} />
}
