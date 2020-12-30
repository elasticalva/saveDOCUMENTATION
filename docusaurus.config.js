module.exports = {
  title: 'SRPGC',
  tagline: 'GAME DESIGN DOCUMENT',
  url: 'https://elasticalva.github.io/srpgc/',
  baseUrl: '/srpgc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'elasticalva', // Usually your GitHub org/user name.
  projectName: 'SRPGC', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'SRPGC',
      logo: {
        alt: 'SRPGC Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/mdx',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {to: 'about', label: 'About', position: 'right'},
        {
          href: 'https://github.com/elasticalva/srpgc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Quick Start',
              to: 'docs/',
            },
            {
              label: 'Introduction',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About',
              to: 'about',
            },
            {
              label: 'GitHub',
              href: 'https://elasticalva.github.io/srpgc/',
            },
          ],
        },
      ],
      copyright: ` Mine, don't touch it. © ${new Date().getFullYear()} // Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
