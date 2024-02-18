import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'


//routers in vue
Vue.use(VueRouter)


const router = new VueRouter({

  routes: Routes,
  mode: 'history', //remove # from url

});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
