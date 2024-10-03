// .eslintrc.js
module.exports = {
  extends: [
    '@salesforce/eslint-config-lwc/recommended',
  ],
  env: {
    node: true,
    es2020: true,
  },
  plugins: [
    '@stylistic/js'
  ],
  rules: {
    'no-unused-vars': 'off',
    '@stylistic/js/lines-between-class-members': ['error', 'always'],
    '@stylistic/js/padding-line-between-statements': ["error", { blankLine: "always", prev: "*", next: ["export", "function"] }],
    '@stylistic/js/max-len': ["error", { "code": 120, "tabWidth": 4, "ignoreUrls": true  }]
  }
}