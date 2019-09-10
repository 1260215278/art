<template>
  <div class="About">
    <div class="img">
      <img class="imig1" src="@/assets/logo3.png" alt />
      <div>
        <img class="img2" src="@/assets/title.png" alt />
            <p v-html="centent"></p>      
      </div>
    </div>
  </div>
</template>

<script>
import {escape2Html ,removeHTMLTag } from '../utils/rictText'
import {getAbout} from "../apis/login" 
export default {
  name: "About",
  data() {
    return {
      centent:""
    };
  },
  created(){
    getAbout().then(res=>{
      this.centent=escape2Html(res.content)
    })
  }
};
</script>

<style  scoped>
.About {
  height: 1000px;
  widows: 100%;
  background-color: #858b93;
}
.img {
  display: flex;
  justify-items: center;
  padding-top: 115px;
  width: 75%;
  margin: auto;
}
.imig1 {
  /* width: 196px; */
  height: 273px;
  margin: 197px 14% 0px 0%;
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