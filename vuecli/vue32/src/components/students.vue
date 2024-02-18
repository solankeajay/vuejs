<template>
    <div>
        <button v-on:click="passData()">Click Here .</button>
    </div>
</template>

<script>

    import {EventBus} from "../main"

export default {
    data() {
        return {
            
        }
    },
    methods: {
        passData: function() {
            // console.log("hello");

            EventBus.$emit("eventBusData","hello from student event bus")
        }
    }
}
</script>
