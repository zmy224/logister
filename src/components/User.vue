<template>
    <div id="roles">
     
     <el-form ref="form"  :rules="rules" :model='formRole'  label-width="80px">
        <el-form-item>
     <div>
        <el-tag closable > 用户管理</el-tag>
     </div>
  </el-form-item>
  <el-form-item label="角色名称" required>
    <el-input v-model="formRole.name"></el-input>
  </el-form-item>
  <el-form-item label="所属部门"  required>
    <el-select v-model="formRole.part" placeholder="请选择所属部门" >
      <el-option v-for="item in formRoleOptions.part"  :key='item' :label="item" :value="item" ></el-option>   
    </el-select>
  </el-form-item>
  <el-form-item label="备注">
     <el-input v-model="formRole.note"></el-input>
  </el-form-item>
  <el-form-item label="人员列表">
    <el-select v-model="formRole.userList" placeholder="请选择人员">
      <el-option  v-for="item in formRoleOptions.userList"  :key='item.code'  :label="item.name" :value="item.code"></el-option>   
    </el-select>
  </el-form-item>
    <el-form-item label="用户头像">
      <!-- //显示用户所选到的图片，即预览 -->
        <img src="" id="portrait" /> 
      <input type="file" id="file" accept="image/*"  multiple="multiple" onchange='changeAvator'/><br />
      <input type="hidden" value="" id="baseImg" /> 
       <!-- //保存转成abse64的图片 -->
        <!-- //上传按钮 -->
       <button class="submitImg mui-btn-blue" type="button">上传</button> 
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">确定</el-button>
    <el-button type="warning" @click="preBack">返回</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
             rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          
          ],
           part: [
            { required: true, message: '请输入密码', trigger: 'blur' },
         
          ]
             
        }
          ,
            formRole:{
                name:'',
               
                note:'',
                part:'',
                userList:''
            },
            formRoleOptions:{
               part:[],
               userList:[]
            }
        }
    },
    mounted(){
      //  查询所有角色
      this.userList(),
      this.searchAllPartment()
      //  查询所有部门
      //  查询所有人员
    },
    methods: {
      preBack(){
        //返回
        this.$router.go(-1);
      },
       searchAllPartment(){
        this.axios.get('/searchAllPartment').then(res=>{
          if(res.status==200){
          this.formRoleOptions.part=res.data.data;
          console.log( this.formRoleOptions.part,'this.formRoleOptions.part')
          }else {
            this.$message.error('部门信息获取失败');
          }
        }).catch(err=>{
            this.$message.error('部门信息获取失败');
        })
      },

      userList(){
         this.axios.get('/userList').then(res=>{
          if(res.status==200){
          this.formRoleOptions.userList=res.data.data
          console.log(this.formRoleOptions.userList,'this.formRoleOptions.userList');
          }else {
            this.$message.error('人员列表获取失败');
          }
        }).catch(err=>{
            this.$message.error('人员列表获取失败');
        })
      },
      onSubmit(){
      this.$refs['form'].validate(valid=>{
        if(valid){
          //  提交数据发送请求
        }else{
          return ;
        }
      })

      },
    
    },
    changeAvator(){
      
    }
}
</script>


<style lang='less'>
#roles{
 .el-form {
     padding:30px 100px;
     width:500px;
     .el-form-item{
         position: relative;
         width:100%;
         .el-cascader,.el-select{
              width:100%;
         }
         .el-cascader{
             height:100px;
         }
         .el-icon-circle-plus-outline{
             display: inline-block;
             width:10px;
             height:10px;
             position: absolute;
             right:-50px;
             top:8px;
              
             &::before{
            display: inline-block;
             font-size:30px;
             color:rgb(36, 34, 34);
              width:10px;
             height:10px;
            
             }
         }
     }

 }
}
#portrait {
        width: 79px;  //限制所选图片的大小 以防图片过大手机显示不下
        height: auto;
       
         
        
}
.submitImg {
        margin: 50px auto;
        display: block;
}
            
.child {
        position: relative;
        display: inline-block;
}
            
#file {
        position: absolute;
        left: 0px;
        top: 0px;
        opacity: 0;
        height: 100%;
        width: 100%;
         border:1px solid #aaa;
}


</style>
