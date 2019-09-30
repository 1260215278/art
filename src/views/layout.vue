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

      <div class="head_input" >
        <input type="text" class="share" v-model="from.keys" />
          <el-popover
            placement="bottom"
            width="600"
            trigger="click">
            <el-table :data="gridData" @row-click="clickTable">
              <el-table-column   label="头像" >
                <template slot-scope="scope">
                  <img class="tableImg" :src="retImg(scope)" alt="">
                </template>
              </el-table-column>
              <el-table-column  property="title" label="名字"></el-table-column>
              <!-- <el-table-column width="300" property="address" label="地址"></el-table-column> -->
            </el-table>
              <img @click="getShare" class="share_img" slot="reference" src="@/assets/icon.png" alt />
        </el-popover>
      </div>

      </div>
    </div>
    <router-view :key="indeDate"></router-view>
  </div>
</template>
<script>
import  ImgUrl from "./utils/ImgUrl"
import { getQuery } from  './apis/login'
export default {
  data() {
    return {
      indeDate:1261815484,
       gridData: [],
      Iindex: 1,
      from:{
        keys:""
      }
    };
  },
  methods: {
        getto(res){
          this.indeDate=Date.parse(new Date());
      this.$router.push({path:"/olds",query:{
        id:res.p_id
      }})
    },
    clickTable(row, column, event){
      this.getto(row)
    },
     retImg(res){
      return ImgUrl+res.row.thumb
    },
    getShare() {
      getQuery(this.from).then(res=>{
        this.gridData=res
      })
    }
  }
};
</script>


<style scoped>
.tableImg{
  height: 50px;
}
.loyout2 {
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
.share_img {
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
  min-width: 1150px;
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
