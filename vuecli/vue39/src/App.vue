<template>
  <div>
      <form name="blog_form" method="post">
              <input type="text" v-model="blog.title" placeholder="Title"> <br /><br />
              <input type="text" placeholder="Body" v-model="blog.body">

              <button v-on:click.prevent="postBlog">Submit</button>
          </form>

          <br><br>

          <div>
              <h3>Form Preview</h3>

              <p> Name: {{ blog.title }}</p>
              <p> Name: {{ blog.body }}</p>
          </div>


          <showblog></showblog>



  </div>
</template>

<script>
import ShowBlog from './components/ShowBlog.vue'

export default {
  components:{
    'showblog': ShowBlog
  },

  data () {
    return {
      blog: {
        title: "",
        body: "",
        user:""
      },
    }
  },
  methods:{
    postBlog: function(){
      this.$http.post("https://jsonplaceholder.typicode.com/posts",{
        title: this.blog.title,
        body: this.blog.body,
        userId: this.blog.user
      }).then(function(data){
        console.log(data);
      })
    }
  }
}
</script>

