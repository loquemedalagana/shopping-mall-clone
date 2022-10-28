module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'cypress/recommended'],
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx', 'cypress/**/*.spec.cy.js'],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
};
