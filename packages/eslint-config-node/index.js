module.exports = {
  root: true,
  plugins: [
    'node'
  ],
  env: {
    node: true,
    mocha: true
  },
  extends: [
    'plugin:node/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    // Possible Errors
    'node/handle-callback-err': 1,
    'node/no-new-require': 1,
    'node/no-path-concat': 1,
    'node/no-process-exit': 1,

    // Stylistic Issues
    'node/callback-return': 1,
    'node/no-mixed-requires': 0,
    'node/no-process-env': 0,
    'node/no-restricted-require': 1,
    'node/no-sync': 1
  }
};
