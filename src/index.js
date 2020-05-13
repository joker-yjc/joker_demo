import Vue from 'vue'
import app from './vue_project/app.vue'
console.log(process.env.NODE_ENV,'test')

// //commonjs输出的是值的拷贝
// // ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。
// let a = require("./c_module").a;
// let getA = require("./c_module").getA;
// import { b } from "./e_module";
// console.log("a:", a);
// console.log("getA:", getA());
// console.log("b:", b);
// setTimeout(() => {
//   console.log("a:", require("./c_module").a);
//   console.log("getA:", getA());
//   console.log("b:", b);
// }, 5000);

// //执行加载的文件
// import './e_action'

// //本质上，export default就是输出一个叫做default的变量或方法
// import { default as obj } from "./e_default"
// console.log(obj)

// 使用import()动态加载模块
// import('./e_default').then(module=>{
//     console.log(module)
// })

// import './x'
// import './y'

// import './styles/index.css'

/* eslint-disable  */
new Vue({
  el: '#app',
  render: (h) => h(app),
})
