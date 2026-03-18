export default {
  logo: <span style={{ fontWeight: 800, fontSize: '1.25rem' }}>Platform Handbook</span>,
  project: {
    link: 'https://platform.accessiway.com',
    icon: <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Open Platform →</span>,
  },
  footer: { text: 'AccessiWay Internal Training Documentation' },
  feedback: { content: null },
  editLink: { component: () => null },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    float: true,
    extraContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '0.5rem' }}>
        <a
          href="https://slack.com/app_redirect?channel=platform-internal-feedbacks"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.95rem' }}
        >
          💬 Give us feedback →
        </a>
        <a
          href="https://slack.com/app_redirect?channel=platform-internal-feedbacks"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.95rem' }}
        >
          🐛 Report a problem →
        </a>
      </div>
    ),
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
