<template>
  <div style="text-align: center; height: 100%; padding: 15px;">
    <div>
      <router-link to="/">home</router-link>|
      <router-link to="/about">about</router-link>|
      <router-link to="/list">list</router-link>
      <!-- <div>
        <router-link to="/vue/">vue</router-link>|
        <router-link to="/vue/about">vue/about</router-link>
      </div>-->
    </div>
    <!-- <router-view v-show="$route.name"></router-view>
    <div v-show="!$route.name" id="iframe"></div> -->
    <ul>
      <li v-for='(item,index) in arr' :key="item" @click="e=>changeItem(index)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      arr:[1,2,3,4,5],
      color:"red"
    }
  },
  methods: {
    changeItem(index){
      this.arr.push(this.arr.length+1)
    }
  }
}
</script>
<style  :vars="{color}">
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
li{
  color:var(--color)
}
</style>
