import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)






import VueRouter from 'vue-router'
Vue.use(VueRouter)


import VueResource from 'vue-resource'
Vue.use(VueResource)
// 导入路由对象
import router from './router.js'

import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

import moment from 'moment'
Vue.filter('dataFomart',function(data,pattern="YYY-MM-DD hh:mm:ss"){
     return moment(data).format(pattern)
})



// import { Header,Swipe, SwipeItem ,Button} from 'mint-ui';
import 'mint-ui/lib/style.css'
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);


import VuePreview from 'vue-preview'
Vue.use(VuePreview)
import "./css/golbal.css"
import app from './App.vue'

import MIntUI from "mint-ui"
Vue.use(MIntUI)



let car = window.JSON.parse(localStorage.getItem('cart') || '[]')
//实现各个组件互访的共享数据存储区
const store  = new Vuex.Store({
     state: {
          cart:car//购物车中添加的商品数据
          //{id:商品Id,count:商品数量,price:商品价格，selected:false(商品是否被选中)，}
     },
     mutations: {
          addTocart(state,goodinfo){
               let flag = false
               state.cart.some(item=>{
                    if(item.id === goodinfo.id)
                    {
                         item.count = item.count + goodinfo.count;
                         flag = true
                         return true;
                    }
               })

               if(flag === false){
                    state.cart.push(goodinfo)
               }
               //将cart中的数据存放到本地，以便下次使用的时候，刷新不会变化空
               localStorage.setItem('cart', window.JSON.stringify(state.cart))
          },
          updateCart(state,val){
               state.cart.forEach(item=>{
                    if(item.id == val.id){
                         item.count = val.count
                         return true
                    }
               })
               localStorage.setItem('cart', window.JSON.stringify(state.cart))
          },
          delCart(state,id){
            
               state.cart.some((element,i) => {
                    if(element.id == id){
                        state.cart.splice(i, 1);
                         return true
                    }
                });
               
                localStorage.setItem('cart', window.JSON.stringify(state.cart))
          },
          updateSelected(state,info){
               state.cart.foreach(item=>{
                    if(item.id == info.id){
                         item.selected = info.selected
                         return true
                    }
               })
          localStorage.setItem('cart', window.JSON.stringify(state.cart))

          },
         
         
     },
     getters: {
          count:function(state){
               let count = 0;
               state.cart.forEach(element => {
                    count = count + element.count;
               });
               return count;
          },
          idstr:function(state){
               let ids = []
               state.cart.forEach(item=>{
                    ids.push(item.id)
               })
               return ids.join(',')
          },
          countObj:function(state){
               let goodlist ={}
               state.cart.forEach(item=>{
                    goodlist[item.id] = item.count
               })
               return goodlist
          },
          getSelected:function(state){
               var o = {}
               state.cart.forEach(item=>{
                    o[item.id] = item.selected
               })
               return o
          },
          getAmountAndcount(state){
               var o = {
                    count:0,
                    amount:0
               }
               state.cart.forEach(item=>{
                    if(item.selected== true){
                         o.count = o.count + item.count
                         o.amount +=o.count*item.price
                    } 
               })

               return o
          }
     }
})








var vm = new Vue({
    el:'#app',
   
    render:c=>c(app),
     router,
     store
    
})


