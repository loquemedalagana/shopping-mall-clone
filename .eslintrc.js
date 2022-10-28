module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx', 'cypress/**/*.spec.cy.js'],
      env: {
        jest: true,
        'cypress/globals': true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'cypress'],
  rules: {
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
};
