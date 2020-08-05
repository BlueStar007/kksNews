<template>
  <div class="container">
          <el-carousel trigger="click">
                <el-carousel-item v-for="item in imgList" :key="item">
                       <a :href="item"> <img :src="item" alt=""></a>
                </el-carousel-item>
          </el-carousel>
  </div>

</template>

<script>
export default {
        data(){
            return {
                 imgList: [
                    'http://www-file.huawei.com/-/media/corp2020/home/banner/1/sustainability-cn2.jpg',
                    'http://www-file.huawei.com/-/media/corp2020/home/banner/1/hwcloud-discount.jpg',
                    'http://www-file.huawei.com/-/media/corp2020/home/banner/1/vmall_sv_pc.png'
                 ],
            }
        }
}
</script>

<style scoped>

</style>