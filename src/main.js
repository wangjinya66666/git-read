import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store/index' //vuex
import VueLazyLoad from 'vue-lazyload'

axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick' //解决移动端300ms延迟
import '../src/assets/styles/reset.css' //css默认样式
import '../src/assets/iconfont/iconfont.css' //iconfont
import '../src/assets/styles/border.css' //解决1px边框问题

Vue.prototype.axios = axios
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )
Vue.use(VueLazyLoad)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')