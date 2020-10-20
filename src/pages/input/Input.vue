<template>
  <div class="input">
      <detail-header>
           <div class="sex">搜索</div>
      </detail-header>
      <div class="i-container header_input">
          <input type="text" placeholder="铁血文明" v-model="inputVal" @input="inputFun">
          <i class="iconfont">&#xe67e;</i>
      </div>
      <ul class="get-data">
          
          <li v-for="(value,index) in getData" :key="index"><i class="iconfont">&#xe61f;</i>{{value}}</li>
      </ul>
  </div>
</template>

<script>
import DetailHeader from '../detail/components/DetailHeader'
export default {
    name:'Input',
    components:{
        DetailHeader
    },
     data(){
      return{
          inputVal:null,
          getData:''
      }
    },
  methods:{
    inputFun(){
        this.axios.get('book/auto-complete?query='+this.inputVal).then(res=>{
            this.getData=res.data.keywords;
            // console.log('input自动补全：',this.getData);
        }).catch(err=>{
            console.log(err);
        })
    }
  }
}
</script>

<style scoped>
    .header_input{
    position: relative;
    height: 0.8rem;
    padding: 0.3rem 0.3rem;
}
.header_input input{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 0.3rem;
    border-radius: 3rem;
    border:1px solid #dbdbdb;
    background: #ebebf0;
}
.header_input i{
    position: absolute;
    width: 0.8rem;
    right: 0.3rem;
    line-height: 0.8rem;
    color: #dbdbdb;
    border-left: 1px solid #dbdbdb;
}
.get-data i{
    padding-right: 0.2rem;
    color: #c1c1c1;
}
.get-data{
    padding: 0 0.3rem;

}
.get-data li{
    line-height: 1rem;
    text-align: left;
}
</style>