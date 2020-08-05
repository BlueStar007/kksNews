<template>
  <div class="container">
      <!-- <h1>这是选择标签页</h1> -->
      <el-button class="btn" v-for="item in Channelist.slice(0,showNum)" :key="item.channelId">{{item.name}}</el-button>
        <el-button @click="showNum===9?showNum=Channelist.length-1:showNum=9">{{showNum===9?'展开':'关闭'}}</el-button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['Channelist'])
    },
    data(){
        return{
            showNum: 9
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