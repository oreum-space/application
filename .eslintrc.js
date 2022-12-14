module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['vue', 'html'],
  rules: {
    eqeqeq: 1,
    curly: 1,
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    'vue/max-len': ['warn', { code: 120, ignoreHTMLTextContents: true }],
    'no-multi-spaces': [
      'warn', {
        ignoreEOLComments: true,
        exceptions: {
          ImportDeclaration: true,
          VariableDeclarator: true,
          Property: true
        }
      }
    ]
  }
}
