export default {
  logo: <span style={{ fontWeight: 800 }}>Platform Handbook</span>,
  project: {
    link: 'https://platform.accessiway.com',
    icon: <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Open Platform →</span>,
  },
  footer: { text: 'AccessiWay Internal Training Documentation' },
  feedback: {
    content: '💬 Give us feedback →',
    link: 'https://slack.com/app_redirect?channel=platform-internal-feedbacks',
  },
  editLink: {
    component: () => (
      <a
        href="https://slack.com/app_redirect?channel=platform-internal-feedbacks"
        target="_blank"
        rel="noopener noreferrer"
      >
        🐛 Report a problem →
      </a>
    ),
  },
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
