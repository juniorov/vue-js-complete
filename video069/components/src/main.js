// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//Componentes

var component_1 = Vue.extend({
  template: '<h1>Intro </h1>',
});
var component_2 = Vue.extend({
  template: '<h3>Lista Framworsk </h3>',
});
var component_3 = Vue.extend({
  template: '<ul><li>react</li> </ul>',
});

Vue.component('Saludo', {
  methods: {
    display(){
      console.log('display')
    }
  }
});
Vue.component('titulo', component_2);
Vue.component('frameworks', component_3);


/* eslint-disable no-new */
new Vue({
  el: '#app',

})
