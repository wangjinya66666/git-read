<template>
  <div class="b-right">
      <ul >
                   <router-link :to="'/detail/'+value._id" tag="li" class="r-li" v-for="(value,index) in data" :key="index">
                       <img :src="'http://statics.zhuishushenqi.com'+value.cover">
                       <div>
                           <h2>{{value.title}}</h2>
                           <p class="text">{{value.shortIntro}}</p>
                           <p class="authod">{{value.author}}</p>
                       </div>
                   </router-link>
      </ul>
  </div>
</template>

<script>
export default {
    name:'RankingCon',
    data(){
        return{
            msg:null,
            data:null
        }
    },
    watch:{
        $route:{
            handler(newval){
                this.msg=newval.params.rankingcon
                this.axios.get('book/by-categories?gender='+(this.msg=='male'?'male&type=hot&major=%E7%8E%84%E5%B9%BB&minor=&':this.msg=='female'?'female&type=hot&major=%E7%A7%91%E5%B9%BB&minor=&':'press&type=hot&major=%E5%87%BA%E7%89%88%E5%B0%8F%E8%AF%B4&minor=&')+'start=0&limit=20').then(res=>{
                    this.data=res.data.books;
                    // console.log('排行榜渲染',this.data)
                }).catch(err=>{
                    console.log(err)
                })
            },
            deep: true,
            immediate: true       
        }
    }
}
</script>

<style scoped>
     .b-right{
        flex: 1;
    }
    .r-li{
        display: flex;
        padding: 0.2rem 0 0.2rem 0.3rem;
    }
    .r-li img{
        width: 1.2rem;
        padding-right: 0.2rem;
    }
    .r-li div{
        text-align:justify;
        /* flex: 1; */
    }
    .r-li div h2{
        font-size: 0.32rem;
        color: #333;
        line-height: 0.44rem;
        width: 3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    div .text{
        font-size: 0.24rem;
        margin: 0.12rem 0;
        line-height: 0.32rem;
        color: #8a8a8a;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    div .authod{
        color: #a3a3a3;
        font-size: 0.1rem;
    }
</style>