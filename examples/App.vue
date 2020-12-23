<template>
  <div id="app">
    <router-view/>
    <to-top></to-top>
  </div>
</template>
<script>
import ToTop from '@/components/ToTop'
export default {
  components: {
    ToTop
  }
}
</script>
<style lang="less">
@import './assets/global.less';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
