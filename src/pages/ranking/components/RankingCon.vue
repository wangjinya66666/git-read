<template>
  <div class="r-bottom">
      <ul class="b-left">
         <router-link :to="'/ranking/'+msg.rankingcon+'/'+value._id" tag="li" v-for="(value,index) in data" :key="index">{{value.shortTitle}}</router-link>
      </ul>
      <div class="b-right">
      <ul >
         <router-link :to="'/detail/'+val._id" tag="li" class="r-li" v-for="(val,index) in books" :key="index">
             <img v-lazy="'http://statics.zhuishushenqi.com'+val.cover" >
             <!-- <img :src="'http://statics.zhuishushenqi.com'+val.cover"> -->
             <div>
                 <h2>{{val.title}}</h2>
                 <p class="text">{{val.shortIntro}}</p>
                 <p class="authod">{{val.author}}</p>
             </div>
         </router-link>
      </ul>
      </div>
  </div>
  
</template>

<script>
export default {
    name:'RankingCon',
    data(){
        return{
            msg:null,
            data:null,
            books:null,
            count:0
        }
    },
    watch:{
        $route:{
            handler(newval){
                this.msg=newval.params
                // console.log('排行榜地址参数：',this.msg)
                this.axios.get('ranking/gender').then(res=>{
                    this.data=res.data[this.msg.rankingcon];
                    // console.log('排行榜小分类渲染',this.data)
                }).catch(err=>{
                    console.log(err)
                })
                this.axios.get('ranking/'+this.msg.small).then(res=>{
                    this.books=res.data.ranking.books;
                    // console.log('排行榜全部图书全部图书',this.books);
                })
            },
            deep: true,
            immediate: true       
        }
    }
}
</script>

<style scoped>
 .r-bottom .router-link-exact-active{
     color: #ee4745;

}

 
 .r-bottom{
        width: 100%;
        display: flex;
    }
    .b-left{
        width: 1.56rem;
        border-right: 1px solid #EBEBEB;
        color: #8a8a8f;
    }
    .b-left li{
        box-sizing: border-box;
        margin: 0 0.28rem;
        line-height: 1.24rem;
        border-bottom: 1px solid #EBEBEB;
    }
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
        flex: 1;
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