<template>
  <div class="sign">
      <div class="header_top">
        <div class="logo" @click="clickHref">
            <i class="iconfont">&#xe641;</i>
            返回
        </div>
        <div class="sex">登录</div>
      </div>
      <img src="http://imgasset.txtbook.com.cn/config/wap/logo/2020010716553613669.png" alt="">
      <div class="mode">
        <span  @click="codeClick">验证码登录</span>
        <span  @click="accountClick">账号登录</span>
      </div>
      <!-- 验证码登录 -->
      <form class="code" :class="mode==true?'showMode':''" >
        <input type="text" class="phone" placeholder="请输入手机号" v-model="phone">
        <span v-if="count==0" :class="{obtain:phoneRight()}" @click="openIntem">获取验证码</span>
        <span v-else>已发送{{count}}s</span>
        <input type="text" class="verification">
      </form>
      <!-- 账号登录 -->
      <form class="account" :class="mode==false?'showMode':''" >
        <input type="text" placeholder="请输入账号">
        <input type="password">
      </form>      
      <a class="loginBut">登录</a>
      <!-- <div class="tags">快速注册<span class="splice">|</span>忘记密码</div> -->
  </div>
</template>

<script>
export default {
    name:'Sign',
    data(){
      return{
        mode:true,
        phone:'',
        count:0
      }
    },
    components:{
    },
    methods:{
        clickHref(){
           this.$router.go(-1);
        },
        accountClick(){
          this.mode=false
        },
        codeClick(){
          this.mode=true
        },
        phoneRight(){ //输入是否为手机号
          return /^[1][3,4,5,6,7,8][0-9]{9}$/.test(this.phone);
        },
        openIntem(){ //倒计时
          if(this.phoneRight){
            this.count=60;
            const time=setInterval(()=>{
              this.count--;
              if(this.count<=0){
                clearInterval(time);
              }
            },1000)
          }
        }
    }
}
</script>

<style scoped>
.account,
.code{
  display: none;
}
.sign .showMode{
  display: block;
}
 .header_top{
     box-sizing: border-box;
     width: 100%;
     height: 1rem;
     line-height: 1rem;
     padding: 0 0.3rem;
     color: #333;
     overflow: hidden;
     border-bottom: 1px solid #eeddee;
 }
  .logo{
     float: left;
 }
  .sex{
     display: inline-block;
 }
 img{
   padding: 0.8rem 0;
    width: 3.2rem;
}
 input{
   box-sizing: border-box;
   width: 70%;
   padding: 0.28rem;
   border-bottom: 1px solid #ededed;
 }
 .mode span{
   display: inline-block;
   width: 50%;
   line-height: 0.6rem;
   text-align: center;
 }
 .loginBut{
   display: inline-block;
   width: 70%;
   line-height: 0.8rem;
   margin: 0.8rem 0 0.2rem 0;
   border-radius: 0.4rem;
   background: #ea4136;
   color: #fff;
 }
 .tags{
   color: #999;
 }
 .splice{
   padding: 0 0.2rem;
 }
 .phone{
   width: 50%;
 }
 .code span{
   color: #999;
 }
 .code .obtain{
   color: #ea4136;
 }
</style>