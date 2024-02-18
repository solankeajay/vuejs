<template>
  <div>
    {{ msg }}
    <ul>
      <li v-for="student in students"> {{ student }}</li>
    </ul>

    {{ sayHello("morning") }}
    <br><br>
    {{ owtHello }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      students: ["ab","abc","abcd"],
      msg: 'Welcome to Your Vue.js App',
      name:"Ajay"
    }
  },
  methods:{
    sayHello: function(dayTime){
      return dayTime;
    }
  },
  computed: {
    owtHello: function(){
      return this.name;
    }
  }
}
</script>

<style>

</style>
