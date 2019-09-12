<template>
  <div class="home">
    <!-- 头部 先写成公共样式 再根据细节微调 -->
    <div class="head">
      <div class="head_img">
        <img  :src="activeImg" alt />
      </div>
      <div class="head_right">
        <img class="head_right_img1" src="@/assets/logo1.png" alt />
          <div class="head_txt" v-html="contentStr"></div>
        <img class="head_right_img2" src="../../assets/nextIcon.png" alt />
      </div>
    </div>

    <!-- 展示List -->
    <div class="ListS">
      <img class="List_icon" src="@/assets/logo2.png" alt />

      <!-- 陈列区 -->
      <div class="List" v-for="(item , index ) in opints" :key="index">
        <p class="List_p">{{item.title}}</p>
        <span class="List_span">{{item.desc}}</span>
        <div class="model">

          <div class="list_div" v-for="(tem ,inde ) in item.list" :key="inde"  @click="getto(tem)">
            <img class="model_img" :src="retImg(tem.thumb)" alt="">
            <div class="mode-_detail">
                <p>{{tem.title }} </p>
                <span>口径:{{tem.koujing}}mm   底径:{{tem.dijing}}mm  高:{{tem.gaodu}}mm</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import  ImgUrl from "../utils/ImgUrl"
import {escape2Html ,removeHTMLTag } from '../utils/rictText'
import {gethomeProduct,getHomeAbout} from "../apis/login" 
export default {
  name: "home",
  data() {
    return {
      activeImg:'',
      contentStr:'',
      opints:[]
    };
  },
  created(){
    this.getHome()
    this.getProduct()
    //
    // console.log(this.$options.data())
  },
  methods: {
    getto(res){
      console.log(res.p_id)
      this.$router.push({path:"/olds",query:{
        id:res.p_id
      }})
    },
    retImg(res){
      return ImgUrl+res
    },
    getProduct(){
      gethomeProduct().then(res=>{
        console.log(res)
        this.opints=res
      })
    },
    getHome(){
      getHomeAbout().then(res=>{
        this.contentStr=escape2Html(res.content)
        this.activeImg=ImgUrl+res.thumb
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../css/collect.styl';
  .head_txt{
        clear: both;
        font-family: MicrosoftYaHei;
        width: 792px;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        line-height: 35px;
        color: #292a2c;
        margin-top: 35px;
        overflow: hidden;
  }
 
</style>
