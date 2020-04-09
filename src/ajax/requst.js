/*
 * @Description:
 * @Author: Yao
 * @Date: 2020-04-02 14:47:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-09 18:17:24
 */
import { addressConfig } from "../config";
function testPath(path) {
  let flag = /http:/.test(path),
    fullPath = "";
  if (!flag) {
    console.log("这不是一个完整url地址");
    Object.keys(addressConfig).forEach(el => {
      if (addressConfig[el].paths.includes(path)) {
        process.env.NODE_ENV === "development"
          ? (fullPath = addressConfig[el].devUrl + path)
          : (fullPath = addressConfig[el].baseUrl + path);
          console.log(addressConfig[el])
      }
    });
  } else {
    console.log("这是一个完整的url地址");
    fullPath = path;
  }
  
  return fullPath ? fullPath :  new Error("未找到对应的url请补充");
}

// let fullPath = testPath("api2/getlist12");
// console.log(fullPath);
console.log( process.env.NODE_ENV)
