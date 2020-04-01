<template>
  <div class="container">
    <Header/>
    <Posts/>
    <Footer/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Posts from './components/Posts'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Posts,
    Header,
    Footer
  }
}
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min";
</style>
