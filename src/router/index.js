import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home'
import HomeBanner from '../pages/home/components/HomeBanner'
import HomePopular from '../pages/home/components/HomePopular'
import HomePotential from '../pages/home/components/HomePotential'
import Detail from '../pages/detail/Detail'
import Bookshelf from '../pages/bookshelf/Bookshelf'
import Classing from '../pages/clssing/Classing'
import ClassMall from '../pages/classmall/ClassMall'
import ClassCon from '../pages/classmall/components/ClassCon'
import Ranking from '../pages/ranking/Ranking'
import RankingCon from '../pages/ranking/components/RankingCon'
import Catalog from '../pages/catalog/Catalog'
import Sign from '../pages/sign/Sign'
import Input from '../pages/input/Input'
import More from '../pages/more/More'
import Vip from '../pages/vip/Vip'

Vue.use(VueRouter)

const routes = [{
    path: '/', //首页
    name: 'Home',
    component: Home,
    redirect: '/home/male',
    children: [{
        path: '/home/:sex',
        components: {
            HomeBanner,
            HomePopular,
            HomePotential
        }
    }]
}, {
    path: '/detail/:datailId', //详情页
    name: 'Detail',
    component: Detail
}, {
    path: '/bookshelf', //书架
    name: 'Bookshelf',
    component: Bookshelf
}, {
    path: '/classing', //分类
    name: 'Classing',
    component: Classing
}, {
    path: '/classmall', //小分类
    name: 'ClassMall',
    component: ClassMall,
    children: [{
        path: ':smallName?',
        component: ClassCon,

    }]
}, {
    path: '/ranking', //排行榜
    name: 'Ranking',
    component: Ranking,
    redirect: '/ranking/male/54d42d92321052167dfb75e3',
    children: [{
        path: ':rankingcon/:small',
        component: RankingCon
    }]
}, {
    path: '/catalog/:datailId', //目录
    name: 'Catalog',
    component: Catalog
}, {
    path: '/sign', //登录这个页面展示没写
    name: 'Sign',
    component: Sign
}, {
    path: '/input',
    name: 'Input',
    component: Input
}, {
    path: '/more', //这是更多页面
    name: 'More',
    component: More
}, {
    path: '/vip', //vip
    name: 'Vip',
    component: Vip
}]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router