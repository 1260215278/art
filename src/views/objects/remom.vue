<template>
    <div>
        <!-- 陈列区 -->
        <div class="List List_moren" v-if="isClass" >
          <div class="list_All" v-for="(item,index) in allFrom" :key="index">
        <div class="list_head" >
              <p class="List_p2">{{item.title}}</p>
          <div class="head_img">
              <img src="@/assets/juzen.png"  v-if="index == 0"  @click="setClass(1)" alt="">
              <img src="@/assets/zhenlie.png"  v-if="index == 0" @click="setClass(2)" style="margin-left:13px;" alt="">
          </div>
        </div>
          <span class="List_span">{{item.desc}}</span> <span class="list_span2" style="top:70px;">

              <img src="" alt="">
              </span>
          <div class="model">
            <div class="list_div" v-for="(ite ,inde) in item.list " :key="inde" @click="getto(ite)">
              <img class="model_img" :src="retImg(ite.thumb)" alt />
              <div class="mode-_detail">
                <p>{{ite.title}}</p>
                <span>口径:{{ite.koujing}}mm 底径:{{ite.dijing}}mm 高:{{ite.gaodu}}mm</span>
              </div>
            </div>
          </div>
          </div>
        </div>
        <!-- 样式二 -->

      <div class="List List_moren" v-if="!isClass">
            <div class="list_All" v-for="(item,index) in allFrom" :key="index">
      <div class="list_head">
        <p class="List_p2">{{item.title}}</p>
        <div class="head_img">
          <img src="@/assets/juzhen1.png" v-if="index == 0" @click="setClass(1)" alt />
          <img src="@/assets/zhenlie2.png" v-if="index == 0" @click="setClass(1)" style="margin-left:13px;" alt />
        </div>
      </div>
      <span class="List_span">所处时期-{{item.title}}</span>
      <!-- width:80%; -->
      <span class="list_span2" style="top:70px; " >
        <img src="" alt />
      </span>
      <div class="model2">

        <div class="list_div2" v-for="(ite ,inde) in item.list " :key="inde" @click="getto(ite)"> 
          <img class="div2_img" :src="retImg(ite.thumb)" alt />
          <p class="div2_p1">{{ite.niandai}}</p>
          <p class="div2_p2">{{ite.title}}</p>
          <p class="div2_p3">口径:{{ite.koujing}}mm 底径:{{ite.dijing}}mm 高:{{ite.gaodu}}mm</p>
        </div>
      </div>
     </div>
    </div>
    </div>
</template>
<script>

import ImgUrl from '../utils/ImgUrl'
import {escape2Html  } from '../utils/rictText'
import {getProduct} from "../apis/login" 
import { get } from 'http';
export default {
  data(){
    return{
      isClass:true,
      allFrom:[]
    }
  }   ,
  created(){
      this.getContent()
  },methods:{
      getto(res){
      this.$router.push({path:"/olds",query:{
        id:res.p_id
      }})
    },
     retImg(res) {
      if (!res) return;
      return ImgUrl + res;
    },
    setClass(){
      this.isClass=!this.isClass
    },
    getContent(){
      getProduct({cid:7}).then(res=>{
        this.allFrom=res
      })
    }
  }
}
</script>>
<style lang="stylus" scoped>
@import '../../css/collect.styl';
</style>

<style>
.list_head{
    height: 57px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    }
</style>