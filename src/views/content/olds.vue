<template>
  <div class="olds">
    <!-- 头部图片 -->
    <div class="body">
      <img class="body_img" src="@/assets/logo2.png" alt />
      <div class="head_img">
        <img src="@/assets/logo4.png" alt />
      </div>
      <div class="head_title">
        <div class="head_p1">
          <p class="p1">元-青花折枝莲花凤纹凤首扁壶</p>
          <p class="p2">时期：元代</p>
          <p class="p3">口径：41mm 底部：44mm*86mm 高：200mm</p>
        </div>
        <div class="head_p2">
          <div class="head_p3">
            <p class="p4">器型：</p>
            <p class="p5">立器，花浇</p>
          </div>
          <div class="head_p3">
            <p class="p4">器型：</p>
            <p class="p5">立器，花浇</p>
          </div>
          <div class="head_p3">
            <p class="p4">胎：</p>
            <p class="p5">高岭土胎质</p>
          </div>
          <div class="head_p3">
            <p class="p4">成型工艺：</p>
            <p class="p5">泥条盘筑、合模</p>
          </div>
          <div class="head_p3">
            <p class="p4">造型工艺：</p>
            <p class="p5">捏塑</p>
          </div>
          <div class="head_p3">
            <p class="p4">彩：</p>
            <p class="p5">釉下青花（高铁低锰钴料）</p>
          </div>
          <div class="head_p3">
            <p class="p4">烧造：</p>
            <p class="p5">高温一次烧造</p>
          </div>
          <div class="head_p3">
            <p class="p4">用途：</p>
            <p class="p5">赏器</p>
          </div>
        </div>
        <div class="zhanshi">3D展示</div>

        <div class="body_img2">
          <img src="@/assets/art_2.png" alt />
          <div class="body_img3">
            <p>器物图集</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 中部 -->
    <div class="apprec">
      <p class="apprec_p1">器物描述：</p>
      <p
        class="apprec_p2"
      >凤造型扁壶，“凤首”做成壶嘴、“凤尾”翘起成壶把手；原生高岭土胎质，细腻坚硬，胎相呈灰白色，略有杂质，涩胎处釉窑红；制模泥条盘筑、合模成型；器型规整，修胎细致，壶嘴及把手采用捏塑造型，设计巧妙，造型生动传神；绘画所用青料属典型元代钴料，纹饰细致，颜色均匀，发色略显青灰，光下泛紫光；施青白釉，器身内部亦有施釉；底足露胎，略有釉斑；</p>
      <p class="apprec_p1">器物鉴赏：</p>
      <img class="apprec_img" src="@/assets/video.png" alt />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "olds"
};
</script>
<style scoped>
.apprec_img{
  width: 1099px;
	height: 621px;
}
.apprec_p2 {
  font-family: FZLTXHK--GBK1-0;
  font-size: 20px;
  font-weight: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #292a2c;
  text-indent: 2em;
  margin-bottom: 94px;
}
.apprec_p1 {
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
.zhanshi {
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
.head_p3 {
  display: flex;
  align-items: center;
}
.head_p2 {
  margin-top: 34px;
}
.olds {
  overflow: hidden;
  max-width: 62.5%;
  min-width: 1200px;
  margin: auto;
  height: 8989px;
}
.head_img {
  width: 570px;
  margin-right: 30px;
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
.head_p1 {
  padding-bottom: 33px;
  border-bottom: solid 1px #858b93;
}
.p1 {
  font-family: FZLTZHK--GBK1-0;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;

  color: #292a2c;
}
.p2 {
  font-family: FZLTXHK--GBK1-0;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  line-height: 36px;
  color: #8e1218;
}
.p3 {
  font-family: FZLTXHK--GBK1-0;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0px;
  line-height: 36px;
  color: #292a2c;
}
.p4 {
  font-family: FZLTZHK--GBK1-0;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #292a2c;
}
.p5 {
  font-family: FZLTXHK--GBK1-0;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #292a2c;
}
</style>
