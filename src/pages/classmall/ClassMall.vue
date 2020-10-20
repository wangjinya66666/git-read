<template>
  <div class="classmall">
      <detail-header>
            <div class="sex">{{title}}</div>
      </detail-header>
      <!-- 小分类 -->
      <ul class="mins">
          <router-link :to="{path:'/classmall?classBig='+bigmsg+'&clasSmall='+title+'',query:{smallName:''}}" tag="li">全部</router-link>
          <router-link :to="{path:'/classmall?classBig='+bigmsg+'&clasSmall='+title+'',query:{smallName:value}}" tag="li" v-for="(value,index) in msgarr" :key="index">{{value}}</router-link>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
import DetailHeader from '../detail/components/DetailHeader'
export default {
    name:'ClassMall',
    components:{
        DetailHeader
    },
    data(){
        return{
            title:null,
            bigmsg:null,
            msgarr:''
        }
    },
    mounted(){
        this.title=this.$route.query.clasSmall;
        this.bigmsg=this.$route.query.classBig;
        // console.log('小分类标题:',this.title,'大分类标题:',this.bigmsg);
        this.axios.get('cats/lv2').then(res=>{
            this.msgarr=res.data[this.bigmsg];
            this.msgarr=this.msgarr.filter(item=>item.major==this.title)[0].mins
            // console.log('小分类数据渲染：',this.msgarr);
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>
    .router-link-exact-active{
        color: #ea4136;
    }
    .mins{
        display: flex;
        overflow-x: auto;
        line-height: 0.9rem;
    }
    .mins li{
        padding: 0 0.3rem;
        flex-grow:0;
        flex-shrink:0;
    }

</style>