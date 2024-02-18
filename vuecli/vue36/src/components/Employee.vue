<template>
    <div>
        <form class="">
            <input type="text" v-model="employee.name" placeholder="Name"> <br /><br />
            <input type="text" placeholder="Email" v-model="employee.email">
        </form>

        <br><br>

        <div>
            <h3>Form Preview</h3>

            <p> Name: {{ employee.name }}</p>
            <p> Name: {{ employee.email }}</p>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            employee:{
                name:"",
                email:""
            }
        }
    },
}
</script>
