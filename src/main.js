import Vue from 'vue'

import '../lib/mui/css/mui.min.css'


import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);



import app from './App.vue'

var vm = new Vue({
    el:'#app',
    data:{

    },
    render:c=>c(app),
})
