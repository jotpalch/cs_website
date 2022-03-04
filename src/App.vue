<template> 
    <Topbar msg="topbar"/>
    <Headers msg="header" />
    <Footer msg="footer" />
</template>

<script>
import Topbar from './components/topbar.vue'
import Headers from './components/Headers.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Topbar,
    Headers,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Ngaan, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

</style>
