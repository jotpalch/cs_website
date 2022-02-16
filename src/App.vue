<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div class="container">
    <div class="logo-box">
      <div class="name-box">
        <a href="/">
          <h1 class="site-name">國立陽明交通大學-資訊工程學系</h1>
        </a>
        <span class="site-tageline">高中生專區</span>
      </div>
    </div> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import '~bootstrap/scss/bootstrap';  

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
