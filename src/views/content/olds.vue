<template>
  <div class="olds">
    <!-- 头部图片 -->
    <div class="body">
      <img class="body_img" src="@/assets/logo2.png" alt />
      <div class="head_img">
        <!-- <img :src="retImg(allFrom.thumb)" alt /> -->

         <el-image 
              style="width: 570px;   cursor: pointer;"
             :src="retImg(allFrom.thumb)"
              :preview-src-list="imgList">
            </el-image>

      </div>
      <div class="head_title">
        <div class="head_p1A">
          <p class="p1A">{{allFrom.title}}</p>
          <p class="p2A">时期：{{allFrom.shiqi}}</p>
          <!-- *{{allFrom.kuandu}}mm -->
          <p
            class="p3A"
          >口径：{{allFrom.koujing}}mm 底径：{{allFrom.dijing}}mm 高：{{allFrom.gaodu}}mm</p>
        </div>
        <div class="head_p2A">
          <div class="head_p3A">
            <p class="p4A">器型：</p>
            <p class="p5A">{{allFrom.qixings}}</p>
          </div>
          <div class="head_p3A">
            <p class="p4A">重量：</p>
            <p class="p5A">{{allFrom.zhongliang}}</p>
          </div>
          <div class="head_p3A">
            <p class="p4A">胎：</p>
            <p class="p5A">{{allFrom.tai}}</p>
          </div>
          <div class="head_p3A">
            <p class="p4A">成型工艺：</p>
            <p class="p5A">{{allFrom.cxgy}}</p>
          </div>
          <div class="head_p3A">
            <p class="p4A">造型工艺：</p>
            <p class="p5A">{{allFrom.zzgy}}</p>
          </div>
          <div class="head_p3A">
            <p class="p4A">彩：</p>
            <p class="p5A">{{allFrom.you}}</p>
          </div>
          <div class="head_p3A">
            <p class="p4A">烧造：</p>
            <p class="p5A">{{allFrom.shaozao}}</p>
          </div>
          <div class="head_p3A">
            <p class="p4A">用途：</p>
            <p class="p5A">{{allFrom.yongtu}}</p>
          </div>
        </div>
        <div class="zhanshi">
          <span  @click="gettoaall" >3D展示</span>
        </div>

        <div class="body_img2" >
          <!-- <img  :src="retImgS(allFrom.images)" alt /> -->
            <el-image 
               @click="seeImgS()"
              style="width: 189px; height: 229px;margin-top:10px;  cursor: pointer;"
              :src="retImgS(allFrom.images)"
              :preview-src-list="srcList">
            </el-image>
          <div class="body_img3">
            <p>器物图集</p>
          </div>
        </div>
      </div>
    </div>

  
    <!-- 中部 -->
    <div class="apprec">
      <p class="apprec_p1A">器物描述：</p>
      <p class="apprec_p2A" v-html="retHTML(allFrom.desc)"></p>
      <p class="apprec_p1A">器物鉴赏：</p>
      <video class="apprec_img" :src="retImg(allFrom.video)" controls></video>
      <div class="router">
        <div>
          <router-link class="link" to="/olds/rest">基本信息</router-link>
        </div>
        <div>
          <router-link class="link" to="/olds/macroscopic">宏观描述</router-link>
        </div>
        <div>
          <router-link class="link" to="/olds/detail">微观描述</router-link>
        </div>
        <div>
          <router-link class="link" to="/olds/culture">文化历史</router-link>
        </div>
        <div>
          <router-link class="link" to="/olds/purpose">器物应用</router-link>
        </div>
        <div style="border:none;">
          <router-link class="link" to="/olds/auction">馆藏拍卖</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import  myImg from '@/assets/art_2.png'
