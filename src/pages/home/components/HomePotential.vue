<template>
    <div class="potential">
        <h4>
            {{title=='male'?'男生':'女生'}}潜力榜
            <router-link tag="span" :to="{path:'/more',query:{sex:this.title,id:this.title=='male'?'54d42e72d9de23382e6877fb':'54d43709fd6ec9ae04184aa5',title:'潜力榜'}}" class="moreHot">更多 <i class="iconfont">&#xe64a;</i> </router-link>
        </h4>
    <ul>
        <router-link :to="'/detail/'+value._id" tag="li" v-for="(value,index) in msg.slice(0,6) " :key="index">
            <img :src="'http://statics.zhuishushenqi.com'+value.cover" alt="">
            <p class="title">{{value.title}}</p>
        </router-link>
    </ul>
    </div>
</template>

<script>
export default {
    name:'HomePotential',
      data(){
      return{
          msg:'',
          title:''
      }
  },
//   女生潜力榜 54d43709fd6ec9ae04184aa5
//   男生潜力榜 54d42e72d9de23382e6877fb
  watch:{
      $route:{
          handler(newval){
            //   console.log('潜力榜立即执行：',newval.params.sex);
              this.title=newval.params.sex;
              this.axios.get( this.title=='male'?'ranking/54d42e72d9de23382e6877fb':'ranking/54d43709fd6ec9ae04184aa5').then(res=>{
              this.msg=res.data.ranking.books;
                //   console.log('潜力榜渲染数据',this.msg);
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
    ul{
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        width: 100%;
        padding: 0.1rem;
    }
    li{
        flex: 33.33%;
    }
    li p{
        padding: 0.2rem 0 0.6rem 0;
    }
    ul img{
        width: 2rem;
    }
    h4{
    height: 1rem;
    padding: 0 0.3rem;
    line-height: 1rem;
    font-size: 14px;
    text-align: left;
}
</style>