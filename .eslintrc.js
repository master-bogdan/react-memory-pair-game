module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/prop-types': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-unresolved': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'import/prefer-default-export': 0,
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': 'off',
    'import/order': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'import/no-named-as-default': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
  },
};
