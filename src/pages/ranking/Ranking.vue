<template>
    <div class="ranking">
        <detail-header>
            <div class="sex">排行榜</div>
       </detail-header>
       <div class="r-contaniner">
           <ul class="r-header">
             <router-link to="/ranking/male"  tag="li">男频</router-link>  
             <router-link to="/ranking/female"  tag="li">女频</router-link>  
             <router-link to="/ranking/press"  tag="li">出版</router-link>  
           </ul>
           <div class="r-bottom">
               <ul class="b-left">
                   <li>月榜</li>
                   <li>周榜</li>
               </ul>
               <router-view></router-view>
           </div>
       </div>
    </div>
</template>

<script>
import DetailHeader from '../detail/components/DetailHeader'
export default {
    name:'Ranking',
    components:{
        DetailHeader,
    }
    
}
</script>

<style scoped>
    .router-link-active{
        color: #ee4745;
        border-bottom: 1px solid #ee4745;
    }
    .r-contaniner{
        padding: 0 0.3rem;
    }
    .r-header{
        width: 100%;
        display: flex;
        line-height: 0.8rem;
        border-bottom: 1px solid #EBEBEB;
        color: #8a8a8f;
    }
    .r-header li{
        flex: 33.33%;
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


</style>