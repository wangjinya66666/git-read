<template>
  <div class="classcon">
      <ul v-if="msg.length">
          <router-link :to="'/detail/'+value._id" tag="li" v-for="(value,index) in msg" :key="index" >
              <img v-lazy="'https://statics.zhuishushenqi.com'+value.cover" >
              <!-- <img :src="'https://statics.zhuishushenqi.com'+value.cover" > -->
              <div class="c-right">
                  <h4 class="c-title">{{value.title}}</h4>
                  <p class="c-authods">{{value.author}}<span class="line">|</span>{{value.majorCate}}</p>
                  <p class="text">{{value.shortIntro}}</p>
                  <p class="c-end"><span>{{value.latelyFollower}}</span>人气<b class="line">|</b><span>{{value.retentionRatio}}%</span>留存率</p>
              </div>
          </router-link>
      </ul>
      <p v-else>暂无数据</p>
  </div>
</template>                                                                                                                                        
<script>
export default {          
    name:'ClassCon',
    data(){ 
        return{
            msg:[]
        }
    },
    watch:{
        $route:{
            handler(newvlue){
                // console.log('立即执行',newvlue);
                this.axios.get('book/by-categories?gender='+newvlue.query.classBig+'&type=hot&major='+newvlue.query.clasSmall+'&minor='+newvlue.query.smallName+'&start=0&limit=40').then(res=>{
                    this.msg=res.data.books
                    // console.log('小分类数据渲染',this.msg);
                }).catch(err=>{
                    console.log(err);
                })
            },
            deep:true,
            immediate: true
        }
        
    }
}
</script>

<style scoped>
    ul{
        background: #f5f2ed;
    }
    .classcon li{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        box-sizing: border-box;
        padding: 0.2rem 0.3rem;
    }
    li img{
        width: 1.16rem;
        padding-right: 0.2rem;
    }
    li .c-right{
        flex: 1;
        text-align: left;
        color: #999;
    }
    h4{
    font-weight: 600;
    color: #333;
   }
   .line{
       padding: 0 0.2rem;
   }
   h4,p{
       line-height: 0.4rem;
   }
   .c-end span{
       color: #ea4136;
   }
   .text{
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1;
   -webkit-box-orient: vertical;
   overflow: hidden;
   }
</style>