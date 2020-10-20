<template>
  <div class="header">
      <div class="header_top">
          <div class="logo">
              <img src="http://imgasset.txtbook.com.cn/config/wap/logo/2020010716553613669.png" alt="" >
          </div>
          <div class="sex">
              <router-link to="/home/male" tag="span" class="man">男生</router-link>
              <router-link to="/home/female" tag="span" class="woman">女生</router-link>
          </div>
          <router-link to="/bookshelf" tag="div" class="iconts">
              <img src="https://m.txtbook.com.cn/Public/skin/a2/Home/public/images/header_ico1.png" >
          </router-link>
          <router-link to="/sign" tag="div" class="iconts">
               <img src="https://m.txtbook.com.cn/Public/skin/a2/Home/public/images/header_ico1.png" >
          </router-link>
      </div>
  </div>
</template>
<script>
export default {
  name:'HomeHeader'
}
</script>

<style scoped>

 .header_top{
     box-sizing: border-box;
     width: 100%;
     height: 1rem;
     padding: 0 0.3rem;
     color: #fff;
     overflow: hidden;
 }
 .logo{
     float: left;
     line-height: 1rem;
 }
 .logo img{
     width: 1.84rem;
 }
 .man{
     border-radius: 0.2rem 0 0 0.2rem;
     background: #EAEAEA;
     color: #333;
 }
 .woman{
     border-radius: 0 0.2rem  0.2rem 0;
     background: #EAEAEA;
     color: #333;
 }
 .iconts{
     float: right;
     padding-left: 0.2rem;
 }
.iconts img{
    width: 0.46rem;
    margin-top: 0.31rem;
}
 .sex{
     display: inline-block;
     margin-top: 0.2rem;
 }
 .sex span{
     display: inline-block;
     width: 0.96rem;
     height: 0.56rem;
     line-height: 0.56rem;
 }
 .router-link-exact-active{
    background: #ea4136;
    color: #fff;
}
</style>