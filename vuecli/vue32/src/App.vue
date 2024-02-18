<template>
  <div>
    <student></student>
    <Employee></Employee>
  </div>
</template>

<script>

import Student from './components/students.vue'
import Employee from './components/Employee.vue'

export default {
  components:{
    "student" : Student,
    "Employee" : Employee,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

