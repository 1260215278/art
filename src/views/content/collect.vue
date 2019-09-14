<template>
  <div class="head2">
    <!-- 头部 先写成公共样式 再根据细节微调 -->
    <div class="head3">
      <div class="head">
        <div class="head_img">
          <img :src="cangImg" alt />
          <!-- <h1>藏</h1> -->
        </div>
        <div class="head_right head_right2">
          <p v-html="centent"></p>
        </div>
      </div>
    </div>

    <div class="allbody">
      <!--中间搜索框 -->
      <div class="body">
        <div class="body_title">
          <!-- 时代｜窑口｜种类｜釉色｜应用｜馆藏｜检索 -->
          <p :class="Index==1 ? 'titleActive' : '' " @click="getIndex(1)">
            <router-link class="link" to="/collect/age">时代</router-link>
          </p>
          <p :class="Index==2 ? 'titleActive' : '' " @click="getIndex(2)">
            <router-link class="link" to="/collect/kiln">窑系</router-link>
          </p>
          <p :class="Index==3 ? 'titleActive' : '' " @click="getIndex(3)">
             <router-link class="link" to="/collect/kind">器型</router-link>
          </p>
          <p :class="Index==4 ? 'titleActive' : '' " @click="getIndex(4)">
             <router-link class="link" to="/collect/color">釉彩</router-link>
          </p>
          <p :class="Index==5 ? 'titleActive' : '' " @click="getIndex(5)">
             <router-link class="link" to="/collect/decorate">纹饰</router-link>
          </p>
          <p :class="Index==6 ? 'titleActive' : '' " @click="getIndex(6)">
             <router-link class="link" to="/collect/apply">应用</router-link>
          </p>
          <p :class="Index==7 ? 'titleActive' : '' " style="border:none;" @click="getIndex(7)">
             <router-link class="link" to="/collect/remom">推荐 </router-link>
          </p>
        </div>
        <!-- <div class="head_input">
          <input type="text" class="share" />
          <img src="@/assets/icon.png" alt />
        </div> -->
      </div>

      <!-- 展示List -->
      <div class="ListS">
      <router-view></router-view>
        
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImgUrl from '../utils/ImgUrl'
import {escape2Html  } from '../utils/rictText'
import {getShowProduct,getCangAbout,getProduct} from "../apis/login" 
export default {
  name: "collect",
  data() {
    return {
      Index: 1,
      centent:'',
      cangImg:''
    };
  },
  created(){
    this.getAbout()
  },
  methods: {
    getAbout(){
      getCangAbout().then(res=>{
        console.log(res)
        this.cangImg=ImgUrl+res.thumb
        this.centent=escape2Html(res.content)
      })
    },
    getIndex(res) {
      this.Index = res;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../css/collect.styl';
</style>

<style scoped>
.link {
  text-decoration: none;  
  font-family: FZLTZHK--GBK1-0;
  font-stretch: normal;
}

.router-link-active {
  text-decoration: none;
  color: #8e1218;
}
.head3 {
  margin: 0px;
  height: 840px;
  width: 100%;
  background-color: #858b93;
}
.head {
  height: 840px;
  width: 1221px;
  margin: auto;
  align-items: baseline;
  justify-content: space-between;
}
.head2 {
  margin: 0px;
  width: 100%;
  overflow: hidden;
}
.head_right > p {
  font-family: FZLTXHK--GBK1-0;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #292a2c;
  margin: 0px;
}
.head_img {
  margin-top: 250px;
}
.body {
  margin: 0px;
}
.allbody {
  width: 1221px;
  margin: auto;
}
.ListS{margin: 18px 0px 0px 0px ;}

</style>



