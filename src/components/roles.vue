<template>
    <div id='role'>
    角色管理
     <!-- <el-card class="box-card"> -->
     <div class="header">
          <el-input v-model="roleName" placeholder="请输入"></el-input>
          <el-button type="primary" icon="el-icon-search" >查询</el-button>
          <el-button type="success" >新增</el-button>
          <el-button type="success" icon="el-icon-edit" >修改</el-button>
          <el-button type="success"  icon="el-icon-delete" >删除</el-button>
     </div>
    <!-- </el-card> -->

    <div class="table"  v-customLoading="loading"
     >

        <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="序号"
       prop="id"
      width="120">
    </el-table-column>
    <el-table-column
      prop="roleName"
      label="角色名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="department"
      label="所属部门"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="note"
      label="备注"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建日期"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
    </div>

<!-- 我的日历 -->
<myCalendar></myCalendar>
<!-- 日历 -->

<!-- <datePicker 
    :options="calendarArr" 
    class="calendar" 
    @handleClickDay="handleClickDay" 
    @handlePrevMonth="handlePrevMonth"
    @handleNextMonth="handleNextMonth"
  /> -->
    </div>
</template>


<script>
import datePicker from '../calder/calder-main';
import myCalendar from '../calder/myCalder'
export default {
  name: 'date-picker',
  components:{
    datePicker,
    myCalendar
  },
  
    data(){
        return{
            loading:false,
            roleName:'',
            tableData:[],
              calendarArr: {
          type: 'combination',
          headStyle: {
            todayBtn: 'right',
            combination: 'center',
            checkBtn: 'right',
          },
          viewStyle: {
            day: 'right'
          },
          calendarData: []
        },
        }
    },
    mounted(){


        this.initTableData();
    },
    methods:{
       handleClickDay () {

    },
    handlePrevMonth () {

    },
    handleNextMonth () {
      
    },
        initTableData(){
            this.loading=true;
            this.axios.get('/roles/tableData',{params:this.roleName}).then(res=>{
                if(res.status==200){
                this.tableData=res.data.data;
                console.log(this.tableData,'this.tableData');
                 this.loading=false;
                }else {
                     this.loading=false;
                       this.$message({
              message:'请求表格数据失败',
              type: 'warning'
        });
                }
            }).catch(err=>{
             this.$message({
              message:'请求表格数据失败',
              type: 'warning'
            })
             this.loading=false;
             this.tableData=[];
            })
            
    }


   }
}
</script>

<style lang="less">
#role{
//   .el-card{
    .header{
        width: 80%;
        display:flex;
        .el-input{
            margin-right:15px;
            flex:8;
        }
        .el-button{
            flex:1
        }
    }
//   }
}
</style>

