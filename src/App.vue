<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>
<script>
// import Home from  './components/Home.vue'


export default {
  name: 'app',
 


 

}
</script>

<style lang='less'>
html,body,#app{
  width:100%;
  height:100%;

 //这是自定义loading区域的样式，当然，你可以随意修改，我这个是仿照ElementUI的样式进行设置的
.customLoading{
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,.8);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  i{
    color: rgb(32, 160, 255);
    font-size: 30px;
  }
}

 
}
</style>
