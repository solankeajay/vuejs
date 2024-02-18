<template>
  <div>
    <new-header></new-header>
    <new-content name="ajay" v-bind:c_array="c_n"></new-content>
    <new-footer></new-footer>
  </div>
</template>

<script>

import Header from './components/header.vue'
import Content from './components/content.vue'
import Footer from './components/footer.vue'

export default {
  components: {
    "new-header": Header,
    "new-content": Content,
    "new-footer": Footer,
  },
  data () {
    return {
      "c_n": ["abc", "abcd"]
    }
  }
}
</script>

<style>

</style>
