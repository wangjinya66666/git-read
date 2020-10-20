<template>
  <div class="detail-food">
      <ul class="nav">
          <router-link to="/" tag="li">首页</router-link>|
          <router-link to="/classing" tag="li">分类</router-link>|
          <router-link to="/bookshelf" tag="li">书架</router-link>
      </ul>
      <div class="txt">
        <span class="footerCon">
            客服QQ群：326738643<br>
            客服电话：010-86462015-800<br>
            ©2020北京爱书客科技有限公司<br>
            京ICP备13037522号        
        </span>
        <span class="code">
                  <img src="http://imgasset.txtbook.com.cn/config/images/2020010717551698674.jpg" alt="">
                  <p>扫码关注微信公众号</p>
        </span>
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailFood'
}
</script>

<style scoped>
.detail-food{
    background: #1c1a1a;
    color: #b6b6b6;
    font-size: 0.32rem;
    padding: 0.4rem;
}
.nav{
    display: flex;
}
li{
    flex: 33.3%;
}
.footerCon,
.code{
    font-size: 0.24rem;
    line-height: 0.5rem;
}
.code img{
    width: 2.12rem;
}
.txt{
    display: flex;
    justify-content: space-between;
    padding-top: 0.4rem;
}
</style>