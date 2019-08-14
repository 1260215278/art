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
          <h1>活动介绍：</h1>
          <p class="sub_p1">古瓷局与中兴国安静赏轩古瓷展览拍卖活动</p>
          <p class="sub_p1">古瓷局百年普洱品鉴活动</p>
          <p class="sub_p1">古瓷局北京坊唐宋元明清器物展示活动</p>
          <p class="sub_p1">古瓷局北京坊万杯盏展览活动</p>
          <p class="sub_p1">古瓷局宋盏文化沙龙</p>
          <p class="sub_p1 avtive">古玉文化的策划与文创产业的开发</p>
          <p class="sub_p1">古瓷局关于器物鉴定拍卖的沙龙</p>
          <p class="sub_p1">...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "activity"
};
</script>
<style scoped>
.sub_title > h1 {
  font-family: FZLTXHK--GBK1-0;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #292a2c;
}
.sub_title {
}
.avtive {
  font-family: FZLTXHK--GBK1-0;
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #8e1218;
}
.sub_p1 {
  font-family: FZLTXHK--GBK1-0;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #292a2c;
}
.body1 {
  width: 100%;
  background-color: #f4f4f4;
}
.subject {
  max-width: 62.5%;
  min-width: 1200px;
  margin: auto;
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
