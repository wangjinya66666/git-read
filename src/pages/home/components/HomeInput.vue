<template>
  <div class="homeInput">
      <router-link tag="div" to="/input" class="header_input">
          <input type="text" placeholder="铁血帝国">
          <i class="iconfont">&#xe67e;</i>
      </router-link>
  </div>
</template>
<script>
export default {
  name:'HomeInput',
}
</script>

<style scoped>
.header_input{
    position: relative;
    height: 0.8rem;
    padding: 0.3rem 0.16rem;
    background: #fff;
    border-top: 1px solid #dbdbdb;
}
.header_input input{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 0.3rem;
    border-radius: 3rem;
    border:1px solid #dbdbdb;
}
.header_input i{
    position: absolute;
    width: 0.8rem;
    right: 0.3rem;
    line-height: 0.8rem;
    color: #dbdbdb;
    border-left: 1px solid #dbdbdb;
}
</style>