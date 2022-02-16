<template> 
  <Topbar msg="Welcome to Your Vue.js App"/>
  <Headers msg="header" />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Topbar from './components/topbar.vue'
import Headers from './components/Headers.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Topbar,
    Headers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  background: #2c3e62;
}
</style>
