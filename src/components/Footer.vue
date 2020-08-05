<template>
  <div class="container">
       <el-pagination
            background
            layout="prev, pager, next"
            @current-change="chang"
            @prev-click="per"
            @next-click="next"
            :total="NewList.allPages">
        </el-pagination>
        
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {GetNews} from '../server/main'
export default {
computed: {
    ...mapState(['NewList','index','id'])
},
data(){
    return{
        
    }
},
methods: {
    chang(val){
        this.$store.commit('setIndex',val)
        this.getList(this.id,val)
    },
    pre(val){
        this.$store.commit('setIndex',val)
        this.getList(this.id,val)
    },
    next(val){
        this.$store.commit('setIndex',val)
        this.getList(this.id,val)
    },
    async getList(id,num){
        let res=await GetNews(id,num)
        this.$store.commit('setNewList',res.data.showapi_res_body.pagebean)
    }
}
}
</script>

<style scoped>
.container{
    text-align: center;
}

</style>