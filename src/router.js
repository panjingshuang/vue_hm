import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewInfo from './components/news/NewsInfo.vue'

// 创建路由对象
const router = new VueRouter({
  routes: [
    { path: '/', redirect:'/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/search', component: SearchContainer },
    { path: '/shopcar', component: ShopCarContainer },
    { path: '/home/news', component: NewsList },
    { path: '/home/news/:id', component: NewInfo }
  ],
  linkActiveClass: 'mui-active' // 手动设置 被激活的 路由链接的高亮类名
})

export default router