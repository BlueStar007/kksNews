<template>
  <div class="container">
        <Carousel/>
        <Select/>
        <List/>
        <Footer/>

  </div>
</template>

<script>
import Carousel from './Carousel'
import Select from './Select'
import Footer from './Footer'
import List from './List'
export default {
    components: {
        Carousel,
        Select,
        Footer,
        List,
    }
}
</script>

<style scoped>

</style>