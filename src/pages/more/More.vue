<template>
    <div class="more">
        <detail-header>
            <div class="sex">{{(title.sex=='male'?'男生':'女生')+title.title}}</div>
        </detail-header>         
        <ul>
            <router-link :to="'/detail/'+value._id" tag="li" v-for="(value,index) in msg.slice(0,40) " :key="index">
                <img v-lazy="'http://statics.zhuishushenqi.com'+value.cover" alt="">
                <!-- <img :src="'http://statics.zhuishushenqi.com'+value.cover" alt=""> -->
                <div>
                    <p class="title">{{value.title}}</p>
                    <p class="category">
                        {{value.minorCate}}<span class="split">|</span><span class="c-red">{{value.author}}</span>
                    </p>
                    <p class="desc">{{value.shortIntro}}</p>
                    <p class="category category-b">
                       <b>{{value.latelyFollower}}</b>人气<span class="split">|</span><span class="c-red"><b>{{value.retentionRatio}}</b>%读者留存</span>
                    </p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import DetailHeader from '../detail/components/DetailHeader'
export default {
    name:'More',
    data(){
        return{
          msg:'',
          title:''
        }
    },
    components:{
        DetailHeader
    },
    watch:{
            $route:{
                handler(newval){
                    this.title=newval.query;
                    // console.log('更多按钮立即执行：',this.title);
                    this.axios.get('ranking/'+newval.query.id).then(res=>{
                        this.msg=res.data.ranking.books;
                        // console.log('更多获取数据',this.msg);
                    })
                },
                immediate:true
            }
    }
}
</script>

<style scoped>
    ul li{
     display: flex;
     padding: 0.2rem 0.3rem;
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
    .title{
       font-size: 0.28rem;
       font-weight: 600;
       color: #333;
   }
   .category{
       padding : 0.17rem 0;
   }
   .category-b{
       color: #333;
   }
   .category-b b{
       color: #ea4136;
   }
   .split{
        padding: 0 0.2rem;
    }
    .desc{
       font-size: 0.24rem;
       text-overflow: ellipsis;
       display: -webkit-box;
       -webkit-line-clamp: 1;
       -webkit-box-orient: vertical;
       overflow: hidden;
}
</style>