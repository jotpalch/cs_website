<template> 
    <Topbar msg="topbar"/>
    <Headers msg="header" />
    <Photos msg="photos" />
</template>

<script>
import Topbar from './components/topbar.vue'
import Headers from './components/Headers.vue'
import Photos from './components/photos.vue'

export default {
  name: 'App',
  components: {
    Topbar,
    Headers,
    Photos
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
