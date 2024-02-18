<template>
    <div>
        <h3>{{ msg }}</h3>
        <ul>
            <li v-for="st in students"> {{ st }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Custom Compnent defin globaly',
            students:["student1","student2","student3"]
        }
    }
}
</script>

<style scoped>
h3{
    color: blue;
}
</style>
