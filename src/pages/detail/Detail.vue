<template>
  <div>
      <detail-header></detail-header>
      <!-- 简介标签-->
      <div class="detail-book">
          <div class="book-flet">
              <img :src="'http://statics.zhuishushenqi.com'+msg.cover" alt="">
          </div>
          <div class="book-right">
              <h4>{{msg.title}}</h4>
              <p class="tags">
                  <b>{{msg.author}}</b><span>|</span>{{msg.cat}}<span>|</span>{{Math.round(msg.wordCount/10000)}}万字
              </p>
              <p class="end">完结</p>
          </div>
      </div>
      <!-- 按钮加购阅读 -->
      <div class="detail-link">
          <!-- disabled :style="{'pointerEvents':clicka}" -->
              <a class="add" @click.once="addData" :class="clicka==true?'aselect':''">加入书架</a>
              <router-link :to="'/detail/'+$route.params.datailId" class="read">立即阅读</router-link>
      </div>
      <p class="member">开通VIP,免费阅读此书</p>
      <div class="information">
          <div>
              <p>追人气</p>
              <p>{{msg.latelyFollower}}人</p>
          </div>
          <div>
              <p>读书留存率</p>
              <p>{{msg.retentionRatio}}%</p>
          </div>
          <div>
              <p>日更字数/天</p>
              <p>{{msg.serializeWordCount}}</p>
          </div>
      </div>
      <!-- 图书简介 -->
      <p class="introduction">
          {{msg.longIntro}} 
      </p>
      
      <!-- 图书目录 -->
      <router-link :to="'/catalog/'+msg._id" tag="div" class="directory">
          <span>目录</span>
          <span class="d-right">{{msg.lastChapter}} <i class="iconfont dirrctory-r" >&#xe64a;</i> </span>
      </router-link>
      <!-- 评论 -->
      <div class="comment">
          <h4>精品评论</h4>
          <div class="c-boytique">
              <img src="http://statics.zhuishushenqi.com/avatar/39/d8/39d81cf4cd1822b281db8157bfccdab3" alt="">
              <div class="c-b-right">
                  <div class="b-r-name">疯狂的业主</div>
                  <h3>人间至味是清欢</h3>
                  <p class="score">
                      <i class="iconfont">&#xe615;</i><i class="iconfont">&#xe615;</i><i class="iconfont">&#xe615;</i>
                  </p>
                  <p class="c-b-text">不得不说，这女主也是绝了，完全不按套路出牌，不走寻常路啊！每次看到辛夷的那些小心思，我都会想到为了逃避父母问成绩时的那些小九九😁不过易扬的心理素质也是好，听见辛夷那几声“狗男人”也只是捏捏拳头啊！</p>
                  <p class="time"><span>七天前</span></p>
              </div>
          </div>
          <div class="c-boytique">
              <img src="http://statics.zhuishushenqi.com/icon/avatar.png" alt="">
              <div class="c-b-right">
                  <div class="b-r-name">伦桑</div>
                  <h3>山有木兮</h3>
                  <p class="score">
                      <i class="iconfont">&#xe615;</i><i class="iconfont">&#xe615;</i><i class="iconfont">&#xe615;</i>
                  </p>
                  <p class="c-b-text">不得不说，这女主也是绝了，完全不按套路出牌，不走寻常路啊！每次看到辛夷的那些小心思，我都会想到为了逃避父母问成绩时的那些小九九😁不过易扬的心理素质也是好，听见辛夷那几声“狗男人”也只是捏捏拳头啊！</p>
                  <p class="time"><span>一月前</span></p>
              </div>
          </div>
      </div>
      <!-- 热搜榜推荐 -->
      <detail-hot></detail-hot>
      <home-input></home-input>
      <detail-food></detail-food>

  </div>
</template>

<script>
import DetailHeader from './components/DetailHeader'
import DetailFood from './components/DetailFood'
import DetailHot from './components/DetailHot'
import HomeInput from '../home/components/HomeInput'

export default {
    name:'Detail',
    data(){
        return{
            msg:{
            type:Array
            },//bug
            clicka:false
        }
    },
    components:{
         DetailHeader,
         DetailHot,
         HomeInput,
         DetailFood
    },
    methods:{
        addData(){
            const anbook={cover:this.msg.cover,title:this.msg.title,id:this.msg._id,bgk:'true'};
            // console.log('点击加入书架的数据',anbook);
            this.$store.commit('addBooks',anbook);
            this.clicka=true;
        }
    },
    watch:{
        $route:{
            handler(newval){
                // console.log('vuex中的数据',this.$store.state.books)
                // console.log('详情页id',this.$route.params.datailId)
                const flg=this.$store.state.books.findIndex(value=>{
                    return value.id===this.$route.params.datailId
                })
                // console.log('8888',flg)
                if(flg!==-1){
                    this.clicka=true;
                }
                // console.log('详情页',newval.params.datailId);
                this.axios.get('book/'+newval.params.datailId).then(res=>{
                    this.msg=res.data;
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
.dirrctory-r{
    font-size: 0.24rem;
}
.add{
    background: #ea4136;
    color: #fff!important;
}
.detail-book img{
    width: 1.28rem;
}
.detail-book{
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 0.4rem;
}
.tags,
.end{
    color: #999;
    font-size: 0.24rem;
}
.tags span{
    margin: 0 0.1rem;
    
}
.tags b{
    color: #ea4136;
}
.book-right{
    flex: 1;
    text-align: left;
    padding: 0 0.2rem;
    line-height: 0.5rem;
}
.detail-link{
    display: flex;
    justify-content:space-between;
    box-sizing: border-box;
    padding:0 0.4rem 0.4rem 0.4rem;
}
.detail-link a{
    display: inline-block;
    width: 3rem;
    height: 0.86rem;
    line-height: 0.86rem;
    color: #ea4136;
    border-radius: 0.08rem;
    border: 1px solid #ea4136;
}
.detail-link .aselect{
    background: #999;
    border: 1px solid #999;
}
.member{
    color: #f39800;
    margin-bottom: 0.4rem;
}
.information{
    display: flex;
    padding: 0.4rem 0;
    line-height: 0.5rem;
    border-bottom: 1px solid #ebebeb;
    border-top: 1px solid #ebebeb;
}
.information div{
    flex: 33.3%;
}
.introduction{
   margin: 0.4rem; 
   line-height: 1.3;
   font-size: 0.24rem;
   color: #999;
   text-align: justify;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 4;
   -webkit-box-orient: vertical;
   overflow: hidden;
}

.rect{
    width: 100%;
    height: 0.12rem;
    background:   #ebebeb;
}
.directory{
    display: flex;
    justify-content: space-between;
    padding: 0.4rem;
}
.d-right{
    color: #999;
    font-size: 0.24rem;
}
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
 .c-boytique img{
     width: 0.7rem;
     height: 0.7rem;
     margin-right: 0.2rem;
     border-radius: 50%;
 }
 .comment h4{
    padding:0 0.4rem;
    line-height: 0.8rem;
    text-align: left;
    border-top: 1px solid #ebebeb;
}
.c-boytique{
    display: flex;
    padding: 0.2rem 0.4rem;
    
}
.c-b-right{
    flex: 1;
    text-align: left;
    color: #999;
    font-size: 0.24rem;
}
.c-b-text{
    line-height: 0.4rem;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   overflow: hidden;
}
.c-b-right h3{
    color: #000;
    line-height: 0.4rem;
    font-weight: 600;
}
.score i{
    line-height: 0.4rem;
    color: #f19048;
    font-size: 0.2rem;
}
.time {
    margin-top: 0.1rem;
}
</style>