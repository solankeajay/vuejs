<template>
    <div>
        {{ title }}
        {{ name }}
        <ul>
            <li v-for="c_array in c_a">{{ c_a }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    //withut validation
    // props:["name","c_array"],

    //with validation
    props:{
        name:{
            type: String,
            default: "Ajay S"
        }
    },
    data() {
        return {
            title: "This was Body Content part"
        }
    }
}
</script>

<style scoped>
h2 {
    color: #4c08ab;
    font: 20px;
}
</style>
