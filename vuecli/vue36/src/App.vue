<template>
  <div>
    <!-- <employee></employee> -->

    <form>
              <input type="text" v-model.lazy="employee.name" placeholder="Name"> <br /><br />
              <input type="text" placeholder="Email" v-model.lazy="employee.email"> 

              <input type="checkbox" v-model="employee.posts" value="Employee 1"> Employee 1
              <input type="checkbox" v-model="employee.posts" value="Employee 2"> Employee 2
              <input type="checkbox" v-model="employee.posts" value="Employee 3"> Employee 3
              <input type="checkbox" v-model="employee.posts" value="Employee 4"> Employee 4


              <p>
                <label> Select Gender</label>
                <input type="radio" value="Male" v-model="employee.gender"> Male
                <input type="radio" value="Female" v-model="employee.gender"> Female
               </p>
               <p>
                <select v-model="employee.level" >
                  <!-- <option value="employee 1">employee 1</option>
                  <option value="employee 2">employee 2</option>
                  <option value="employee 3">employee 3</option> -->

                  <option v-for="l in levels">{{ l }}</option>
                </select>
               </p>
          </form>

          <br><br>

          <div>
              <h3>Form Preview</h3>

              <p> Name: {{ employee.name }}</p>
              <p> Email: {{ employee.email }}</p>

              <p> Post:
                <ul>
                  <li v-for="p in employee.posts">{{ p }}</li>
                </ul>  
              </p>

              <p> Gender: {{ employee.gender }}</p>
              <p> Levels: {{ employee.level }}</p>
          </div>
  </div>
</template>

<script>

// import Employee from "./components/Employee.vue";

export default {
  // components:{
  //   "employee": Employee
  // },
  data () {
    return {
      employee: {
        name: "",
        email: "",
        posts: [],
        gender: "",
        level:""
      },
      levels: ['employee 1','employee 2','employee 3']
    }
  }
}
</script>

