/*
 * @Description: 
 * @Autor: Yao
 * @Date: 2020-03-26 14:52:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-27 10:36:03
 */


 let a=12;
 setTimeout(()=>{
    a=20;
 },3000)

 let getA=function(){
     return a
 }

 module.exports={
     a,
     getA
 }