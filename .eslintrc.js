/*
 * @Description:
 * @Author: Yao
 * @Date: 2020-04-10 13:02:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-10 13:59:55
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:vue/essential", "standard", 'plugin:prettier/recommended'],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "prettier/prettier": "error",
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
