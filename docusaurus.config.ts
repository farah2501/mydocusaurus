import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Demo',
  tagline: 'Documentation website',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://my-docusaurus.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          include: [
            '**/*.md', // Include all markdown files'**/*.mdx', // Include all MDX files
          ],
          editUrl: 'https://mysampledocusaurus.netlify.app/',
          includeCurrentVersion: true, // Include the current version
          versions: {
            current: {
              label: '1.2.0', // Label for the current version
              path: '/', // Root path for the current version
              banner: 'unreleased', // Banner type
              badge: true, // Show the version badge
            },
            '1.1.0': {
              label: '1.1.0',
              path: '1.1.0', // Path to version 1.0.0 documentation
              banner: 'unreleased', // Optional banner type
              badge: true, // Show the version badge
            },
            '1.0.0': {
              label: '1.0.0',
              path: '1.0.0', // Path to version 1.0.0 documentation
              banner: 'unreleased', // Optional banner type
              badge: true, // Show the version badge
            },
            // You can add more specific version configurations here
          },
          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Declare some <meta> tags
    metadata: [
      {name: 'keywords', content: 'cooking, blog'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Versions',
          position: 'right',
          items: [
            // Add items for each version
            { label: '1.2.0', to: '/docs/single-page' },
            { label: '1.1.0', to: '/docs/1.1.0/single-page' },
            { label: '1.0.0', to: '/docs/1.0.0/single-page' },
            // Add more versions as needed
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'doc',
          docId: 'changelog',
          label: 'Changelog',
          position: 'left',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {to: '/about', label: 'About', position: 'left'},

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/single-page',
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
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  headTags: [
    // Declare a <link> preconnect tag
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://example.com',
      },
    },
    // Declare some json-ld structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: 'Meta Open Source',
        url: 'https://opensource.fb.com/',
        logo: 'https://opensource.fb.com/img/logos/Meta-Open-Source.svg',
      }),
    },
  ],
};

export default config;
