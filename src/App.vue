<template>
  <div id="app">    
    <app-contador v-for="c in 5" :key="c"></app-contador>
  </div>
</template>

<script>

import Contador from './components/Contador'

export default {
  components:{ 'app-contador' : Contador }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
