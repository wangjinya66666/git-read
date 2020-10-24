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
import Personal from '../pages/personal/Personal'
import Recharge from '../pages/recharge/Recharge'

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
}, {
    path: '/personal', //个人中心
    name: 'Personal',
    component: Personal
}, {
    path: '/recharge', //充值
    name: 'Recharge',
    component: Recharge
}]
const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
    // 全局路由守卫
router.beforeEach((to, from, next) => {
    // console.log(to, from)
    // to: Route: 即将要进入的目标 路由对象
    // from: Route: 当前导航正要离开的路由
    // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

    const nextRoute = ['Home', 'Vip', 'Personal', 'Recharge'];
    let isLogin = localStorage.getItem('login'); // 是否登录
    // console.log('是否登录：', isLogin)
    // 未登录状态；当路由到nextRoute指定页时，跳转至login
    // console.log(nextRoute.indexOf(to.name))
    if (nextRoute.indexOf(to.name) !== -1) { //数组中的存在时候
        if (!isLogin) { //!isLogin为true执行登录页面跳转
            // console.log('未登录跳转到登录页面')
            router.push({ name: 'Sign' })
        }
    }
    // 已登录状态；当路由到login时，跳转至home 
    if (to.name === 'Sign') {
        if (isLogin) {
            // console.log('登录跳转到用户页面')
            router.push({ name: 'Personal' });
        }
    }
    next();
});
export default router