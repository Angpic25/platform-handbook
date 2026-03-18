export default {
  logo: <span style={{ fontWeight: 800 }}>Platform Training Docs</span>,
  project: {
    link: 'https://platform.accessiway.com',
    icon: <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Open Platform →</span>,
  },
  footer: { text: 'AccessiWay Internal Training Documentation' },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    float: true,
  },
  useNextSeoProps() {
    return { titleTemplate: '%s – AccessiWay Docs' }
  },
  head: (
    <>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </>
  ),
}
