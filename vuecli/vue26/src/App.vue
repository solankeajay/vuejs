<template>
  <div>
    <new-header></new-header>
    <new-content></new-content>
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
      
    }
  }
}
</script>

<style>

</style>
