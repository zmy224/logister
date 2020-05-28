<template>
<div id="budget">

      <el-tabs type="border-card"  v-model="activeName" @tab-click="handleClick">
        <el-tab-pane   label="集团预算" name="first">
     <!-- 头部搜索框 -->
       
         集团预算
          <el-form :inline="true"  class="demo-form-inline">
            <el-form-item label="所属省域">
                <el-input v-model="jProvince" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                     <!-- <el-button type="success">导入</el-button> -->
                     <!-- 导入 -->
<!-- accept为默认打开的可上传的文件格式 -->
                     <el-upload
                        class="upload-demo"
                        action=""
                        :on-change="handleChange"
                        :on-exceed="handleExceed"
                        :on-remove="handleRemove"
                        :file-list="fileListUpload"
                        :limit="limitUpload"
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                        :auto-upload="false">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只 能 上 传 xlsx / xls 文 件</div>
                    </el-upload>


                    <el-button type="info">删除</el-button>
            </el-form-item>
             
          </el-form>                  
            

    <!-- 表格部分 -->
          <div class='config'>

          </div>
          <el-table
                    :data="jtableData"
                    border
                    style="width: 100%">
                     <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    prop="id"
                    label="id"
                    width="180">
                    </el-table-column>
                       <el-table-column
                    prop="No"
                    label="序号"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="provinceName"
                    label="省区名称姓名"
                    width="180">
                    </el-table-column>
                </el-table>
<!-- 分页 -->
                <el-pagination
                v-if="jtableData.length"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pagination.currentPage"
                    :page-sizes="pagination.pageSizes"
                    :page-size="pagination.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="jtableData.length">
                    </el-pagination>

    
            </el-tab-pane>  

        </el-tabs>  
</div>
</template>

<script>
export default {
    data(){
        return {
            // 限制只能上传1个文件
            limitUpload:1,
         //   所属省域
           fileTemp:null,
            jProvince:'',
            activeName:'first',

            jtableData:[],
             pagination:{
              pageSize:10,
              pageSizes:[10,20,30,40],
              currentPage:1

            }

     
        }
    },
      created(){

        },
        mounted(){
         this.jtableData=this.createdjtableData(5);
        },
    methods:{

        createdjtableData(total){
            const arr=[];
            for(let i=0;i<total;i++){
                const temp={
                    id:parseInt(Math.random()*1000000),
                    No:i+1,
                    provinceName:'wwwwi'+i
                }
                arr.push(temp)
            }
            return arr
        },
        onSubmit(){},
       
        handleClick(tab, event) {
        console.log(tab, event);
      },
      handleChange(file, fileList){
    this.fileTemp = file.raw
    },

handleRemove(file,fileList){
    this.fileTemp = null
},
handleRemove(){}
        
    }
}
</script>


<style lang="less" >
 #budget{
    .el-table{
        margin-top:15px;
    }
 }
</style>

