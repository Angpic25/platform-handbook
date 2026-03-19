export default {
  logo: <span style={{ fontWeight: 800, fontSize: '1.25rem' }}>Platform Handbook</span>,
  project: {
    link: 'https://platform.accessiway.com',
    icon: <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Open Platform →</span>,
  },
  footer: { text: 'From your Product Team, with care 🌱' },
  feedback: {
    content: <span style={{ fontSize: '0.95rem' }}>📣 Feedback or questions? →</span>,
    useLink: () => 'https://accessiway.slack.com/channels/platform-internal-feedbacks'
  },
  editLink: { component: () => null },
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
