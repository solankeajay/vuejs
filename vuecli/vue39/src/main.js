import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

//mixins defined globley
// Vue.mixin({
//   filters: {
//         makeUpper: function(value){
//             return value.toUpperCase();
//         },
//         contentSnippert: function(value){
//             return value.slice(0,70)+"..."
//         }
//     }
// });

// custom directive
Vue.directive("list",{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    }
    if(binding.value == 'narrow'){
      el.style.maxWidth = "600px";
    }
    // if(binding.arg == 'cyan'){
    //   el.style.maxWidth = "100px";
    // }
  }
});

Vue.directive("format",{
  bind(el,binding,vnode){
    el.style.color = "blue";
    el.style.fontSize = "20px";
  }
});

// defined filters globaly
// Vue.filter("makeUpper",function(value){
//   return value.toUpperCase();
// });
// Vue.filter("contentSnippert",function(value){
//   return value.slice(0,70)+"...";
// });

new Vue({
  el: '#app',
  render: h => h(App),
})
