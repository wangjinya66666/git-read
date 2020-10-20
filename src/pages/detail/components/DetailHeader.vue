<template>
   <div class="header">
      <div class="header_top">
          <div class="logo" @click="clickHref">
              <i class="iconfont">&#xe641;</i>
              返回
          </div>
          <slot>
            <div class="sex">书籍详情</div>
          </slot>
          <div class="iconts">
              <router-link to="/bookshelf" tag="i" class="iconfont bookshelf">&#xe620;</router-link>
              <router-link to="/" tag="i" class="iconfont home">&#xe653;</router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailHeader',
    methods:{
        clickHref(){
           this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
 .header_top{
     box-sizing: border-box;
     width: 100%;
     height: 1rem;
     line-height: 1rem;
     padding: 0 0.3rem;
     color: #fff;
     background: #ea4136;
     overflow: hidden;
 }
 .logo{
     float: left;
     color: #fff;
 }

 .iconts{
     float: right;
 }

 .sex{
     display: inline-block;
 }
 .home{
     padding-left: 0.2rem;
 }

</style>