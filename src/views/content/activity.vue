<template>
  <div class="activity">
    <!-- head -->
    <div class="head">
      <div class="head_body">
        <img src="@/assets/wan2.png" alt="ciji" />
        <div class="head_right">
          <div class="head_list">
            <div class>
              <img src="@/assets/icon3.png" alt />
            </div>
            <div class="list_1"></div>
            <div class="list_1"></div>
            <div class>
              <img src="@/assets/icon3.png" alt />
            </div>
            <div class="list_1"></div>
            <div class>
              <img src="@/assets/icon3.png" alt />
            </div>
            <div class="list_1"></div>
            <div class="list_1"></div>
            <div class>
              <img src="@/assets/icon3.png" alt />
            </div>
            <div class="list_1"></div>
            <div class>
              <img src="@/assets/icon3.png" alt />
            </div>
            <div class="list_1"></div>
            <div class>
              <img src="@/assets/icon3.png" alt />
            </div>
            <div class>
              <img src="@/assets/icon3.png" alt />
            </div>
            <div class="list_1"></div>
            <div class>
              <img src="@/assets/icon3.png" alt />
            </div>
          </div>
          <!-- 文字 -->
          <div class="head_title">
            <div style="margin:0px; ">活动策划</div>
            <div>文化交流</div>
            <div>展览展示</div>
            <div style="border:none;">鉴定拍卖</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 下半部分 -->
    <div class="body1">
      <div class="subject">
        <div class="sub_title">
          <p class="h1">活动介绍：</p>

          <p class="sub_p1" v-for="(item , index ) in allLiat"  :key="index" @click="setConten(item.aid,index)">{{item.title}}</p>
        
          <p class="sub_p1">...</p>
        </div>

        <div class="sub_text">
          <p class="sub_p1 sub1">{{from.title}}</p>
          <div class="allImg">
            <img :src="retImg(from.thumb)" alt />
            <div class="all_img2">
              <img src="@/assets/logo2.png" alt />
              <p>古瓷局万杯盏中主展藏品</p>
            </div>
          </div>

          <p v-html="allhTML"></p>
         <!-- <p class="sub_p2" style="margin-top:80px; margin-bottom:40px;">相关链接</p>
          <p class="sub_p4">万千杯盏惊艳亮相，百位设计师联盟匠心演绎——“万杯展”在北京坊劝业场开展</p>
          <p class="sub_p4">WAAP招募 | 万千杯盏，自有风情——ART POWER 100 CLUB带你去看万杯展</p>
          <p class="sub_p4">“最有趣”杯子展亮相北京坊，万千杯盏取一“瓢”有点难</p>

          <p class="sub_p2" style="margin-top:80px;">活动展示器物介绍</p> -->
        </div>
        <!-- 展示列表 -->
        <div class="model">
          <!-- <div class="list_div">
            <img class="model_img" src="@/assets/wan.png" alt />
            <div class="mode-_detail">
              <p class="mode_p">1</p>
              <span class="mode_span">邢窑 白釉嵌宝石辟邪</span>
            </div>
          </div>
          
          <div class="list_div">
            <img class="model_img" src="@/assets/wan.png" alt />
            <div class="mode-_detail">
              <p class="mode_p">2</p>
              <span class="mode_span">邢窑 白釉嵌宝石辟邪</span>
            </div>
          </div>
          <div class="list_div">
            <img class="model_img" src="@/assets/wan.png" alt />
            <div class="mode-_detail">
              <p class="mode_p">3</p>
              <span class="mode_span">邢窑 白釉嵌宝石辟邪</span>
            </div>
          </div>
          <div class="list_div">
            <img class="model_img" src="@/assets/wan.png" alt />
            <div class="mode-_detail">
              <p class="mode_p">4</p>
              <span class="mode_span">邢窑 白釉嵌宝石辟邪</span>
            </div>
          </div>
          <div class="list_div">
            <img class="model_img" src="@/assets/wan.png" alt />
            <div class="mode-_detail">
              <p class="mode_p">1</p>
              <span class="mode_span">邢窑 白釉嵌宝石辟邪</span>
            </div>
          </div>
          <div class="list_div">
            <img class="model_img" src="@/assets/wan.png" alt />
            <div class="mode-_detail">
              <p class="mode_p">2</p>
              <span class="mode_span">邢窑 白釉嵌宝石辟邪</span>
            </div>
          </div>
          <div class="list_div">
            <img class="model_img" src="@/assets/wan.png" alt />
            <div class="mode-_detail">
              <p class="mode_p">3</p>
              <span class="mode_span">邢窑 白釉嵌宝石辟邪</span>
            </div>
          </div> -->
          <div class="list_div" v-for="(item,index) in from.qiwulist" :key="index">
            <img class="model_img" :src="retImg(item.thumb)" alt />
            <div class="mode-_detail">
              <p class="mode_p">{{item.qid}}</p>
              <span class="mode_span">{{item.desc}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getActivity}  from '../apis/login'
