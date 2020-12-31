module.exports = {
  title: 'srpgc',
  tagline: 'GAME DESIGN DOCUMENT',
  url: 'https://elasticalva.github.io/srpgc',
  baseUrl: '/srpgc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'elasticalva', // Usually your GitHub org/user name.
  projectName: 'srpgc', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    navbar: {
      title: 'srpgc',
      logo: {
        alt: 'SRPGC Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/03story',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'docs/18usag',
          activeBasePath: 'docs',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'docs/02meet',
          activeBasePath: 'docs',
          label: 'Community',
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
              label: 'Help',
              to: 'docs/18usag',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Who?',
              to: 'docs/02meet',
            },
            {
              label: 'Contribution',
              to: 'docs/23cont',
            },
            /**{
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },*/
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
              href: 'https://elasticalva.github.io/srpgc',
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
            'srpgc',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
