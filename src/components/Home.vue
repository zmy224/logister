
<template>
   <div id='home'> 
<el-container>
  <el-header>
    <img src='../assets/logo1.png'>
  </el-header>
  <el-container>
    <!-- 侧边栏菜单 -->
  <el-aside width="200px">
   <el-row class="tac">
     <el-col >
     <h5 class='topicon'>
      <i class="el-icon-s-unfold"></i>
     </h5>
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-submenu index="1-4" >
          <template slot="title" >
           <i class="el-icon-menu"></i>
           <span>系统管理</span>
          </template>
          <el-menu-item ><router-link to="/user">用户管理</router-link></el-menu-item>
          <el-menu-item ><router-link to="/roles">角色管理</router-link></el-menu-item>
          <el-menu-item ><router-link to="/budget">预算管理</router-link></el-menu-item>
          <el-menu-item >支付方式维护</el-menu-item>
          <el-menu-item >参数管理</el-menu-item>
          
        </el-submenu> 
    </el-menu>
    </el-col>
   </el-row>
    </el-aside>

   <el-main>
    <router-view></router-view>
   </el-main>
   </el-container>
</el-container>

   </div>
</template>

<script>
import homedata from './home-data.ts'
export default {
    data(){
        return{
            //  echarts 原始数据
            echartsData:[],
          

        }
    },
    methods:{
        handleClose(){},
        handleOpen(){},
     renderEcharts(){

      //  转化数据格式
        const options= this.convenceEchartsData(this.echartsData);

          // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.querySelector('.mymiddlecharts'))
        // 绘制图表
        myChart.setOption(options);
        
    },
    //  拿到数据后转化成echarts所需要的格式的数据
    convenceEchartsData(arr){
        // x轴
        const option= {
            title: { text: '收益一览图' },
            // tooltip配置项
             tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            xAxis:{
                
                show: true ,
                // name:'xz',
                boundaryGap: ['20%', '20%'],
                data:arr.map(item=> item.name),
                type:'category',
                axisTick: {show: false},
                // x轴文字太多 显示不全
                axisLabel:{  
                    interval:0,//横轴信息全部显示  
                    rotate:45,//-15度角倾斜显示  
                 },
            },
             legend:{
                 data:['income','outcome','profit'],
                
                right:0
             } ,
             series:[],
             yAxis: {
             type: 'value',
             name:'收入',
             // 将y轴分成6等分，根据数据大小自动配置 不需要设置interval  min  max 等
             splitNumber :6,
             axisLabel: {
                formatter: '{value} 元'
            }
        },
        }
      option.legend.data.forEach(element=>{
          const tempobj={
               data:[],
               type:'bar',
               name:element,
  
           }
           arr.forEach(obj=>{
              const temp= obj[element];
              tempobj.data.push(temp)
           })
         option.series.push(tempobj);
       })
       console.log(option,'option')
       return option
    },
    },
    created(){

    },
    mounted(){
      
        //  模仿接口数据
        this.echartsData = homedata();
        console.log(this.echartsData,'this.echartsData')
        //  渲染echarts
        this.renderEcharts();
           //下面看一下every()例子：
let aStudent=[
      {
           name:"keri",
           age:20
       },
       {
           name:"Join",
           age:25
       },
       {
           name:"Line",
           age:16
       },
        {
           name:"Line",
           age:15
       },
  ];
  //every()所有都满足才会返回true,否则返回false;
  let result=aStudent.every(function(item){
         return item.age>18;
  })

   
    console.log(result,'result')
    }
}
</script>

<style lang='less'>

#home,.el-container{

    height:100%;
.el-header{
    img{
        width:80px;
        height:100%;
    }
}
.el-aside{
    background-color: #001529;
    .el-row{
        width:100%;
        height:100%;

    }

}

}
</style>
