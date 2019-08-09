<template>
  <div class="loyout">
    <div class="head">
      <div class="head_1">
        <p>藝通寶</p>
      </div>
      <div class="head_2">
        <p>首页</p>
        <p>古瓷局</p>
        <p>藏品</p>
        <p>活动</p>
        <p>关于</p>
      </div>
       <input type="text" />
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>

.head {
  width: 1920px;
  height: 107px;
  background-color: #858b93;
  display: flex;
  align-items: center;
}
.head_1{
font-family: FZLTTHFW--GB1-0;
	font-size: 26px;
	font-weight: 800;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #0f0f0f;
  margin-left: 21.56%;
  margin-right: 19.79%;
}
.head_2{
  display: flex;
  align-items: center;
	font-family: FZLTXHK--GBK1-0;
	font-size: 24px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
	color: #282828;
}
.head_2 > p{
  margin-right: 34px;
}

</style>
