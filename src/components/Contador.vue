<template>
  <div id="app">
    <span>{{ contador }}</span>
    <button @click="contador++">+</button>
    <button @click="contador--">-</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contador: 0,
    }
  }
}
</script>

<style>
  #app button{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: coral;
    border:none;
    margin-left: 20px;
    color: #fff;
  }
  #app span{
    
    
  }
</style>
