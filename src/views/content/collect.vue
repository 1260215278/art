<template>
  <div class="collect">
    <!-- 头部 先写成公共样式 再根据细节微调 -->
    <div class="head">
      <div class="head_img">
        <img src="@/assets/art1_2.png" alt />
      </div>
      <div class="head_right">
        <img class="head_right_img1" src="@/assets/logo1.png" alt />
        <p>“古瓷局”作为北京艺通宝科技有限公司旗下创立的古代瓷器艺术品品牌之一，以承载、讲述、展示中国古瓷文化为己任，具有保真、保值、保质(器物保真、司法鉴定、价格评估)的特性， 在古瓷艺术品市场上拥有良好的口碑和品牌形象。</p>
        <p>“古瓷局”对所有藏品均以严谨的态度、通俗易懂的语言、融媒体方式呈现为特点，对古瓷艺术品进行解读、鉴赏、鉴定和赋能，还原古瓷文化的历史文脉，给大众提供一套完整完善的古瓷文化艺术鉴赏体系，满足大众对古瓷文化知识学习的需求。</p>
      </div>
    </div>

    <!--中间搜索框 -->
    <div class="body">
      <div class="body_title">
        <!-- 时代｜窑口｜种类｜釉色｜应用｜馆藏｜检索 -->
        <p :class="Index==1 ? 'titleActive' : '' " @click="getIndex(1)">时代</p>
        <p :class="Index==2 ? 'titleActive' : '' " @click="getIndex(2)">窑口</p>
        <p :class="Index==3 ? 'titleActive' : '' " @click="getIndex(3)">种类</p>
        <p :class="Index==4 ? 'titleActive' : '' " @click="getIndex(4)">釉色</p>
        <p :class="Index==5 ? 'titleActive' : '' " @click="getIndex(5)">应用</p>
        <p :class="Index==6 ? 'titleActive' : '' " @click="getIndex(6)">馆藏</p>
        <p :class="Index==7 ? 'titleActive' : '' " style="border:none;" @click="getIndex(7)">检索</p>
      </div>
      <div class="head_input">
        <input type="text" class="share" />
        <img src="@/assets/icon.png" alt />
      </div>
    </div>

    <!-- 展示List -->
    <div class="ListS" style="margin-top:14px;">
      <!-- 陈列区 -->
      <div class="List">
        <p class="List_p2">唐</p>
        <span class="List_span">618年—907年</span>
        <div class="model">
          <div class="list_div">
            <img class="model_img" src="@/assets/art_1 .png" alt />
            <div class="mode-_detail">
              <p>唐 - 邢窑白釉青花花卉纹花浇</p>
              <span>口径:72mm 底径:75mm 高:210mm</span>
            </div>
          </div>
          <div class="list_div">
            <img class="model_img" src="@/assets/art_1 .png" alt />
            <div class="mode-_detail">
              <p>唐 - 邢窑白釉青花花卉纹花浇</p>
              <span>口径:72mm 底径:75mm 高:210mm</span>
            </div>
          </div>
          <div class="list_div">
            <img class="model_img" src="@/assets/art_1 .png" alt />
            <div class="mode-_detail">
              <p>唐 - 邢窑白釉青花花卉纹花浇</p>
              <span>口径:72mm 底径:75mm 高:210mm</span>
            </div>
          </div>
          <div class="list_div">
            <img class="model_img" src="@/assets/art_1 .png" alt />
            <div class="mode-_detail">
              <p>唐 - 邢窑白釉青花花卉纹花浇</p>
              <span>口径:72mm 底径:75mm 高:210mm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "collect",
  data() {
    return {
      Index: 1
    };
  },
  methods: {
    getIndex(res){
      this.Index=res
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../css/collect.styl';
</style>