import ImgUrl from "../utils/ImgUrl";
import { escape2Html, removeHTMLTag } from "../utils/rictText";
import { getShowProduct } from "../apis/login";
export default {
  name: "olds",
  data() {
    return {
      imgList:[],
      srcList:[

      ],
      allFrom: {},
      getFrom: {
        p_id: "",
        images:[]
      }
    };
  },
  created() {
    this.getFrom.p_id = this.$route.query.id || 1;
    this.getAbout();
  },
  mounted() {
    
   
  },
  updated() {
    let uid = this.$children[this.$children.length - 1].$el.id;
    for (let i = 0; i < this.$children.length; i++) {
      if (this.$children[i].$el.id == uid) {
      }
    }
    switch (uid) {
      case this.$children[0].to:
        this.$children[8].getContent(escape2Html(this.allFrom.content));
        break;
      case this.$children[1].to:
        this.$children[8].getContent(escape2Html(this.allFrom.hgxx));
        break;
      case this.$children[2].to:
        this.$children[8].getContent(escape2Html(this.allFrom.wgxx));
        break;
      case this.$children[3].to:
        this.$children[8].getContent(escape2Html(this.allFrom.lswh));
        break;
      case this.$children[4].to:
        this.$children[8].getContent(escape2Html(this.allFrom.qwyy));
        break;
      case this.$children[5].to:
        this.$children[8].getContent(escape2Html(this.allFrom.addtime));
        break;
      default:
        break;
    }
  },
  methods: {
    seeImgS(){
      if (this.srcList.length == 0) {
           this.$message({
          message: '没有多余的图片，此图片为默认图片',
          type: 'warning'
        });
      }
    },
    gettoaall() {
      //跳转
      window.location.href = this.allFrom.sandi;
    },
    retHTML(res) {
      if (!res) return;
      return escape2Html(res);
    },
    retImgS(res){
        if (!res) return myImg;
         return ImgUrl + res[0];
    },
    retImg(res) {

      if (!res) return  ;
      return ImgUrl + res;
    },
    getAbout() {
      getShowProduct(this.getFrom).then(res => {
        this.allFrom = res;
        if (!res.images) return ;
        for (let index = 0; index < res.images.length; index++) {
              this.srcList.push( ImgUrl+res.images[index])
        }
      });
    }
  }
};
</script>
<style scoped>
.router {
  display: flex;
  margin-top: 43px;
}
.router > div {
  flex: 1;
  text-align: center;
  border-right: 4px solid #292a2c;
}
.link {
  text-decoration: none;
  font-family: FZLTZHK--GBK1-0;
  font-size: 36px;
  font-weight: 800;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #292a2c;
}

.router-link-active {
  text-decoration: none;

  color: #8e1218;
}
.apprec_img {
  width: 1099px;
  height: 621px;
}
.apprec_p2A {
  font-family: FZLTXHK--GBK1-0;
  font-size: 20px;
  font-weight: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #292a2c;
  text-indent: 2em;
  margin-bottom: 84px;
}
.apprec_p1A {
  font-family: FZLTXHK--GBK1-0;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #292a2c;
  margin-bottom: 27px;
  text-indent: 1em;
}
.apprec {
  width: 100%;
  height: 1144px;
  background-color: #ffffff;
  margin-top: 93px;
  padding: 45px 50px 0px 50px;
  box-sizing: border-box;
}
.body_img3 > p {
  font-family: FZLTXHK--GBK1-0;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 87px;
  letter-spacing: 0px;
  color: #292a2c;
}
.body_img3 {
  width: 100%;
  position: absolute;
  bottom: 0px;
  height: 87px;
  background-color: #bfbfbf;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.body_img2 > img {
  margin-top: 15px;
  cursor: pointer;
}
.body_img2 {
  z-index: 0;
  width: 21.16%;
  height: 338px;
  background-color: #858b93;
  border-radius: 5px;
  position: absolute;
  margin: auto;
  text-align: center;
  right: 50px;
  bottom: -180px;
}
.zhanshi > a {
  text-decoration: none;
  out-line: none;
  color: white;
}
.zhanshi {
  cursor:pointer;
  width: 105px;
  height: 40px;
  background-color: #8e1218;
  border-radius: 20px;
  margin-top: 32px;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
}
.head_p3A {
  display: flex;
  align-items: center;
}
.head_p2A {
  margin-bottom: 50px;
}
.olds {
  overflow: hidden;
  max-width: 62.5%;
  min-width: 1200px;
  margin: auto;
}
.head_img >img{
    width: 570px;
    height: auto;
}
.head_img {
  width: 570px;
  margin-right: 120px;
  display: flex;
  align-items: center;

}
.body {
  display: flex;
  position: relative;
  margin-top: 245px;
}
.body_img {
  position: absolute;
  right: 50px;
  top: -157px;
}
.head_p1A {
  padding-bottom: 33px;
  border-bottom: solid 1px #858b93;
}
.p1A {
  font-family: FZLTZHK--GBK1-0;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;

  color: #292a2c;
}
.p2A {
  font-family: FZLTXHK--GBK1-0;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  line-height: 36px;
  color: #8e1218;
}
.p3A {
  font-family: FZLTXHK--GBK1-0;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  line-height: 36px;
  color: #292a2c;
}
.p4A {
  font-family: FZLTZHK--GBK1-0;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #292a2c;
}
.p5A {
  font-family: FZLTXHK--GBK1-0;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #292a2c;
}
</style>
