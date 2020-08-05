<template>
  <div class="hello">
       <!-- top页面 -->
    <el-row>
        <el-col :span="4">
            <div class="blue">
              Blue
              <span>Star</span>
            </div>
        </el-col>
           
        <el-col :span="17">
              <el-menu class="el-menu-demo" text-color="" mode="horizontal" default-active="5572a108b3cdc86cf39001cd">
                                <el-menu-item v-for="item in Channelist.slice(0,6)" :key="item.channelId" :index="item.channelId" >
                                  {{item.name}}
                                </el-menu-item>
                                
                 </el-menu>

        </el-col>
        <el-col :span="3">
          <div>
            登录|注册
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Top',
  props: {
    
  },
  data(){
    return {
     
    }
  },
  computed:{
      ...mapState(['Channelist']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blue{
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  line-height: 1.6rem;
  margin-top: 15px;
}
.blue span{
  letter-spacing: 0.5rem;
  font-size: 1.2rem;
}

</style>
