<template>
    <div class="ranking">
        <detail-header>
            <div class="sex">排行榜</div>
       </detail-header>
       <div class="r-contaniner">
           <ul class="r-header">
             <router-link to="/ranking/male/54d42d92321052167dfb75e3"  tag="li">男频</router-link>  
             <router-link to="/ranking/female/54d43437d47d13ff21cad58b"  tag="li">女频</router-link>  
             <router-link to="/ranking/picture/5a322ef4fc84c2b8efaa8335"  tag="li">漫画</router-link>  
           </ul>
           <router-view></router-view>
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
    .r-header .router-link-active{
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
   


</style>