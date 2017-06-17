module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'react'
  ],
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/self-closing-comp': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-wrap-multilines': 1
  }
};
