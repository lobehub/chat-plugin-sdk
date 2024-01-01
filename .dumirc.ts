import { defineConfig } from 'dumi';

import { homepage } from './package.json';

const isWin = process.platform === 'win32';

const themeConfig = {
  actions: [
    {
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/quick-start/intro',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  footer: 'Made with 🤯 by LobeHub',
  name: 'Lobe Chat Plugin SDK',
  socialLinks: {
    discord: 'https://discord.gg/AYFPHvv2jT',
    github: homepage,
  },
};

export default defineConfig({
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: [
    'https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/puzzle-piece.webp',
  ],
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '简体中文' },
  ],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  outputPath: 'docs-dist',
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Lobe Chat Plugin SDK',
});
