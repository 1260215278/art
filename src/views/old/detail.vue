<template>
  <div class="macor" id="/olds/detail">
    <!-- 宏观 -->
      <div v-html="context" class="title">

    </div>
    <!-- <div class="title">
      <p class="p1">一、裂痕</p>
      <p class="p2 p4">器物细部的微痕进行取证……</p>

      <div class="title_img2">
        <div class="allImg">
          <img src="@/assets/artTxt.png" alt />
          <div class="all_img2">
            <img src="@/assets/logo2.png" alt />
            <p>古瓷局万杯盏中主展藏品</p>
          </div>
        </div>
      </div>

      <p class="p1 p6">二、气泡</p>
      <p
        class="p2 p4"
      >元代青白釉瓷器釉层中的气泡，大小差异较大，疏密不均，这与烧制时升温的速度有关，亦和釉的密度有关系；常出现“众星拱月”的现象；青料主要成分为氧化钴，另含有多种金属矿物质等元素，如铁锰砷锌等，古法青料提纯并不能把金属矿物质完全提炼干净，故在高温熔融是发生流离聚合反应，流离的金属元素因磁力和重力的影响出现聚合、垂流、下沉、析出等现象，部分元青花的青料亦会出现复杂的流彩现象，此种现象在元代和明早期的青花钴料中均比较常见，是当时典型的原料特征。</p>
     
      <div class="title_img2">
        <div class="allImg">
          <img src="@/assets/artTxt.png" alt />
          <div class="all_img2">
            <img src="@/assets/logo2.png" alt />
            <p>古瓷局万杯盏中主展藏品</p>
          </div>
        </div>
      </div>

      <p class="p1 p6">三、附属物</p>
      <p class="p2 p4">附着物及菌丝、胎体析盐。</p>
   
      <div class="title_img2">
        <div class="allImg">
          <img src="@/assets/artTxt.png" alt />
          <div class="all_img2">
            <img src="@/assets/logo2.png" alt />
            <p>古瓷局万杯盏中主展藏品</p>
          </div>
        </div>
      </div>

      <p class="p1 p6">四、斑痕</p>
      <p class="p2 p4">
        析出的金属聚合斑及表层的金属元素，和环境接触，会出现不同程度的氧化腐蚀现象，俗称铁锈斑。
        釉面的磨损：此件器物保存相当好，釉面光滑无明显损伤。
        胎质及其老化与腐蚀：胎釉结合紧密，析出金属斑，窑红及火石红。
      </p>

      <div class="title_img2">
        <div class="allImg">
          <img src="@/assets/artTxt.png" alt />
          <div class="all_img2">
            <img src="@/assets/logo2.png" alt />
            <p>古瓷局万杯盏中主展藏品</p>
          </div>
        </div>
      </div>

      <p class="p1 p6">五、结晶体</p>
      <p class="p2 p4">釉下彩气泡典型的元代青料特征，析出金属结晶斑痕，氧化结晶，如松枝纹。</p>
    
      <div class="title_img2">
        <div class="allImg">
          <img src="@/assets/artTxt.png" alt />
          <div class="all_img2">
            <img src="@/assets/logo2.png" alt />
            <p>古瓷局万杯盏中主展藏品</p>
          </div>
        </div>
      </div>

      <p class="p1 p6">六、结论</p>
      <p class="p2 p4">从微观看，此器物的原料特征、老化及腐蚀痕迹均符合元代器物标准；且保存完好，用料、工艺、质量均高于同时代青花器物；应属于元代御瓷，且为御瓷中的高水平作品。</p>

      <p class="p1">七、微观图片</p>
      <p class="p2 p4">100倍、500倍、1000倍、2000倍下的器物各取证点上的图集。</p>

      <div class="model">
        <div class="body_img8">
          <img src="@/assets/art_2.png" alt />
          <div class="body_img3">
            <p>器物图集</p>
          </div>
        </div>

        <div class="body_img8">
          <img src="@/assets/art_2.png" alt />
          <div class="body_img3">
            <p>器物图集</p>
          </div>
        </div>

        <div class="body_img8">
          <img src="@/assets/art_2.png" alt />
          <div class="body_img3">
            <p>器物图集</p>
          </div>
        </div>

        <div class="body_img8">
          <img src="@/assets/art_2.png" alt />
          <div class="body_img3">
            <p>器物图集</p>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name:"detail",
  data() {
    return {
      context:""
    };
  },methods:{
    getContent(res){
      // console.log("我是子组件内容",res)
      this.context=res
    }
  }
};
</script>
<style scoped>
@import "../../css/allImg.css";
@import "../../css/ALLtext.css";
</style>
<style scoped>
.model{
    display: flex;
    margin-top: 35px;
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
.body_img8 > img {
  margin-top: 15px;
}
.body_img8 {
  z-index: 0;
  width: 21.16%;
  height: 338px;
  background-color: #858b93;
  border-radius: 5px;
  margin: auto;
  position: relative;
  text-align: center;
}   
</style>