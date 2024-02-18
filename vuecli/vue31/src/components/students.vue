<template>
    <div>
        {{ msg }}

        
        <button v-on:click="updateMessage">Message update</button>
    </div>
</template>

<script>
export default {
    props:["msg"],
    data() {
        return {
            
        }
    },
    methods: {

        updateMessage: function () {

            // this.msg = "update Welcome to Your Vue.js App from perent"

            this.$emit("updateParentVariable","update Welcome to Your Vue.js App from perent");
        }

    }
}
</script>
