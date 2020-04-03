/*
 * @Description:
 * @Author: Yao
 * @Date: 2020-04-02 14:06:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-02 15:10:04
 */
window.ADDCONFIG = {
  config1: {
    basUrl: "http://www.baidu.com/",
    devUrl:'http://dev.baidu.com',
    paths: ["api1/getlist", "api1/delete"]
  },
  config2: {
    baseUrl: "http://www.qq.com/",
    devUrl:"http://dev.qq1.com/",
    paths: ["api2/getlist", "api2/delete"]
  }
};
console.log("文件引入成功")