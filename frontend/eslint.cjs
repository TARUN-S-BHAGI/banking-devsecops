module.exports = {
  env: {
    browser: true,       //  Enables browser globals like `window`, `document`
    es2021: true,        //  Enables ES2021 features
    node: true,          //  Enables Node.js globals like `process`, `require`
  },
  extends: [
    'react-app',         //  Enables recommended React/JSX rules from Create React App
    'eslint:recommended' //  Enables core recommended ESLint rules
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module', //  Supports ES Modules (import/export)
  },
  rules: {
    // You can add rules here like:
    // 'no-console': 'warn',
    // 'react/prop-types': 'off',
  },
};
