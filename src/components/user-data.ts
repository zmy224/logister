export default{
     createTableData(total:number) {
         const Data=[]
        for(let i= 0;i< total;i++){
            const tempObj ={
             userID:parseInt(Math.random()*100000000+''),
             email:Math.random()*100000000000+'@qq.com',
             sex:parseInt(Math.random()*100 % 2+'')===0 ? '男':'女',
             name:'sjidsojdsojd'+i,
             id:i+1,
             part:parseInt(Math.random()*100 % 2+'')===0 ? '市场部':'总裁办',
             phoneNo:Math.random()*100000000000,
            }
        Data.push(tempObj);
        }
        return Data
    }
}