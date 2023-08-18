const config = require('@lobehub/lint').eslint;

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'unicorn/prefer-string-replace-all': 0,
  },
};
