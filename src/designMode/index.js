/*
 * @Description: 
 * @Author: Yao
 * @Date: 2020-04-24 09:43:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-24 09:53:53
 */
// 观察者模式
class Subject{
    constructor(){
        this.observers=[]
    }

    // 添加
    add(observer){
        this.observers.push(observer)
    }

    remove(pbserver){

    }
}