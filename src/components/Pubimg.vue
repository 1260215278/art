<template>
  <div class>
    <!-- 图片组件 -->
    <!-- MMP 我透了 -->
    <img class="img" :src="url"    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      // ../static/beizhongr.png
      url:require("@/static/beizhongr.png") 
      
    };
  },
  computed:{
    imgUrl(){
      console.log(this.Url)
      // return require(this.Url)
    }
  },
  props:{
      Url:String
  },
  created(){
      this.getUrl()
  },
  methods:{
    getUrl(){
  
    }
  }
};
</script>
<style scoped>
.img{
  width: 800px;
  height: 800px;
}
</style>