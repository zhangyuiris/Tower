module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: 0,
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['error', {
      vars: 'all', args: 'none', ignoreRestSiblings: false, caughtErrors: 'none'
    }],
    "max-line-length": [true, {
        "limit": 120,
        "ignore-pattern": "^import [^,]+ from |^export | implements"
      }
    ],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
