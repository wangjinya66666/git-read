<template>
  <div class="bookshelf">
      <detail-header>
            <div class="sex">我的书架</div>
      </detail-header>
      <home-input></home-input>
      <!-- 书籍 -->
      <div class="selectContainer" v-for="(item,index) in $store.state.books" :key="index">
          <div class="cover">
              <img :src="'http://statics.zhuishushenqi.com'+item.cover">
          </div> 
          <div class="right">
                  <h4 class="name">{{item.title}}</h4>  
                  <p>阅读到第1章</p>
                  <div class="toDleter" @click="toDleter" :data-id="item.id">移出书架</div>
          </div> 
       </div>
  </div>
</template>

<script>
import HomeInput from '../home/components/HomeInput'
import DetailHeader from '../detail/components/DetailHeader'
export default {
    name:'Bookshelf',
    components:{
        HomeInput,
        DetailHeader
    },
    methods:{
        toDleter(e){
            const did=e.target.dataset.id;
            this.$store.commit('toDleter',did)
            console.log(did)
        }
    }
}
</script>

<style scoped>
.cover img{
    width: 1.16rem;
    padding-right: 0.3rem;
}
.selectContainer{
    box-sizing: border-box;
    display: flex;
    width: 100%;
    padding:0.3rem;

}
.right{
    flex: 1;
    text-align: left;
}
.right p{
    font-size: 0.24rem;
    color: #999;
}
.name{
    font-size: 0.28rem;
    color: #333;
    font-weight: 600;
    padding-bottom: 0.3rem;
}
.toDleter{
    float: right;
    width: 2rem;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    background: #ebebeb;
    border-radius: 0.12rem;
    color: #999;
}
</style>