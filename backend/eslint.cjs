module.exports = {
  env: {
    node: true,       // Enables Node.js globals like process, require, __dirname
    es2021: true      // Enables ES2021 features
  },
  parserOptions: {
    ecmaVersion: 'latest',      //  Use latest ECMAScript features
    sourceType: 'module'        // Allow `import/export` (ES Modules)
  },
  extends: ['eslint:recommended'],  //  Basic recommended ESLint rules
  rules: {
    'no-console': 'off',        // Allows using console.log
    'no-undef': 'off'           // Avoids errors like “require is not defined”
  }
};
