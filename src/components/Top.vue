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
        <el-menu
          class="el-menu-demo"
          text-color
          mode="horizontal"
          default-active="home"
          active-text-color="#3A88FD"
        >
          <el-menu-item @click="home" index="home">首页</el-menu-item>
          <el-menu-item
            @click="chan(item.channelId)"
            v-for="item in Channelist.slice(0,6)"
            :key="item.channelId"
            :index="item.channelId"
          >{{item.name}}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="3">
        <div v-if="User!=null"><span style="color:teal">{{User}}</span>
          <el-button type="text" class="zv"  @click="out">注销</el-button>
        </div>

        <div v-if="User===null">
          <router-link :to="{name: 'login'}">登录</router-link>
          <!-- /////////element控件//////// -->
          <el-button type="text" class="zv"  @click="dialogFormVisible = true">注册</el-button>
            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
              <el-form :model="form">

                <el-form-item label="账号" >
                  <el-input v-model="form.loginId" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="密码" >
                  <el-input v-model="form.loginPwd" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="昵称">
                  <el-input v-model="form.nickname" autocomplete="off"></el-input>
                </el-form-item>
                
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="sub">确 定</el-button>
              </div>
            </el-dialog>
            <!-- /////////////////////////////// -->


          <span v-if="loginShow">登陆中....</span>
        </div>


      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { GetNews,reg } from "../server/main";
export default {
  name: "Top",
  props: {},
  data() {
    return {
      dialogFormVisible: false,
      form: {
        loginId: '',
        loginPwd: '',
        nickname: ''
      }
    };
  },
  computed: {
    ...mapState(["Channelist", "id", "index","loginShow","User"]),
  },
  methods: {
    async chan(id) {
      let res = await GetNews(id, this.index);
      this.$store.commit("setNewList", res.data.showapi_res_body.pagebean);
      this.$router.push("/list");
    },
    home() {
      this.$router.push("/");
    },
    out(){
        localStorage.removeItem('user');
        this.$store.commit('setUser',null)
    },
    async sub(){
      this.dialogFormVisible=false;

        await reg(this.form).then(res=>{
           ////登录后的事项
           if(res.data.code==0){
             
           this.$notify({
              title: '注册成功，即将跳转首页',
              
            });
            this.$router.push('./login') 
          }else{
            this.$notify({
              title: '错误',
              message: res.data.msg
            });

          }
           console.log(res);
        })
    }
    // Log() {
    //      this.$router.push("/login");
     
    // },
    

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blue {
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  line-height: 1.6rem;
  margin-top: 15px;
}
.zv{
  color: black;
  font-size: 16px;
  margin-left: 14px;
}
.blue span {
  letter-spacing: 0.5rem;
  font-size: 1.2rem;
}
a {
  text-decoration: none;
  color: black;
  margin-left: 15px;
}
a:hover {
  text-decoration: none;
  color: black;
}
</style>
