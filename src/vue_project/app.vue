<template>
  <div style="text-align: center; height: 100%; padding: 15px;">
    <div>
      <router-link to="/">home</router-link>|
      <router-link to="/about">about</router-link>|
      <router-link to="/list">list</router-link>
      <!-- <div>
        <router-link to="/vue/">vue</router-link>|
        <router-link to="/vue/about">vue/about</router-link>
      </div> -->
    </div>
    <router-view v-show="$route.name"></router-view>
    <div v-show="!$route.name" id="iframe"></div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
