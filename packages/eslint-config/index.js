import js from '@eslint/js';
import json from '@eslint/json';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';

export default [
  js.configs.recommended,
  json.configs.recommended,
  stylistic.configs.all,
  {
    rules: {

      /* Strict Mode */
      strict: 0,

      /* Possible Errors are covered in "eslint:recommended" */
      'no-prototype-builtins': 1,
      'no-template-curly-in-string': 1,
      'no-unsafe-negation': 1,

      /* Best Practices */
      'block-scoped-var': 1,
      complexity: 1,
      'consistent-return': 1,
      curly: 1,
      'default-case': 1,
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
      'no-implicit-coercion': 1,
      'no-implicit-globals': 1,
      'no-param-reassign': 1,
      'no-return-assign': 1,
      'no-useless-call': 1,
      radix: 1,
      'vars-on-top': 1,
      yoda: [1, 'never', { exceptRange: true }],

      /* @stylistic Issues */
      '@stylistic/array-bracket-newline': [1, 'consistent'],
      '@stylistic/array-bracket-spacing': [1, 'never'],
      '@stylistic/array-element-newline': [0, 'consistent'],
      '@stylistic/arrow-parens': [1, 'as-needed'],
      '@stylistic/arrow-spacing': 1,
      '@stylistic/block-spacing': 1,
      '@stylistic/brace-style': [1, '1tbs', { allowSingleLine: true }],
      '@stylistic/comma-dangle': [1, 'never'],
      '@stylistic/comma-spacing': 1,
      '@stylistic/comma-style': 1,
      '@stylistic/computed-property-spacing': 1,
      '@stylistic/dot-location': [1, 'property'],
      '@stylistic/eol-last': 1,
      '@stylistic/function-call-argument-newline': [1, 'consistent'],
      '@stylistic/function-call-spacing': 1,
      '@stylistic/function-paren-newline': [1, 'consistent'],
      '@stylistic/indent': [1, 2, {
        offsetTernaryExpressions: true,
        VariableDeclarator: { var: 2, let: 2, const: 3 },
        SwitchCase: 1,
        ObjectExpression: 'first',
        ImportDeclaration: 'first'
      }],
      '@stylistic/jsx-quotes': [1, 'prefer-single'],
      '@stylistic/key-spacing': 1,
      '@stylistic/keyword-spacing': 1,
      '@stylistic/linebreak-style': [1, 'unix'],
      '@stylistic/lines-around-comment': [1, { allowBlockStart: true, ignorePattern: '@type|@param' }],
      '@stylistic/max-len': [1, {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }],
      '@stylistic/multiline-comment-style': [1, 'separate-lines'],
      '@stylistic/multiline-ternary': [1, 'always-multiline'],
      '@stylistic/newline-per-chained-call': [1, { ignoreChainWithDepth: 5 }],
      '@stylistic/no-confusing-arrow': [1, { allowParens: true }],
      '@stylistic/no-extra-parens': 0,
      '@stylistic/no-floating-decimal': 1,
      '@stylistic/no-multi-spaces': 1,
      '@stylistic/no-multiple-empty-lines': [1, { max: 1, maxEOF: 0, maxBOF: 0 }],
      '@stylistic/no-tabs': 1,
      '@stylistic/no-trailing-spaces': 1,
      '@stylistic/object-curly-newline': [1, {
        consistent: true
      }],
      '@stylistic/object-curly-spacing': [1, 'always'],
      '@stylistic/object-property-newline': [1, { allowAllPropertiesOnSameLine: true }],
      '@stylistic/one-var-declaration-per-line': [1, 'always'],
      '@stylistic/operator-linebreak': [1, 'after', { overrides: { '?': 'before', ':': 'before', '||': 'before', '&&': 'before' } }],
      '@stylistic/padded-blocks': [1, 'never', { allowSingleLineBlocks: false }],
      '@stylistic/padding-line-between-statements': [1, {
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
      '@stylistic/semi-spacing': 1,
      '@stylistic/quotes': [1, 'single', { allowTemplateLiterals: 'never', avoidEscape: true }],
      '@stylistic/quote-props': [1, 'as-needed'],
      '@stylistic/semi': [1, 'always'],
      '@stylistic/space-before-blocks': 1,
      '@stylistic/space-before-function-paren': [1, { anonymous: 'always', named: 'never' }],
      '@stylistic/space-in-parens': 1,
      '@stylistic/space-infix-ops': 1,
      '@stylistic/space-unary-ops': 1,
      '@stylistic/spaced-comment': 1,
      '@stylistic/template-curly-spacing': 1,
      '@stylistic/wrap-regex': 1,

      /* Stylistic Issues */
      'array-callback-return': 1,
      'func-style': [1, 'declaration', {
        allowArrowFunctions: false
      }],
      'no-lonely-if': 1,
      'no-underscore-dangle': 1,

      'no-unneeded-ternary': [1, {
        defaultAssignment: false
      }],
      'one-var': [1, {
        initialized: 'never'
      }],
      'sort-vars': 0,

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
      'no-duplicate-imports': [1, { includeExports: true }],
      'no-useless-computed-key': 1,
      'no-useless-rename': 1,
      'no-var': 1,
      'object-shorthand': [1, 'properties'],
      'prefer-const': 1,
      'prefer-template': 1
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
