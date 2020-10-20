<template>
  <div class="popular" id="popular">
    <h4>
        {{title=='male'?'男生':'女生'}}最热榜 <router-link tag="span" :to="{path:'/more',query:{sex:this.title,id:this.title=='male'?'54d42d92321052167dfb75e3':'54d43437d47d13ff21cad58b',title:'最热榜'}}" class="moreHot">更多 <i class="iconfont">&#xe64a;</i> </router-link>
    </h4>
    <ul>
        <router-link :to="'/detail/'+value._id" tag="li" v-for="(value,index) in msg.slice(0,4) " :key="index">
            <img :src="'http://statics.zhuishushenqi.com'+value.cover" alt="">
            <div>
                <p class="title">{{value.title}}</p>
                <p class="desc">{{value.shortIntro}}</p>
                <p class="category">
                    {{value.minorCate}}<span class="split">|</span><span class="c-red">{{value.latelyFollower}}</span>人气<i class="tag">{{value.majorCate}}</i>
                </p>
            </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomePopular',
  data(){
      return{
          msg:'',
          title:''
      }
  },
   //    女生最热榜：54d43437d47d13ff21cad58b
   //    男生最热榜：54d42d92321052167dfb75e3   
  watch:{
      $route:{
          handler(newval){
              console.log('最热榜立即执行：',newval.params.sex);
              this.title=newval.params.sex;
              this.axios.get( this.title=='male'?'ranking/54d42d92321052167dfb75e3':'ranking/54d43437d47d13ff21cad58b').then(res=>{
              this.msg=res.data.ranking.books;
                  console.log('追书最热榜',this.msg);
              }).catch(err=>{
                  console.log(err)
              })
          },
          immediate:true
      }
  }
}

</script>

<style scoped>
.moreHot{
    float: right;
    font-size: 0.24rem;
    color: #ea4136;
}
.moreHot i{
    font-size: 0.24rem;
}
#popular h4{
    text-align: left;
    font-weight: 600;
}
ul li{
     display: flex;
     padding: 0.2rem 0.3rem;
 }
 li img{
     width: 1.24rem;
 }
 ul div{
     flex: 1;
 }
h4{
    height: 1rem;
    padding: 0 0.3rem;
    line-height: 1rem;
    font-size: 14px;
    overflow: hidden;
}
#popular p{
    text-align: left;
    padding-left:0.3rem;
}
.title{
    font-size: 0.28rem;
    color: #333;
}
.desc{
    font-size: 0.24rem;
    margin: 0.2rem 0;
    color: #999;
     text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.category{
    font-size: 0.24rem;
    color: #666;
}
.split{
    padding: 0 0.1rem;
}
.c-red{
    color: #ea4136;
}
.tag{
    float: right;
    color: #ff8400;
}
</style>