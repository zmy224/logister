// 创造echarts图表数据


interface echartsData{
    name:string,
    income:number,
    outcome:number,
    profit:number,
    // dateSet:Array<T>
}
function rnd(min:number, max:number){
    return min + Math.floor(Math.random() * (max - min + 1));
  }

function  createMiddleEchartsData():Array<echartsData>{
  let arr:Array<string> =['江西物流','大明速运','李子柒物流','大达物流','德邦物流','康贝蒂链团队','新华运输']
 const echartsDataArr:Array<echartsData>=[];
  for(let i:number=0;i<arr.length;i++){
    const tempObj:echartsData ={
        name:arr[i],
        income:rnd(10000,1000000),
        outcome:rnd(1000,10000),
        profit:rnd(15000,100000),
        // dateSet:[]
    }
    echartsDataArr.push(tempObj);

 }
 return echartsDataArr
}


export default createMiddleEchartsData 