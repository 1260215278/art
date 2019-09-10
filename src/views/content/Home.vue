<template>
  <div class="home">
    <!-- 头部 先写成公共样式 再根据细节微调 -->
    <div class="head">
      <div class="head_img">
        <img src="@/assets/art1_2.png" alt />
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
      <div class="List">
        <p class="List_p">唐</p>
        <span class="List_span">618年—907年</span>
        <div class="model">

          <div class="list_div">
            <img class="model_img" src="@/assets/art_1 .png" alt="">
            <div class="mode-_detail">
                <p>唐 - 邢窑白釉青花花卉纹花浇</p>
                <span>口径:72mm   底径:75mm  高:210mm</span>
            </div>
          </div>
          <div class="list_div"> 
            <img class="model_img" src="@/assets/art_1 .png" alt="">
            <div class="mode-_detail">
                <p>唐 - 邢窑白釉青花花卉纹花浇</p>
                <span>口径:72mm   底径:75mm  高:210mm</span>
            </div>
          </div>
         <div class="list_div">
            <img class="model_img" src="@/assets/art_1 .png" alt="">
            <div class="mode-_detail">
                <p>唐 - 邢窑白釉青花花卉纹花浇</p>
                <span>口径:72mm   底径:75mm  高:210mm</span>
            </div>
          </div>
         <div class="list_div">
            <img class="model_img" src="@/assets/art_1 .png" alt="">
            <div class="mode-_detail">
                <p>唐 - 邢窑白釉青花花卉纹花浇</p>
                <span>口径:72mm   底径:75mm  高:210mm</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 陈列区 -->
      <div class="List">
        <p class="List_p">宋</p>
        <span class="List_span">960年—1279年</span>
        <div class="model">

          <div class="list_div">
            <img class="model_img" src="@/assets/art_1 .png" alt="">
            <div class="mode-_detail">
                <p>唐 - 邢窑白釉青花花卉纹花浇</p>
                <span>口径:72mm   底径:75mm  高:210mm</span>
            </div>
          </div>
          <div class="list_div">
            <img class="model_img" src="@/assets/art_1 .png" alt="">
            <div class="mode-_detail">
                <p>唐 - 邢窑白釉青花花卉纹花浇</p>
                <span>口径:72mm   底径:75mm  高:210mm</span>
            </div>
          </div>
         <div class="list_div">
            <img class="model_img" src="@/assets/art_1 .png" alt="">
            <div class="mode-_detail">
                <p>唐 - 邢窑白釉青花花卉纹花浇</p>
                <span>口径:72mm   底径:75mm  高:210mm</span>
            </div>
          </div>
         <div class="list_div">
            <img class="model_img" src="@/assets/art_1 .png" alt="">
            <div class="mode-_detail">
                <p>唐 - 邢窑白釉青花花卉纹花浇</p>
                <span>口径:72mm   底径:75mm  高:210mm</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {escape2Html ,removeHTMLTag } from '../utils/rictText'
import {gethomeProduct,getHomeAbout} from "../apis/login" 
export default {
  name: "home",
  data() {
    return {
      activeImg:'',
      contentStr:''
    };
  },
  created(){
    this.getHome()
    this.getProduct()
  },
  methods: {
    getProduct(){
      gethomeProduct().then(res=>{
        console.log(res)
      })
    },
    getHome(){
      getHomeAbout().then(res=>{
        // console.log(res)
        this.contentStr=escape2Html(res.content)
        // this.activeImg="http://www.yicangtianxia.com.cn/index/Uploads/201909051567694079.png"
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
