/*
 * @Description: 
 * @Author: Yao
 * @Date: 2020-04-10 17:13:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-10 17:21:44
 */
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'standard',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'vue',
    'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
