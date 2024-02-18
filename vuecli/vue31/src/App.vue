<template>
  <div>
    <student v-bind:msg="msg" v-on:updateParentVariable="updateValueFn($event)"></student>

  </div>
</template>

<script>

import Student from './components/students.vue'

export default {
  components:{
    "student": Student
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App from perent'
    }
  },
  methods:{
    updateValueFn: function(updatedValue){
      this.msg = updatedValue
    }
  }
}
</script>
