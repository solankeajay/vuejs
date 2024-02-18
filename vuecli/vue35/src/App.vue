<template>
  <div>
    <!-- //keep form value -->
    <!-- <keep-alives>
      <component v-bind:is="components"></component>
    </keep-alives> -->
    
    <component v-bind:is="components"></component>

    <button v-on:click="components = 'student'"> Student component</button>
    <button v-on:click="components = 'Employee'"> Employee component</button>
    <!-- <student></student>
    <Employee></Employee> -->
  </div>
</template>

<script>

import Student from './components/students.vue'
import Employee from './components/Employee.vue'

export default {
  components: {
    "student": Student,
    "Employee": Employee,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      components: 'student'
    }
  }
}
</script>

