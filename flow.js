module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:flowtype/recommended'
  ],
  plugins: [
    'flowtype'
  ],
  rules: {
    'flowtype/no-types-missing-file-annotation': 0
  }
};
