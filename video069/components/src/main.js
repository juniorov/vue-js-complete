// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//Componentes
/*
var component_1 = Vue.extend({
  template: '<h1>Intro </h1>',
});
var component_2 = Vue.extend({
  template: '<h3>{{ subtitle }}</h3>',
  data(){
    return {
      subtitle: 'Lista Framworsk'
    }
  }
});
var component_3 = Vue.extend({
  template: '<div><ul><lista v-for="fw in frameworks" :key="fw.id">{{ fw.titulo }}</lista> </ul></div>',
  data(){
    return {
      frameworks: [
        { id: 1, titulo: 'uno' },
        { id: 2, titulo: 'dos' },
        { id: 3, titulo: 'tres' },
      ]
    }
  }
});

Vue.component('saludo', {
  data(){
    return {
      titulo: 'Hola mundo'
    }
  },
  methods: {
    display(){
      console.log('display')
    }
  }
});
Vue.component('titulo', component_2);
Vue.component('frameworks', component_3);
Vue.component('lista', {
  template: '<li><slot></slot></li>',
});*/


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App />'
})
