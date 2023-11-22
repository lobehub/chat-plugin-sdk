module.exports = {
  markdown: {
    entry: ['./docs/guides/template.zh-CN.md'],
    entryLocale: 'zh-CN',
    entryExtension: '.zh-CN.md',
    outputLocales: ['en-US'],
    outputExtensionsOverrides: {
      'en-US': '.md',
    },
  },
  modelName: 'gpt-3.5-turbo-1106',
};
