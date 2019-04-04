import Vue from 'vue'


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



import { Header,Swipe, SwipeItem ,Button} from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


import app from './App.vue'

var vm = new Vue({
    el:'#app',
   
    render:c=>c(app),
     router
    
})
