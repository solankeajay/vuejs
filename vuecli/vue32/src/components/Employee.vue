<template>
    <div>
        {{ msg }}
    </div>
</template>

<script>

import { EventBus } from "../main"

export default {
    data() {
        return {
            msg: "Hello Employee"
        }
    },
    methods: {

    },
    mounted(){
        EventBus.$on("eventBusData", data=>{
            this.msg = data
        })
    }
}
</script>
