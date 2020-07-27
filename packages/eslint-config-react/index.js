module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: [
    'babel',
    'react'
  ],
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  extends: [
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: '16.8'
    }
  },
  rules: {
    'react/forbid-prop-types': [1, {
      checkContextTypes: true,
      checkChildContextTypes: true
    }],
    'react/jsx-curly-brace-presence': [1, 'never'],
    'react/jsx-indent-props': [1, 2],
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-wrap-multilines': 1,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-typos': 1,
    'react/no-unused-prop-types': 1,
    'react/no-unused-state': 1,
    'react/self-closing-comp': [1, {
      component: true,
      html: true
    }],
    'react/sort-comp': [1, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ]
    }]
  }
};
