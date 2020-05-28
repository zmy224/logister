<template>
<div id= 'welcome'>
     <el-tabs type="border-card">
        <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 我的首页</span>
            <span>利润分析</span>
            <el-divider></el-divider>

            <!-- 头部 -->
            <div class="summary">
              <div class="avager">
                  <span>平均利润</span>
                  <span>500000元</span>
              </div>
              <div class="search">
                 <el-tag :type="success" @click='currentMonth'> 本月</el-tag>
                 <el-tag :type="success"  @click='currentYear'> 全年</el-tag>
                <!-- 日期选择器 -->
                <el-date-picker
                v-model="startToEndTime"
                type="daterange"
                range-separator="~"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
               <el-button type="primary"  class='dosearch' @click="doSearch">搜索</el-button>
              </div>
            </div>
            <!-- middle部分echarts图标 -->
            <div class="mymiddlechart"  >
               <div class="mymiddlecharts"  >

               </div>
            </div>
            <!-- 圆环部分 -->
            <div class="circle">
                  <el-carousel :interval="10000" type="card" 

height="200px">
                        <el-carousel-item v-for="item in 7" 

:key="item">
                               
                        <div class="percircle">
                            <div class='top'></div>
                            <div class="left">
                                <span class="title">国药控股德

州</span>
                                <span class="profit">税前利润率

</span>
                                <span class='profitnumber'>利润

率50%</span>
                            </div>
                            <div class="right">
                                <el-progress type="circle" 

:percentage="25"></el-progress>
                            </div>
                        </div>
                                <!-- </h3> -->
                     
                        </el-carousel-item>
                 </el-carousel>
            </div>

              <el-divider class="divider"></el-divider>

              <div class="bottomechart">
                  bottomechart
              </div>
        </el-tab-pane>
     </el-tabs>


</div>
</template>

    <script>
    import homedata from './home-data.ts'
    import  commonUtils from  '../common/commonUtils.ts'
    export default {
    data(){
        return{
            // 时间选择器
            startToEndTime:'',
            //  echarts 原始数据
            echartsData:[],
          

        }
    },
    
    methods:{

//  搜索事件
      doSearch(){
         console.log(this.startToEndTime,'startToEndTime');
         console.log(commonUtils.formatDate(this.startToEndTime[0]))

      },
      // 本月
      currentMonth(){
      //  调接口拿到本月的数据
    //   this.axios.get()

      },
      currentYear(){},

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
    

    <style lang="less">
    
    #welcome{
    .summary{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        div{
            flex:1
        }
        .search {
             display: flex;
             flex: 1;
             justify-content: flex-end;
             .el-tag{
                 margin-right: 10px;
                 height:40px;
                 width:60px;
                 text-align: center;
                 font-size:14px;
                 line-height: 40px;
             }
             .dosearch{
                     height: 88%;
                     margin-left: 10px;
             }
        }
    }
    .avager{
        :nth-child(1){
            display:block;
            font-size:14px;
            margin-bottom:5px;
            color: #aaa;
        }
    }
    .mymiddlechart{display:flex;
    align-items:center;}
    .mymiddlecharts{
        flex: 1;
        width:1000px;
        height:600px;
        canvas{
        
           width:100%!important;
        }
        // background-color: aquamarine;
    }
    .circle{
        width:100%;
        margin: 60px auto;
        height:200px;       
        .el-carousel{
           
        .percircle{  
            margin:0;
            width:60%;
            border-top:1.5px solid lightseagreen;
            padding: 15px;
            display:flex;  
            align-items: center;
            .left{
                 flex:1;
                 span{
                     display:block;
                 }
                 .title{
                     font-size:14px;
                      color:#434646;
                 }
                 .profit{
                       font-size:12px;
                       color:#aaa;
                       padding:20px 0px;
                 }
                 .profitnumber{
                     font-size:16px;
                      color:#434646;
                      font-weight: 700;
                 }

            }
            .right{
                flex:1;
            }
            .top{
                flex:1;
            }

        }
        }
    }
    .divider{
        // color: #000;
        background-color: rgb(10, 10, 10);
        border:0.1px solid rgb(10, 10, 10);
    }
    .bottomechart{
        height:500px;
        width:100%;
        background-color: aqua;
    }
}
    </style>
    