<template>
<div id= 'user'>
    <el-tabs type="border-card">
        <el-tab-pane>
               <span slot="label"><i class="el-icon-date"></i> 用户管理</span>
             
                        <!-- 头部搜索框 -->
               <el-card >
                 <el-form :inline="true"  class="demo-form-inline">
                    <el-form-item label="姓名/工号">
                        <el-input v-model="userNo" placeholder="请输入"></el-input>
                    </el-form-item>
 
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                    </el-form>
                                    
               </el-card>
    <!-- 表格部分 -->
                            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop="id"
                    label="id"
                    width="180">
                    </el-table-column>
                       <el-table-column
                    prop="userID"
                    label="工号"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                    </el-table-column>
                    
                       <el-table-column
                    prop="part"
                    label="部门"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="sex"
                    label="性别">
                    </el-table-column>
                    <el-table-column
                    prop="email"
                    label="邮箱">
                    </el-table-column>
                </el-table>
<!-- 分页 -->
                <el-pagination
                v-if="tableData.length"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pagination.currentPage"
                    :page-sizes="pagination.pageSizes"
                    :page-size="pagination.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="tableData.length">
                    </el-pagination>

    
        </el-tab-pane>   
        </el-tabs>  
</div>
</template>


<script>
import userData  from './user-data.ts'
export default {
    data(){
        return {
            userNo:'',
            //  表格数据
            tableData: [],
            // 分页对象
            pagination:{
              pageSize:10,
              pageSizes:[10,20,30,40],
              currentPage:1

            }

        }
    },
  methods: {
    //   查询事件
      onSubmit(){

      },
      handleSizeChange(val){
          this.pagination.pageSize=val;
          console.log(`每页${val}条`);

      },
      handleCurrentChange(val){
      this.pagination.currentPage=val;
        console.log(`当前页: ${val}`);
      }

  },
  mounted(){
    console.log(userData)
    this.tableData=userData.createTableData(100);
    console.log(this.tableData.length)
  }


}
</script>

<style lang='less'>
#user {

    .el-pagination{
        margin:15px 0px;
    }
    .el-table{
        margin-top:15px;
    }
}

</style>
