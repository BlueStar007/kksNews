<template>
  <div class="container" v-if="User!=null">
      <!-- <h1>这是列表页</h1> -->
        <div class="item" v-for="item in  NewList.contentlist" :key="item.id">
                <div class="left"><a :href="item.link"><img :src="item.havePic?item.imageurls[0].url:daImg" alt=""></a></div>
                <a :href="item.link">
                <div class="right">
                    <div class="head">
                        <div class="headLeft">{{item.title}}</div>
                        <div class="headRight">{{item.pubDate}}</div>
                    </div>
                    <div class="body">{{item.content.slice(0,110).concat('......')}}</div>
                    <div class="bom">
                        <div class="headLeft">来源:{{item.source}}</div>
                        <div class="headRight">频道:{{item.channelName}}</div>
                    </div>
                </div>
                </a>
        </div>
        <Footer/>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import Footer from './Footer'
export default {
    components:{
        Footer
    },
    computed: {
        ...mapState(['NewList','User'])
    },
    data(){
        return {
            daImg: 'http://pic.5tu.cn/uploads/allimg/1409/201112377800.jpg'
        }
    }
}
</script>

<style scoped>
.item{
    display: flex;
    justify-content: left;
    margin: 25px 0;
    border-bottom: 1px solid rgb(219, 215, 215);
    padding-bottom: 15px;
}
.left{
    height: 150px;
    width: 200px;
    overflow: hidden;
    padding: 15px 0;
}
.left img{
    height: 150px;

}
.right{
    margin-left: 35px;
    width: 100%;
    height: 100%;
}
.head{
    margin: 10px 0;
   display: flex;
   justify-content: space-between;
    width: 100%;
    color: rgb(130, 130, 130);
    font-weight: 600;
}
.body{
    font-size: 24px;
    font-weight: 500;
    color: black;
}
.bom{
    margin: 10px 0;
  display: flex;
   justify-content: space-between;
    width: 100%;
    color: #8c929c ; 
}
a{
    color: none;
    text-decoration: none;

}
</style>