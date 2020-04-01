<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <Contador /><Contador /><Contador /><Contador /><Contador /><br>
    <h2>Listado de planes de cursos de progra</h2>
    <planes />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Contador from './components/Contador.vue'
import Planes from './components/Planes.vue'

export default {
  name: 'App',
  components: {
    Contador,
    Planes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

</style>
