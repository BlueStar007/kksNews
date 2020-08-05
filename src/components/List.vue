<template>
  <div class="container">
      <!-- <h1>这是列表页</h1> -->
        <div class="item" v-for="item in  NewList.contentlist" :key="item.id">
                <div class="left"><a :href="item.link"><img :src="item.havePic?item.imageurls[0].url:'http://pic.5tu.cn/uploads/allimg/1409/201112377800.jpg'" alt=""></a></div>
                <div class="right">
                    <div class="tit">{{item.desc}}</div>
                    <div class="bom">{{item.source}}</div>
                </div>
        </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['NewList'])
    }
}
</script>

<style scoped>
.item{
    display: flex;
    justify-content: left;
    margin: 25px 0;
    border-bottom: 1px solid rgb(219, 215, 215);
    padding-bottom: 25px;
}
.left{
    height: 150px;
    width: 200px;
    overflow: hidden;
}
.left img{
    height: 150px;

}
.right{
    margin-left: 35px;
    
}
.tit{
    font-size: 25px;
    height: 80%;
    text-align: left;

}
.bom{
    height: 20%;
    display: flex;
    align-items: flex-end;
}
</style>