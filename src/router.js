import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photo/PhotoList.vue'
import PhotoInfo from "./components/photo/PhotoInfo.vue"
import GoodList from "./components/goods/GoodList.vue"
import GoodInfo from "./components/goods/GoodInfo.vue"
import GoodDesc from "./components/goods/GoodDesc.vue"
import GoodComment from "./components/goods/GoodComment.vue"
// 创建路由对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect:'/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/search', component: SearchContainer },
    { path: '/shopcar', component: ShopCarContainer },
    { path: '/home/news', component: NewsList },
    { path: '/home/news/:id', component: NewInfo },
    { path: '/home/photos', component: PhotoList },
    { path: '/home/photos/:id', component: PhotoInfo },
    { path: '/home/goods', component: GoodList },
    { path: '/home/goods/:id', component: GoodInfo },
    { path: '/home/goods/gooddesc/:id', component: GoodDesc ,name:'gooddesc'},
    { path: '/home/goods/goodcomment/:id', component: GoodComment,name:'goodcomment' }
  ],
  linkActiveClass: 'mui-active' // 手动设置 被激活的 路由链接的高亮类名
})

export default router