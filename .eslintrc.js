module.exports = {
  root: true,

  env: {
    'browser': true,
    'node': true
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],

  parserOptions: {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'max-classes-per-file': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off',
    'lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
    'arrow-parens': 'off'
  },

  settings: {
    'import/resolver': {
      alias: {
        map: [['~', 'src']]
      },
    },
  },
};
