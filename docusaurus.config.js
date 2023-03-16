// const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : '/docs/';

module.exports = {
  title: 'geek{.zone}',
  tagline: 'Geek Zone',
  url: 'https://gz.yyyd.site',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/pf.png',
  organizationName: 'crustio',
  onBrokenLinks: 'warn',
  projectName: 'docs',
  stylesheets: [],
  themeConfig: {
    navbar: {
      title: 'geek{.zone}',
      logo: {
        alt: 'geek{.zone}',
        src: 'img/pf.png',
      },
      items: [
        {
          href: 'https://gz.yyyd.site',
          label: 'Apps UI (Wallet)',
          position: 'right',
        },
        {
          href: 'https://github.com/yashirooooo/geek-zone',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {}
  },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/yashirooooo/geek-zone/edit/master/',
        routeBasePath: '/'
      },
      blog: {
        showReadingTime: true,
        editUrl: 'https://github.com/yashirooooo/geek-zone/edit/master/',
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      }
    }]
  ]
};
