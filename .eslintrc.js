/*
 * @Description:
 * @Author: Yao
 * @Date: 2020-04-10 17:13:07
 * @LastEditors: joker_yjc
 * @LastEditTime: 2020-05-21 14:33:11
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:vue/essential', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier', '@babel/plugin-syntax-dynamic-import'],
  rules: {
    'prettier/prettier': 'error',
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
