<template>
    <div id='login'>

<el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
 
    <el-form-item >
    <div class="title">系统登录</div>
  </el-form-item>
  <el-form-item label="账号" prop="userName">
    <el-input  prefix-icon="el-icon-user-solid" v-model="ruleForm.userName" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" prefix-icon="el-icon-goods"  show-password   v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
import store from '../store/index';
import Cookie from 'js-cookie'
export default {
    data(){
        return {
            ruleForm:{
                userName:'admin',
                password:'admin'
            },

             rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
           password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ]
             
        }
    }
},
created(){
    // 防止刷新页面数据丢失 初始化时判断存储中是否有数据有就重新赋值
  if(Cookie.get('userIntroduceCookie')){
      this.$store.commit('setToken',Cookie.get('userIntroduceCookie'));
  }

},

methods:{

 setCookie(token){
  Cookie.set('userIntroduceCookie',token);
},
 removeCookie(){
 Cookie.remove('userIntroduceCookie');
},
 getCookie(){
  return Cookie.get('userIntroduceCookie');
},
login(ruleForm){
       this.axios.get('/login',{params:ruleForm}).then((res)=>{
         console.log(res);
         if(res.status===200){
             const token = res.data.token;
             console.log(token,'token');
             // 存入store中
             // 将token值拿到后存入cookie中
              this.setCookie('userIntroduceCookie',token);
              this.$store.commit('setToken',token);
              this.$message({
              message:res.data.message,
              type: 'success'
        });
    //登录成功后跳转页面welcom并且去获取用户角色  头像等信息
           this.$router.push({path:'/welcome'});
         }else {
                  this.$message({
              message:error,
              type: 'warning'
        });
          this.removeCookie('userIntroduceCookie');
          this.$store.commit('setToken','');
         }
       }).catch((error)=>{
           this.$message({
              message:error,
              type: 'warning'
        });
          this.removeCookie('userIntroduceCookie');
          this.$store.commit('setToken',token);
       })
    },

    submitForm(){
           this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
           this.login(this.ruleForm);
        
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
           })
    },
    resetForm(){

    },

}
}
</script>
<style lang="less">

#login{
    width:100%;
    height:100%;
    background-color: #2D3A4B;
    border: 1px solid #fff;
   
    .el-form {
        width:30%;
        height:30%;
        margin: 0 auto!important;
       padding-top:100px;
        .title{
        text-align: center;
       padding:15px;
       color:#fff;
       font-size:25px;
       font-weight: 700;
    }
        .el-form-item__content{
           .el-button--primary{
               width:100%;
           }
        }
    }
}
</style>

