module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false
  },
  extends: [
    'plugin:flowtype/recommended'
  ],
  plugins: [
    '@babel',
    'flowtype'
  ],
  rules: {
    'flowtype/no-types-missing-file-annotation': 0
  }
};
