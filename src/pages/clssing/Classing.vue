<template>
  <div class="classing">
      <detail-header>
            <div class="sex">书城分类</div>
      </detail-header>
      <!-- 分类主题 -->
      <div class="class-tag" v-for="(value,items) in msg" :key="items">
          <h2 class="c-title">{{items=='male'?'男':items=='female'?'女':items=='press'?'出版':'其他'}}</h2>
          <ul>
              <router-link :to="{path:'/classmall',query:{classBig:items,clasSmall:item.name,smallName:''}}" tag="li" v-for="(item,i) in value" :key="i">
                  <h2>{{item.name}}</h2>
                  <p>{{item.bookCount}}</p>
              </router-link>
          </ul>
      </div>
  </div>
  
</template>

<script>
import DetailHeader from '../detail/components/DetailHeader'
export default {
    name:'Classing',
    components:{
        DetailHeader
    },
    data(){
        return{
            msg:{
                type:Object
            }
        }
    },
    mounted(){
        this.axios.get('cats/lv2/statistics').then(res=>{
            this.msg=res.data;
            // console.log('分类数据',this.msg);
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>
.c-title{
    padding: 0 .4rem;
    height: 0.8rem;
    line-height: 0.8rem;
    color: #999;
    text-align: left;
}
ul{
    display: flex;
    flex-wrap: wrap;

}
li{
    box-sizing: border-box;
    flex: 33.33%;
    flex-grow:0;
    padding: 0.3rem;
    border-top: 1px solid #f8f8f8;
    border-right: 1px solid #f8f8f8;
    border-bottom: 1px solid #f8f8f8;
}
li h2{
    line-height: 0.4rem;
    font-size: 0.28rem;
    font-weight: 700;
    color: #333
}
li p{
    font-size: 12px;
    color: #ccc;
}
</style>