<template>
  <div class="vip">
      <detail-header>
            <div class="sex">VIP</div>
      </detail-header>
      <home-banner></home-banner>
      <!-- 主题 -->
      <div class="potential">
      <h4>
          VIP榜单 
      </h4>
      <ul>
          <router-link tag="li" :to="'/detail/'+value._id" v-for="(value,index) in msg" :key="index">
              <!-- <img :src="'http://statics.zhuishushenqi.com'+value.cover"> -->
              <img  v-lazy="'http://statics.zhuishushenqi.com'+value.cover">
              <div>
                  <p class="title">{{value.title}}</p>
                  <p class="desc">{{value.shortIntro}}</p>
                  <p class="tags">{{value.minorCate}}<span>|</span> <b>{{value.latelyFollower}}</b> 万人气</p>
              </div>
          </router-link>
      </ul>
      </div>  
  </div>
</template>

<script>
import DetailHeader from '../detail/components/DetailHeader'
import HomeBanner from '../home/components/HomeBanner'

export default {
    name:'Vip',
    components:{
        DetailHeader,
        HomeBanner
    },
    data(){
        return{
            msg:[]
        }
    },
    mounted(){
        this.axios.get('ranking/57eb86f0ef9e5a8f20543d7d').then(res=>{
            this.msg=res.data.ranking.books;
            console.log('Vip数据',this.msg);
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>
    h4{
    height: 1rem;
    padding: 0 0.3rem;
    line-height: 1rem;
    font-size: 14px;
    text-align: left;
   }
   .more{
       float: right;
   }
   li{
       display: flex;
       flex-wrap: wrap;
       box-sizing: border-box;
       width: 100%;
       padding:0.3rem;
   }
   li img{
        width: 1.24rem;
        margin-right: 0.2rem;
    }
    ul div{
        flex: 1;
        text-align: left;
        font-size: 0.24rem;
        color: #999;
    }
   .desc{
       line-height: 0.32rem;
       margin: 0.16rem 0;
       font-size: 0.24rem;
       text-overflow: ellipsis;
       display: -webkit-box;
       -webkit-line-clamp: 2;
       -webkit-box-orient: vertical;
       overflow: hidden;
   }
   .title{
       font-size: 0.28rem;
       font-weight: 600;
       color: #333;
   }
   .tags{
       color: #333;
   }
   .tags span{
       padding: 0 0.2rem;
   }
   .tags b{
       color: #ea4136;
   }
</style>