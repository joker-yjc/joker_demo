<template>
<div class="messageBox" v-show="visiable">
  <span v-if="type==='success'" class="message success">
    {{content}}
  </span>
  <span v-if="type==='error'" class="message warn">
    {{content}}
  </span>
  <span v-if="type==='warn'" class="message warn">
    {{content}}
  </span>
  <span v-if="type==='info'" class="message info">
    {{content}}
  </span>
</div>
 
</template>
<script>
export default {
  data(){
    return {
      type:'info',
      content:"田间文本信息",
      duration:3000,
      visiable:true
    }
  },
  // props:{
  //   type:{
  //     type:String,
  //     default:'info'
  //   },
  //   duration:{
  //     type:Number,
  //     default:3000
  //   }
  // },
  methods:{
    close(){
      setTimeout(()=>{
        this.visiable=false
         this.$el.parentNode.removeChild(this.$el);
      },this.duration)
    }
  },
  mounted(){
    this.close()
  }
}
</script>
<style scoped lang="scss">
.messageBox{
  display: inline;
  position: fixed;
  top:100px;
  left: 50%;
  transform: translateX(-50%);
  .message{
    padding:10px 15px;
  }
  .info{
    border:1px solid #0090ff;
  }
  .success{
    border:1px solid #52c14a;
  }
  .warn{
    border:1px solid #faad14;
  }
  .error{
    border:1px solid #f5222d;
  }
}
</style>