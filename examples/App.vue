<template>
  <div id="app" class="parent-dom">
    <router-view />
    <to-top></to-top>
  </div>
</template>
<script>
import ToTop from '@/components/ToTop'

export default {
  components: {
    ToTop
  },
  data () {
    return {
    }
  },
  mounted () {}
}
</script>
<style lang="less">
@import './assets/global.less';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
}
</style>
