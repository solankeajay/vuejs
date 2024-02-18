<template>
    <div>
        <h3>{{ msg }}</h3>
        <ul>
            <li v-for="em in employee"> {{ em }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Custom Compnent defin localy',
            employee: ["employee1", "employee2", "employee3"]
        }
    }
}
</script>

<style></style>
