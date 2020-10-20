<template>
  <div class="home">
    <div class="h-top">
      <home-header></home-header>
      <home-input></home-input>
    </div>
    <div class="h-bottom">
      <home-banner></home-banner>
      <home-icons></home-icons>
      <router-view name="HomePopular"></router-view> 
      <div class="banner">
        <img src="http://imgasset.txtbook.com.cn/recom/images/2020010716110618711.jpg" alt="">
      </div>
      <router-view name="HomePotential"></router-view>
      <home-input></home-input>
      <detail-food></detail-food>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeInput from './components/HomeInput'
import HomeBanner from './components/HomeBanner'
import HomeIcons from './components/HomeIcons'
import DetailFood from '../detail/components/DetailFood'

export default {
  name:'Home',
  components:{
    HomeHeader,
    HomeBanner,
    HomeIcons,
    DetailFood,
    HomeInput,
  }
}
</script>

<style>
.h-top{
  position: fixed;
  z-index: 6;
  width: 100%;
  background: #fff;
}
.h-bottom{
  padding-top: 2.42rem;
}
.banner img{
  width: 100%;
}
</style>