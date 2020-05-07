/*
 * @Description: 
 * @Author: Yao
 * @Date: 2020-04-24 09:43:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-07 15:09:32
 */
// 事件触发器
class EventEmit{
    constructor(){
        this.eventObj={};
    }
    on(ename,cb){
        if(this.eventObj[ename]){
            this.eventObj[ename].push(cb)
        }else{
            this.eventObj[ename]=[cb]
        }
    }
    trigger(ename,...arg){
        if(this.eventObj[ename]){
            this.eventObj[ename].forEach(element => {
                element(...arg)
            });
        }
    }
}

let t=new EventEmit()
t.on('sayHi',function(name){
    console.log('hello,'+name)
})
t.trigger('sayHi','joke')