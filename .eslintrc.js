const config = require('@lobehub/lint').eslint;

module.exports = {
  ...config,
  globals: {
    HeadersInit: false,
  },
  rules: {
    ...config.rules,
    'unicorn/no-useless-undefined': 0,
    'unicorn/prefer-string-replace-all': 0,
    'unicorn/switch-case-braces': 0,
  },
};
