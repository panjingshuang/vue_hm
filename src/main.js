import Vue from 'vue'


import VueRouter from 'vue-router'
Vue.use(VueRouter)


import VueResource from 'vue-resource'
Vue.use(VueResource)
// 导入路由对象
import router from './router.js'

import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'





import { Header,Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



import app from './App.vue'

var vm = new Vue({
    el:'#app',
   
    render:c=>c(app),
     router
    
})
