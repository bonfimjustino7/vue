import Vue from 'vue'
import App from './App.vue'
import Contadores from './components/Contadores.vue'

Vue.config.productionTip = false

Vue.component('app-contadores', Contadores) // importando de forma global o componente Contadores

new Vue({
  render: h => h(App),
}).$mount('#app')
