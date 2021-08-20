module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    camelcase: 'error',
    semi: ['error', 'always'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
      },
    },
  ],
};
