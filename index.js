module.exports = {
  "env": {
    "node": true,
    "mocha": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "rules": {
    /* Strict Mode */
    "strict": 0,

    /* Possible Errors are covered in "eslint:recommended" */
    "no-unsafe-finally": 1,

    /* Best Practices */
    "array-callback-return": 1,
    "block-scoped-var": 1,
    "complexity": 1,
    "consistent-return": 1,
    "curly": 1,
    "default-case": 1,
    "dot-location": [1, "property"],
    "dot-notation": 1,
    "eqeqeq": 1,
    "guard-for-in": 1,
    "no-alert": 1,
    "no-caller": 1,
    "no-div-regex": 1,
    "no-else-return": 1,
    "no-eval": 1,
    "no-extend-native": 1,
    "no-extra-bind": 1,
    "no-extra-label": 1,
    "no-floating-decimal": 1,
    "no-implicit-coercion": 1,
    "no-implicit-globals": 1,

    "no-multi-spaces": 1,
    "no-useless-call": 1,
    "radix": 1,
    "vars-on-top": 1,
    "yoda": 1,

    /* Stylistic Issues */
    "brace-style": [1, "1tbs", {"allowSingleLine": true}],
    "comma-style": 1,
    "computed-property-spacing": 1,
    "eol-last": 1,
    "indent": [1, 2, { "VariableDeclarator": {"var": 2, "let": 2, "const": 3}, "SwitchCase": 1}],
    "keyword-spacing": 1,
    "linebreak-style": [1, "unix"],
    "no-spaced-func": 1,
    "no-trailing-spaces": 1,
    "object-curly-spacing": [1, "always"],
    "quote-props": [1, "as-needed"],
    "quotes": [1, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    "semi": [1, "always"],
    "semi-spacing": 1,
    "one-var": 1,
    // "sort-vars": 1,
    "space-before-blocks": 1,
    "space-before-function-paren": [1, {"anonymous": "always", "named": "never"}],
    "space-in-parens": 1,
    "space-infix-ops": 1,
    "space-unary-ops": 1,
    "spaced-comment": 1,
    "wrap-regex": 1,

    /* Variables */
    "init-declarations": 1,
    "no-catch-shadow": 1,
    "no-label-var": 1,
    "no-restricted-globals": 1,
    "no-shadow": 1,
    "no-shadow-restricted-names": 1,
    "no-undef-init": 1,
    "no-undefined": 1,
    "no-use-before-define": 1,

    /* Node.js and CommonJS */
    "callback-return": 1,
    "global-require": 1,
    "handle-callback-err": 1,
    // "no-mixed-requires": 1,
    "no-new-require": 1,
    "no-path-concat": 1,
    // "no-process-env": 1,
    "no-process-exit": 1,
    "no-restricted-modules": 1,
    "no-sync": 1,

    /* ES6 */
    "arrow-body-style": 1,
    "arrow-parens": [1, "as-needed"],
    "arrow-spacing": 1,
    "no-confusing-arrow": 1,
    "no-useless-computed-key": 1,
    "no-var": 1,
    "prefer-const": 1,
    "prefer-template": 1,
    "sort-imports": 1,
    "template-curly-spacing": 1
  }
};
