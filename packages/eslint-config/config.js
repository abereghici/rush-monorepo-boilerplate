const fs = require('fs');
const path = require('path');

const tsConfig = fs.existsSync('tsconfig.json')
  ? path.resolve('tsconfig.json')
  : undefined;

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  globals: {
    globals: true,
    shallow: true,
    render: true,
    mount: true,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: tsConfig,
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
};
