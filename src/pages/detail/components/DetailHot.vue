<template>
  <div class="interest">
          <h4>热搜榜推荐</h4>
          <ul>
              <router-link tag="li" :to="'/detail/'+value._id" v-for="(value,index) in hotmsg.slice(0,6) " :key="index">
                  <img :src="'http://statics.zhuishushenqi.com'+value.cover">
                  <p>{{value.title}}</p>
              </router-link>
          </ul>
  </div>
</template>

<script>
export default {
    name:'DetailHot',
    data(){
        return{
            hotmsg:[]
        }
    },
    mounted(){
          this.axios.get('ranking/564ef4f985ed965d0280c9c2').then(res=>{
            this.hotmsg=res.data.ranking.books
            // console.log('热搜榜推荐',this.hotmsg);
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>
.interest{
    padding: 0 0.4rem;
}
.interest img{
    width: 1.6rem;
}
.interest h4{
    text-align: left;
    font-weight: 600;
    line-height: 0.8rem;
}

.interest ul{
    display: flex;
    flex-wrap: wrap;
}
.interest li{
    flex: 33.3%;
}
 li p{
     line-height: 0.6rem;
 }

</style>