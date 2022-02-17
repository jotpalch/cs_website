<template> 
  <div class="flex flex-col h-screen">
    <Topbar msg="topbar"/>
    <Headers msg="header" />
  </div>
</template>

<script>
import Topbar from './components/topbar.vue'
import Headers from './components/Headers.vue'

export default {
  name: 'App',
  components: {
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
  margin-top: 0;
}

</style>
