<template>
  <div>
    <student>

      {{ msg }}

      <div slot="form-header">
        <h3> Student Form</h3>
      </div>
      <div slot="form-elements">
        <h3> Student elements</h3>
      </div>
      <div slot="form-button">
        <h3> Student button</h3>
      </div>
      <div slot="form-footer">
        <h3> Student footer</h3>
      </div>
    </student>
  </div>
</template>

<script>

import Student from './components/students.vue'

export default {
  components:{
    'student': Student
  },
  data () {
    return {
      msg: "helllo from app vue"
    }
  }
}
</script>

