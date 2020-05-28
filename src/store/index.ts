import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'
Vue.use(Vuex)
// const adminCoookie= 'masterCookie';

// function setCookie(token:any):void{
//   Cookie.set('masterCookie',token);
// }
// function removeCookie(token:any):void{
//   Cookie.remove(token);
//  }
//  function getCookie(token:any){
// return   Cookie.get(token);
// }

export default new Vuex.Store({
  state: {
    token:'',
    useName:'',
    avator:'',
    roles:[],
    introduction:''
  },
  mutations: {
    setToken(state,token){
      // setCookie(token);
      state.token=token;
    },
    setName(state,useName){
      state.useName=useName;
    },
    setAvator(state,avator){
      state.avator=avator;
    },
    setIntroduction(state,introduction){
      state.introduction=introduction;
    },
    setRoles(state,roles){
      state.roles=roles;
    }
  },
  actions: {
  },
  modules: {
  }
})
