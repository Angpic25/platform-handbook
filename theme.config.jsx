export default {
  logo: <span style={{ fontWeight: 800 }}>AccessiWay — Training Docs</span>,
  project: { link: 'https://platform.accessiway.com' },
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
}
