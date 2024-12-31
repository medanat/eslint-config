import js from '@eslint/js';
import json from '@eslint/json';
import globals from 'globals';

export default [
  js.configs.recommended,
  json.configs.recommended,
  {
    rules: {
      /* Strict Mode */
      strict: 0,

      /* Possible Errors are covered in "eslint:recommended" */
      'no-extra-parens': 0,
      'no-prototype-builtins': 1,
      'no-template-curly-in-string': 1,
      'no-unsafe-negation': 1,

      /* Best Practices */
      'block-scoped-var': 1,
      complexity: 1,
      'consistent-return': 1,
      curly: 1,
      'default-case': 1,
      'dot-location': [1, 'property'],
      'dot-notation': 1,
      eqeqeq: 1,
      'guard-for-in': 1,
      'new-cap': 0,
      'no-alert': 1,
      'no-await-in-loop': 1,
      'no-caller': 1,
      'no-div-regex': 1,
      'no-else-return': 1,
      'no-eval': 1,
      'no-extend-native': 1,
      'no-extra-bind': 1,
      'no-extra-label': 1,
      'no-floating-decimal': 1,
      'no-implicit-coercion': 1,
      'no-implicit-globals': 1,
      'no-multi-spaces': 1,
      'no-param-reassign': 1,
      'no-return-assign': 1,
      'no-useless-call': 1,
      radix: 1,
      'vars-on-top': 1,
      yoda: [1, 'never', { exceptRange: true }],

      /* Stylistic Issues */
      'array-bracket-newline': [1, 'consistent'],
      'array-bracket-spacing': [1, 'never'],
      'array-callback-return': 1,
      'block-spacing': 1,
      'brace-style': [1, '1tbs', { allowSingleLine: true }],
      'comma-dangle': 1,
      'comma-spacing': 1,
      'comma-style': 1,
      'computed-property-spacing': 1,
      'eol-last': 1,
      'func-call-spacing': 1,
      'func-style': [1, 'declaration', {
        allowArrowFunctions: false
      }],
      indent: [1, 2, {
        offsetTernaryExpressions: true,
        VariableDeclarator: { var: 2, let: 2, const: 3 },
        SwitchCase: 1,
        ObjectExpression: 'first',
        ImportDeclaration: 'first'
      }],
      'jsx-quotes': [1, 'prefer-single'],
      'key-spacing': 1,
      'keyword-spacing': 1,
      'linebreak-style': [1, 'unix'],
      'max-len': [1, {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }],
      'no-lonely-if': 1,
      'no-multiple-empty-lines': [1, { max: 1, maxEOF: 0, maxBOF: 0 }],
      'no-tabs': 1,
      'no-trailing-spaces': 1,
      'no-underscore-dangle': 1,
      'object-curly-newline': [1, {
        consistent: true
      }],
      'object-curly-spacing': [1, 'always'],
      'one-var-declaration-per-line': [1, 'always'],
      'padded-blocks': [1, 'never', { allowSingleLineBlocks: false }],
      'padding-line-between-statements': [1, {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      }, {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }, {
        blankLine: 'always',
        prev: '*',
        next: 'function'
      }, {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }, {
        blankLine: 'always',
        prev: '*',
        next: 'if'
      }],
      'quote-props': [1, 'as-needed'],
      quotes: [1, 'single', { allowTemplateLiterals: false, avoidEscape: true }],
      'semi-spacing': 1,
      semi: [1, 'always'],
      'multiline-ternary': [1, 'always-multiline'],
      'no-unneeded-ternary': [1, {
        defaultAssignment: false
      }],
      'one-var': [1, {
        initialized: 'never'
      }],
      'sort-vars': 0,
      'space-before-blocks': 1,
      'space-before-function-paren': [1, { anonymous: 'always', named: 'never' }],
      'space-in-parens': 1,
      'space-infix-ops': 1,
      'space-unary-ops': 1,
      'spaced-comment': 1,
      'wrap-regex': 1,

      /* Variables */
      'init-declarations': 1,
      'no-label-var': 1,
      'no-restricted-globals': 1,
      'no-shadow': 0,
      'no-shadow-restricted-names': 1,
      'no-undef-init': 1,
      'no-unused-vars': [1, {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_'
      }],
      'no-use-before-define': 1,

      /* ES6 */
      'arrow-body-style': 1,
      'arrow-parens': [1, 'as-needed'],
      'arrow-spacing': 1,
      'no-confusing-arrow': [1, { allowParens: true }],
      'no-duplicate-imports': [1, { includeExports: true }],
      'no-useless-computed-key': 1,
      'no-useless-rename': 1,
      'no-var': 1,
      'object-shorthand': [1, 'properties'],
      'prefer-const': 1,
      'prefer-template': 1,
      'template-curly-spacing': 1
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.mocha,
        ...globals.node
      }
    }
  }
];
