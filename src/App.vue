<template>
  <div id="app">
      <top/>
      <!-- <Carousel/>
      <Select/> -->
      <router-view/>
  </div>
</template>

<script>
import Top from './components/Top.vue'
import {GetChannel,GetNews} from './server/main'
import { mapState } from 'vuex'
// import Carousel from './components/Carousel'
// import Select from './components/Select'
// import Body from './components/Body'
export default {
  name: 'app',
  components: {
    Top,
    // Carousel,
    // Select,
    // Body,
  },
  data(){
      return {
          newsList: null,
      }
  },
  computed: {
    ...mapState(['Channelist']),
  },  
  async mounted(){
    let res= await  GetChannel()
    this.$store.commit('setChannelist',res.data.showapi_res_body.channelList);
    this.getNews(this.Channelist[1].channelId,'1');
    let user=localStorage.getItem('user')
    if(user!=undefined){
        this.$store.commit('setUser',user)
    }
  },
  methods: {
      async getNews(id,num){
          this.$store.commit('setShow',true)
          await GetNews(id,num).then(res=>{
                this.newsList=res.data.showapi_res_body.pagebean;
                this.$store.commit('setNewList',this.newsList)
                this.$store.commit('setShow',false)
          })
          
      },

  }
 
}
</script>

<style scoped>
#app {
    width: 1200px;
    margin: 0 auto;
}
</style>
