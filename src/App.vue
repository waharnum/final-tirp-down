<template>
  <div id="app">
    <FinalTIRPDown classesRemaining="5" countDown="5 weeks"/>
  </div>
</template>

<script>
import FinalTIRPDown from './components/FinalTIRPDown.vue'

export default {
  name: 'app',
  components: {
    FinalTIRPDown
  }
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
