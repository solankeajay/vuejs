<template>
    <div>
        <header>
            <h2>{{ title }}</h2>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "This was header part"
        }
    }
}
</script>

<style scoped>
h2 {
    color: #000000;
    font: 20px;
}
</style>
