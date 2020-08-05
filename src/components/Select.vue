<template>
  <div class="container">
      <!-- <h1>这是选择标签页</h1> -->
      <el-button class="btn" @click="getList(item.channelId,'1')" v-for="item in Channelist.slice(0,showNum)" :key="item.channelId">{{item.name}}</el-button>
        <el-button @click="showNum===9?showNum=Channelist.length-1:showNum=9">{{showNum===9?'展开':'关闭'}}</el-button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {GetNews} from '../server/main'
export default {
    computed: {
        ...mapState(['Channelist','id'])
    },
    data(){
        return{
            showNum: 9
        }       
    },
    methods: {
        async getList(id,num){
                let res=await GetNews(id,num);
                this.$store.commit('setNewList',res.data.showapi_res_body.pagebean)
                this.$store.commit('setId',id)
        }
    }
}
</script>

<style scoped>
    .btn{
        margin: 5px 8px;
    }
    .container{
        padding-top: 5px;
    }
</style>