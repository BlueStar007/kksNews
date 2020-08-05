<template>
  <div class="container">
      <el-pagination
            background
            layout="prev, pager, next"
            :total="Newlist.allPages">
      </el-pagination>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
computed: {
    ...mapState(['Newlist'])
}
}
</script>

<style scoped>
.container{
    text-align: center;
}

</style>