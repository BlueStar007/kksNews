<template>
  <div class="con">
      <div class="main">
          <el-form label-position="left" label-width="80px" :model="form">
                    <el-form-item label="账号">
                        <el-input v-model="form.loginId"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.loginPwd"></el-input>
                    </el-form-item>
                 
          </el-form>
          <el-button @click="login">登录</el-button>
      </div>

  </div>
</template>

<script>
import {Login} from '../server/main'
export default {
    data() {
        return {
            form: {
                loginId: '',
                loginPwd: ''
            }
        }
    },
    methods: {
        async login(){
            this.$store.commit('setUser','登陆中')
            //  this.$store.commit('setloginShow',true)
            if(this.form.loginId==''||this.form.loginPwd==''){
                     this.$notify({
                            title: '请完善信息',
                           
                    });
                    return 0
            }
           await Login(this.form).then(res=>{
               if(res.data.code==0){    
                    // this.$store.commit('setloginShow',false)
                    this.$notify({
                        title: '登陆成功',
                
                    });
                    this.$router.push('/home')
                    localStorage.setItem('user',res.data.data.nickname)
                    this.$store.commit('setUser',res.data.data.nickname)
               }else{
                    this.$notify({
                            title: '错误',
                            message: res.data.msg
                    });
               }
               console.log(res);
           })
        }
    },
}
</script>

<style scoped>
.main{
    width: 350px;
    text-align: center;
    margin: 20px auto;

}

</style>