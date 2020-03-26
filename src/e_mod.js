/*
 * @Description: 
 * @Autor: Yao
 * @Date: 2020-03-26 17:12:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-26 17:12:58
 */
// mod.js
function C() {
    this.sum = 0;
    this.add = function () {
      this.sum += 1;
    };
    this.show = function () {
      console.log(this.sum);
    };
  }
  
  export let c = new C();