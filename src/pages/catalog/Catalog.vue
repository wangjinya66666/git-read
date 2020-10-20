<template>
  <div class="catalog">
      <detail-header>
            <div class="sex">全部目录</div>
      </detail-header>
      <h4>目录 <span>共{{this.msg.length}}章</span> </h4>
      <ul>
          <li v-for="(value,index) in msg" :key="index">{{value.title}}</li>
      </ul>

  </div>
</template>

<script>
import DetailHeader from '../detail/components/DetailHeader'
export default {
    name:'Catalog',
    components:{
        DetailHeader
    },
    data(){
        return{
            msg:''
        }
    },
    mounted(){
        console.log(this.$route.params.datailId)
        this.axios.get('atoc/568fef99adb27bfb4b3a58dc?view=chapters').then(res=>{
            this.msg=res.data.chapters;
            // console.log('章节目录',this.msg);
        }).catch(arr=>{
            console.log(arr);
        })
    }
}
</script>

<style scoped>
    h4{
    height: 1rem;
    padding: 0 0.3rem;
    line-height: 1rem;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    }
    h4 span{
        float: right;
        color: #999;
        font-size: 0.24rem;
        font-weight: 400;
    }
    li{
        line-height: 0.96rem;
        text-align: left;
        padding: 0 0.3rem;
        color: #999;
        font-size: 0.24rem;

    }
</style>