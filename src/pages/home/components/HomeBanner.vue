<template>
  <div class="banner">
      <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide class="imgs">
      <img :src="title=='male'?imgs[0].male[0]:imgs[1].female[0]">
    </swiper-slide>
    <swiper-slide class="imgs">
      <img :src="title=='male'?imgs[0].male[1]:imgs[1].female[1]">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeBanner',
  data (){
    return{
      title:'',
      imgs:[{
        'male':['https://plf-new.zhuishushenqi.com/management/images/20200731/b4e8024d71c04943bbd0c08da90baf5f.jpg','https://plf-new.zhuishushenqi.com/management/images/20200828/bab82a74e140477c8af02d93d8431ee4.jpg']
      },{
        'female':['https://plf-new.zhuishushenqi.com/management/images/20200828/dc20cf71362d4eee845e73795bc53935.jpg','https://plf-new.zhuishushenqi.com/management/images/20200821/ee5d7ad15dc44954b69d12d484d7e1c6.jpg']
      }],
      swiperOption:{
        pagination: '.swiper-pagination',
        loop:true,
        autoplay: 1000,
      }    
    }
  },
  watch:{
    $route:{
      handler(newval){
        this.title=newval.params.sex;
        // console.log('banner测试：',newval.params.sex);
      },
      immediate:true
    }
  }
}
</script>

<style scoped>

 .banner .swiper-pagination-bullet-active{
    background: #B83320 !important;
  }
  .imgs img{
    width: 100%;
  }
</style>