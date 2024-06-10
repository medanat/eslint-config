module.exports = {
  root: true,
  plugins: [
    'n'
  ],
  env: {
    node: true,
    mocha: true
  },
  extends: [
    'plugin:n/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Possible Errors
    'n/handle-callback-err': 1,
    'n/no-new-require': 1,
    'n/no-path-concat': 1,
    'n/no-process-exit': 1,
    'n/no-unpublished-require': 0,

    // Stylistic Issues
    'n/callback-return': 1,
    'n/no-mixed-requires': 0,
    'n/no-process-env': 0,
    'n/no-restricted-require': 1,
    'n/no-sync': 1,

    'n/no-unsupported-features/node-builtins': 0
  }
};
