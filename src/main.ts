import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import echarts from 'echarts'
import axios from 'axios'
import Cookie from 'js-cookie'
Vue.prototype.axios= axios
//  axios   相关配置
axios.defaults.timeout =10000;
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5e7b59d13062380dce86433d/logister';  //配置接口地址
//  设置post提交方式
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 设置请求拦截器
axios.interceptors.request.use((config)=>{
  config.headers.Authorization = store.state.token;
  return config;
}
)
//  响应拦截器
axios.interceptors.response.use((res)=>{
  // 已经过期重定向到首页
  if(res.code==4){
     router.push({path:'/login'})
     Cookie.remove('userIntroduceCookie');
     store.commit('setToken','');
  }
    return res;
 
})
Vue.prototype.$echarts = echarts ;
Vue.config.productionTip = false;

// 自定义指令

//customLoading为自定义指令的名字
//update为自定义指令的参数，当更新的时候会执行这个方法，它可以接受很多参数
//但我们这里只需要用到两个：el获取当前DOM，value获取当前指令的参数值

Vue.directive('customLoading',{
  update:function (el,value) {
    if(value.value){
      console.log(el,'el');
      const canPush = el.getElementsByClassName("customLoading");
      if(canPush.length!=0){
        return
      }
      el.style.position = "relative"
      const para = document.createElement("div");
      const i_son = document.createElement("i");
      para.setAttribute("class","customLoading");
      i_son.setAttribute("class","el-icon-loading");
      para.appendChild(i_son)
      el.appendChild(para)
    }else{
      for (var i = 0; i < el.childNodes.length; i++) {
        if(el.childNodes[i].className == 'customLoading'){
          const childNodes = el.getElementsByClassName("customLoading")[0];
          el.removeChild(childNodes)
          break
        }
      }
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