import Pubimg from "@/components/Pubimg.vue";

import ImgUrl from '../utils/ImgUrl'
import {escape2Html  } from '../utils/rictText'
export default {
  name: "activity",
  data() {
    return {
      from:{},
      allLiat:[],
      allhTML:""
    };
  },
  components: {
    Pubimg
  },
  created(){
    this.getContent()
  },methods:{
     retImg(res) {
      if (!res) return;
      return ImgUrl + res;
    },
    setConten(id, index){
      this.allhTML= escape2Html(this.allLiat[index].content) 
       this.from=this.allLiat[index]
    },
    getContent(){
      getActivity().then(res=>{
        this.from=res[0]
        this.allLiat=res
        this.allhTML=escape2Html(res[0].content) 
      })
    }
  }
};
</script>
<style scoped>
@import "../../css/allImg.css";
</style>
<style scoped>
.model_img {
  margin-top: 19px;
}

.mode-_detail {
  position: absolute;
  width: 100%;
  text-align: center;
  height: 80px;
  bottom: 0px;
  background-color: #bfbfbf;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.mode_p {
  margin-top: 21px;
  font-family: FZLTZHK--GBK1-0;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #191919;
}

.mode_span {
  font-family: FZLTZHK--GBK1-0;
  font-size: 8px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #191919;
}

.model {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  margin: 100px 50px 0px 50px;
}
.list_div>img{
  height: 220px;
}
.list_div {
  width: 254px;
  height: 338px;
  background-color: #858b93;
  border-radius: 5px;
  margin: 0px auto;
  text-align: center;
  position: relative;
  margin-bottom: 45px;
}
.sub_text {
  margin: 0px 50px 0px 50px;
}
.sub_p2 {
  font-family: FZLTXHK--GBK1-0;
  font-size: 36px;
  font-weight: 200;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #292a2c;
  text-indent: 2em;
}
.sub_p3 {
  font-family: FZLTXHK--GBK1-0;
  font-size: 24px;
  font-weight: 200;
  letter-spacing: 0px;
  margin-top: 40px;
  line-height: 36px;
  color: #292a2c;
  text-indent: 2em;
}
.sub_p4 {
  font-family: FZLTXHK--GBK1-0;
  font-size: 24px;
  font-weight: 200;
  letter-spacing: 0px;
  line-height: 36px;
  color: #292a2c;
  text-indent: 2.5em;
}
.h1 {
  font-family: FZLTXHK--GBK1-0;
  font-size: 36px;
  line-height: 36px;
  font-weight: 200;
  letter-spacing: 0px;
  color: #292a2c;
  margin-top: 120px;
  margin-bottom: 15px;
}
.sub_title {
  margin-left: 88px;
}

.sub_p1 {
  cursor: pointer;
  font-family: FZLTXHK--GBK1-0;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 0px;
  line-height: 70px;
  color: #292a2c;
}
.sub1{
   font-family: FZLTXHK--GBK1-0;
  font-size: 36px;
  line-height: 36px;
  font-weight: 200;
  letter-spacing: 0px;
  color: #292a2c;
  margin-top: 45px;
  margin-bottom: 45px;
  text-indent: 1em;
}
.avtive {
  font-family: FZLTXHK--GBK1-0;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #8e1218;
}
.body1 {
  width: 100%;
  background-color: #f4f4f4;

  margin-bottom: 100px;
}
.subject {
  max-width: 62.5%;
  min-width: 1200px;
  overflow: hidden;
  margin: auto;
  padding-bottom: 100px;
  background-color: #ffffff;
}
.head_title > div {
  margin-left: 11px;
  padding-right: 11px;
  border-right: 2px solid white;
  font-family: MicrosoftYaHei;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
}
.head_title {
  display: flex;
  margin-top: 65px;
}
.list_1 > img {
  z-index: 8;
}
.list_1 {
  width: 103px;
  height: 103px;
  background-color: #bdc0c4;
  border-radius: 6px;
}
.head_list > div {
  margin-right: 7px;
}
.head_list {
  width: 447px;
  height: 447px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 8px;
}
.head_right {
  margin-top: 130px;
}
.head_body > img {
  margin-top: 60px;
}
.head_body {
  width: 73.95%;
  min-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.head {
  height: 840px;
  width: 100%;
  background-color: #858b93;
}
</style>
