<template>
    <div>
        <footer>
            <h2>{{ title }}</h2>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "This was Footer part"
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
