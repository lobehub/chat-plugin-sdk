import { defineConfig } from 'vitest/config';

import { name } from './package.json';

export default defineConfig({
  esbuild: {
    jsxInject: "import React from 'react'",
  },
  test: {
    alias: {
      '@': './src',
      [name]: './src',
    },
    coverage: {
      reporter: ['text', 'text-summary', 'json', 'lcov'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/test-setup.ts',
  },
});
