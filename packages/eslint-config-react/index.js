import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  ...reactHooksPlugin.configs['flat/recommended'],
  {
    plugins: {
      reactPlugin
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.serviceworker
      }
    },
    settings: {
      react: {
        version: '19'
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
      'react/jsx-tag-spacing': [1, {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }],
      'react/jsx-uses-react': 0,
      'react/jsx-uses-vars': 1,
      'react/jsx-wrap-multilines': [1, {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens',
        condition: 'parens',
        logical: 'parens',
        prop: 'parens'
      }],
      'react/function-component-definition': [1, {
        namedComponents: 'function-declaration',
        unnamedComponents: 'function-expression'
      }],
      'react/no-danger': 1,
      'react/no-did-mount-set-state': 1,
      'react/no-did-update-set-state': 1,
      'react/no-direct-mutation-state': 1,
      'react/no-typos': 1,
      'react/no-unused-prop-types': 1,
      'react/no-unused-state': 1,
      'react/react-in-jsx-scope': 0,
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
  }
];
