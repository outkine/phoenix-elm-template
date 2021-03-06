module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['lodash', 'lodash-fp', 'standard'],
  extends: ['plugin:lodash/recommended', 'plugin:lodash-fp/recommended', 'standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],

    // temporary fix for the pipeline operator
    'operator-linebreak': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash-fp/no-unused-result': 'off',

    // ignore lodash variable
    'no-unused-vars': ['error', { varsIgnorePattern: '^_*' }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
