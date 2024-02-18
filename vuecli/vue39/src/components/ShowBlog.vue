<template>
    <div v-list:cyan="'wide'">

        <h3>Blog List</h3>
        <p v-for="b in blog">
            <span>{{ b.id }}</span> 
            <span>{{ b.userId }}</span> 
            <span v-format>{{ b.title | makeUpper }}</span> 
            <span>{{ b.body | contentSnippert }}</span> 
        </p>
    </div>
</template>

<script>

import mixinsFilter from '../mixins/filters'

export default {
    mixins:[
        mixinsFilter
    ],
    data() {
        return {
            blog:[]
        }
    },
    methods:{

    },
    created(){
        this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function (data) {
            this.blog = data.body.slice(0, 5)
        })
    },
    //localy defined
    // filters: {
    //     makeUpper: function(value){
    //         return value.toUpperCase();
    //     },
    //     contentSnippert: function(value){
    //         return value.slice(0,70)+"..."
    //     }
    // }
}
</script>
