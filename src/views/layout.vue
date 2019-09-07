<template>
  <div :class="Iindex==5 ? 'loyout2' : 'loyout'">
    <div class="allHed">

    <div class="head">
      <div class="head_1">
        <p>藝通寶</p>
      </div>
      <div class="head_2">
        <p>
          <router-link class="link" to="/home">首页</router-link>
        </p>
        <p>
          <router-link class="link" to="/olds">古瓷局</router-link>
        </p>
        <p>
          <router-link class="link" to="/collect">藏品</router-link>
        </p>
        <p>
          <router-link class="link" to="/activity">活动</router-link>
        </p>
        <p>
          <router-link class="link" to="/about">关于我们</router-link>
        </p>
      </div>
      <div class="head_input">
        <input type="text" class="share" />
        <img @click="getShare" src="@/assets/icon.png" alt />
      </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Iindex: 1
    };
  },
  methods: {
    getShare() {
      console.log("1");
    }
  }
};
</script>


<style scoped>
.loyout2 {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.loyout {
  background-color: #f4f4f4;
  overflow: hidden;
}
.link {
  font-family: FZLTXHK--GBK1-0;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #282828;
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
  font-size: 24px;
  font-weight: 800;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #8e1218;
  border-bottom: #8e1218 3px solid;
}
.head_input {
  position: relative;
}
.head_input > img {
  position: absolute;
  right: 20px;
  top: 6px;
  width: 29px;
  height: 29px;
}
.share {
  border: none;
  width: 253px;
  height: 39px;
  background-color: #eeeeee;
  border-radius: 20px;
}
.allHed{
  width: 100%;
  height: 107px;
  background-color: #858b93;
  display: flex;
  align-items: center;
}
.head {
  width: 1150px;
  height: 107px;
  background-color: #858b93;
  display: flex;
  align-items: center;
  justify-content: space-between;
   margin: auto;
   
}
.head_1 {
  font-family: FZLTTHFW--GB1-0;
  font-size: 26px;
  font-weight: 800;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #0f0f0f;
  margin-right: 19.79%;
}
.head_2 {
  display: flex;
  align-items: center;
  font-family: FZLTXHK--GBK1-0;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #282828;
}
.head_2 > p {
  margin-right: 34px;
  text-decoration: none;
}
</style>
