export default class commonUtils {
    public static thandsFormate(){
        
    }
    // 千分位

    // 浮点数精度计算问题


    // 获取指定日期的周一

    // 计算给定日期的周数

    // 针对数组中对象的某一属性对数组进行过滤

    // momemnt

    // 将标准时间转化为yyyy-yy-dd

    public static formatDate(date){
        let d= new Date(date);
        // var d = new Date('Thu May 12 2016 08:00:00 GMT+0800 (中国标准时间)');
// var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() 
    }

}