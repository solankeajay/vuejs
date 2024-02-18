<template>
  <div>
    <student></student>
    <employee></employee>
  </div>
</template>

<script>

import Employee from './Emplyee.vue'

export default {
  components:{
    "employee": Employee
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
