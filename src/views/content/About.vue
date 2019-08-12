<template>
  <div class="About">
    <div class="img">
      <img class="imig1" src="@/assets/logo3.png" alt />
      <div>
        
        <img class="img2" src="@/assets/title.png" alt />
        <p>“古瓷局”作为北京艺通宝科技有限公司旗下创立的古代瓷器艺术品品牌之一，以承载、讲述、展示中国古瓷文化为己任，具有保真、保值、保质(器物保真、司法鉴定、价格评估)的特性， 在古瓷艺术品市场上拥有良好的口碑和品牌形象。</p>
        <p style="margin-top:15px">“古瓷局”对所有藏品均以严谨的态度、通俗易懂的语言、融媒体方式呈现为特点，对古瓷艺术品进行解读、鉴赏、鉴定和赋能，还原古瓷文化的历史文脉，给大众提供一套完整完善的古瓷文化艺术鉴赏体系，满足大众对古瓷文化知识学习的需求。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  }
};
</script>

<style  scoped>
.About {
  height: 1000px;
  widows: 100%; 
  background-color: #858b93;
}
.img{
  display: flex;
  justify-items: center;
  padding-top: 115px;
}
.imig1 {
  width: 196px;
  height: 273px;
  margin: 197px 14% 0px  13%;
}
.img2 {
  width: 398px;
  height: 119px;
  margin-bottom: 65px;
}
p {
  font-family: MicrosoftYaHei;
  width: 960px;
  font-size: 23px;
  font-weight: normal;
  line-height: 50px;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ffffff;
}
</style>