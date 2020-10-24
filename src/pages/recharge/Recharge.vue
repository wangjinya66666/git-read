<template>
  <div class="recharge">
      <detail-header>
          <div class="sex">充值中心</div>
      </detail-header>
      <!-- vip卡 -->
      <div class="vip">
          <p class="v-title"><img src="https://m.txtbook.com.cn/Public/skin/a2/Home/public/images/vipIco2.png" alt=""> 包年畅读VIP超级会员</p>
          <p class="v-price">￥365.00</p>
          <p class="v-txt">每天1元，全年免费看</p>
      </div>
      <!-- 充值金额 -->
      <div class="amount">
          <h4>充值金额</h4>
          <div class="a-money">
               <!-- v-bind:class='{active:index==num}' -->
              <div class="m-modular" v-for="(value,index) in moneys" :key="index" :class="{active:index==selectNum}" @click="clickMOsular(index)">
                  <p class="m-num">￥{{value.num}}</p>
                  <p class="m-more">{{value.more}}追书币</p>
              </div>
          </div>
          <h4>支付方式 <i class="iconfont">&#xe64a;</i></h4>
          <button>立即充值</button>
      </div>
      
  </div>
</template>

<script>
import DetailHeader from '../detail/components/DetailHeader'
export default {
    name:'Recharge',
    components:{
        DetailHeader
    },
    data(){
        return{
            selectNum:0,
            moneys:[{
                num:30,
                more:3000
            },{
                num:50,
                more:5100
            },{
                num:100,
                more:10500
            },{
                num:130,
                more:11000
            },{
                num:150,
                more:16000
            },{
                num:200,
                more:25000
            }]
        }
    },
    methods:{
        clickMOsular(i){
            this.selectNum=i;
        }
    }
}
</script>
<style scoped>
    .a-money .active{
        color: #b08544;
        background-image: linear-gradient(to right, #fefaee ,#f2e6d2);
        border: 1px solid #d9c3a3;
    }
    h4 i{
        float: right;
    }
    button{
        width: 80%;
        height: 0.9rem;
        line-height: 0.9rem;
        margin-top: 0.3rem;
        background-image: linear-gradient(to right, #fefaee ,#f2e6d2);
        color: #b08544;
        border-radius: 0.12rem;
        border: 1px solid #d9c3a3;
    }
    .recharge{
        background: #f4f4f4;
    }
    .vip{
        margin: 0.4rem 0;
        background: url('http://imgasset.txtbook.com.cn/config/images/2020010715591912341.jpg') no-repeat;
        background-size: 90%;
        background-position-x: center;
    }
    .v-title img{
        width: 0.48rem;       
    }
    .v-title{
        font-size: 0.34rem;
        color: #b08544;
    }
    .v-price{
        font-size: 0.3rem;
        color: #b08544;
    }
    .vip p{
        padding: 0.12rem 0;
    }
    .a-money{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 0.3rem;
        color: #333;
    }
    .amount{
        background: #fff;
    }
    .m-modular{
        flex: 30%;
        flex-grow: 0;
        flex-shrink: 0;
        padding: 0.4rem 0;
        margin-bottom: 0.3rem;
        border: 1px solid #ededed;
        border-radius: 0.08rem;
    }
    .m-num{
        padding-bottom: 0.1rem;
        font-size: 0.4rem;
        font-weight: 400;
    }
    .m-more{
        font-size: 0.24rem;
        color: #666;
    }
    h4{
        height: 1rem;
        padding: 0 0.3rem;
        line-height: 1rem;
        font-size: 14px;
        overflow: hidden;
        text-align: left;
    }
</style>