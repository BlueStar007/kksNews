<template>
  <div class="container">
        <Carousel/>
        <Select/>
        <Loading v-if="show"/>
        <List v-if="!show"/>
        <!-- <Footer/> -->

  </div>
</template>

<script>
import Carousel from './Carousel'
import Select from './Select'
// import Footer from './Footer'
import Loading from './Loading'
import List from './List'
import {mapState} from 'vuex'
export default {
    components: {
        Carousel,
        Loading,
        Select,
        // Footer,
        List,
    },
    computed:{
        ...mapState(['show'])
    }
}
</script>

<style scoped>

</style>