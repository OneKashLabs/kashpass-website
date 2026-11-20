import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// The one organization every OneKash Labs site points to, defined on onekash.org.
const ORG = {'@type': 'Organization', '@id': 'https://onekash.org/#org', name: 'OneKash Labs', url: 'https://onekash.org'};

const config: Config = {
  title: 'KashPass',
  tagline: 'Companion for your KeePass vaults with secure access and no internet',
  favicon: 'img/favicon.png',
  future: {v4: true},
  url: 'https://kashpass.onekash.org',
  baseUrl: '/',
  organizationName: 'OneKashLabs',
  projectName: 'kashpass-website',
  // GitHub Pages serves /path/index.html at /path/, so links use the slash form.
  trailingSlash: true,
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en']},
  headTags: [
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', href: '/img/logo.png'}},
    {tagName: 'meta', attributes: {name: 'theme-color', content: '#0d1440'}},
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'KashPass',
        url: 'https://kashpass.onekash.org',
        description:
          'Open and edit your KeePass vault on Android. Changes save to the same file you open in KeePass 2. No internet permission. Free and open source.',
        operatingSystem: 'Android 12 or later',
        applicationCategory: 'SecurityApplication',
        downloadUrl: 'https://github.com/OneKashLabs/KashPass/releases',
        softwareHelp: 'https://github.com/OneKashLabs/KashPass/issues',
        license: 'https://www.gnu.org/licenses/agpl-3.0.html',
        image: 'https://kashpass.onekash.org/img/logo.png',
        screenshot: [
          'https://kashpass.onekash.org/img/app/browse_list.webp',
          'https://kashpass.onekash.org/img/app/search.webp',
          'https://kashpass.onekash.org/img/app/conflict.webp',
        ],
        offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD'},
        sameAs: ['https://github.com/OneKashLabs/KashPass'],
        author: ORG,
        publisher: ORG,
      }),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'KashPass',
        url: 'https://kashpass.onekash.org/',
        publisher: ORG,
      }),
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      {
        name: 'description',
        content:
          'Open and edit your KeePass vault on Android. Changes save to the same file you open in KeePass 2. No internet permission. Free and open source.',
      },
      {property: 'og:site_name', content: 'KashPass'},
      {property: 'og:image:width', content: '1024'},
      {property: 'og:image:height', content: '500'},
      {property: 'og:image:alt', content: 'KashPass: companion for your KeePass vaults with secure access and no internet. The app icon and Kash, the mascot.'},
      {name: 'twitter:image:alt', content: 'KashPass: companion for your KeePass vaults with secure access and no internet. The app icon and Kash, the mascot.'},
    ],
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'KashPass',
      logo: {alt: 'KashPass logo', src: 'img/icon-rounded.png'},
      items: [
        // The home page is not this link's page, so it never shows as the current one.
        {to: '/#get', label: 'Get KashPass', position: 'left', activeBaseRegex: '^$'},
        {to: '/beta/', label: 'Join the beta', position: 'left'},
        {href: 'https://github.com/sponsors/one-kash', label: 'Donate', position: 'right'},
        {href: 'https://github.com/OneKashLabs/KashPass', label: 'Source', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          items: [
            {label: 'Get KashPass', to: '/#get'},
            {label: 'Join the beta', to: '/beta/'},
            {label: 'Privacy', href: 'https://github.com/OneKashLabs/KashPass/blob/main/PRIVACY.md'},
            {label: 'Security', href: 'https://github.com/OneKashLabs/KashPass/blob/main/SECURITY.md'},
            {label: 'Report a problem', href: 'https://github.com/OneKashLabs/KashPass/issues'},
            {label: 'Donate', href: 'https://github.com/sponsors/one-kash'},
            {label: 'Source', href: 'https://github.com/OneKashLabs/KashPass'},
          ],
        },
      ],
      copyright:
        'Built with love in Austin by <a href="https://onekash.org">onekash labs</a>. Free and open source under AGPL-3.0. Not affiliated with KeePass.',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
