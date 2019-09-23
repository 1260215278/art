<template>
  <div class="login">
    <img src="@/assets/login_art.png" alt />
    <div class="centent">
      <div class="title">
        <p class="h1">藝通寶</p>
        <p class="h4">中国古瓷文化艺术展示中心</p>
        <p class="p">古瓷文化研究｜古瓷艺术展示｜古瓷艺术鉴赏｜古瓷艺术鉴定｜古瓷艺术品知识服务</p>
      </div>

      <div class="login_login" v-if="islogin">
        <p>用户登录</p>
        <input type="text" style="display:none" />
        <input placeholder="手机/用户名" v-model="from.phone" autocomplete="off" />
        <input type="password" style="display:none" />
        <input
          placeholder="密码"
          type="password"
          v-model="from.password"
          autocomplete="off"
          style=" margin-top: 15px;"
        />
        <button @click="passlogin">登录</button>
        <div class="sign">
          <p @click="forgetPassword(1)">忘记密码</p>
          <p @click="signIn()">免费注册</p>
        </div>
      </div>

      <div class="login_login" v-if="!islogin">
        <p>{{title}}</p>
        <input type="text" style="display:none" />

        <input placeholder="手机/用户名" v-model="NoteFrom.phone" autocomplete="off" />
        <div class="codeDiv" style="margin-top: 15px;">
          <input placeholder="验证码" v-model="Notecode" maxlength="4" autocomplete="off" />
          <p @click="getCode()">{{nextTime}}</p>
        </div>
        <input type="password" style="display:none" />
        <input
          placeholder="密码"
          type="password"
          v-model="from.password"
          autocomplete="off"
          style="margin-top: 15px;"
        />
        <button @click="NotesignIn" style="margin-top:25px;">{{buttonText}}</button>
        <div class="sign">
          <p @click="signIn(2)">账号密码登录</p>
          <p @click="signIn()"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login, getNote, zhuce, getZhaohui } from "./apis/login";
import request from "../request";
import { clearInterval, setInterval } from "timers";
export default {
  data() {
    return {
      title: "用户注册",
      buttonText: "注册",

      islogin: true,
      NoteFrom: {
        phone: ""
      },
      nextTime: "获取验证码",
      myStieout: null,
      isgetNode: true,
      code: "",
      Notecode: "",
      from: {
        phone: "",
        password: ""
      }
    };
  },
  methods: {
    passlogin() {
      //账号密码登录
      if (!this.from.phone || !this.from.password) {
        this.$message({
          message: '请输入账号密码',
          type: 'warning'
        });
        return;
      }
         if (!/^1[3456789]\d{9}$/.test(this.from.phone)) {
       this.$message({
          message: '手机号码错误，请重新填写',
          type: 'warning'
        });
        return false;
      }

      login(this.from).then(res => {
        console.log(res);
        if (res.num == 1) {
          // TODO
            this.$message({
          message: '登录成功',
          type: 'success'
        });
          this.gotoHome();
        }
      });
    },
    NotesignIn() {
      //注册用户 这里会验证前端验证码 虽然有点奇怪
      //TODO 在这里区分是不是手机号码注册
      if (this.code == this.Notecode) {
        if (this.from.password) {
          this.from.phone = this.NoteFrom.phone;

          if (this.title == "找回密码") {
            getZhaohui(this.from).then(res => {
              console.log(res);
              if (res.num == 1) {
                // TODO
                    this.$message({
          message: '登录成功',
          type: 'success'
        });
                this.gotoHome();
              } else if (res.num == 0) {
                this.$message({
          message: '号码注册失败',
          type: 'warning'
        });
              }
            });
          } else {
            zhuce(this.from).then(res => {
              console.log(res);
              if (res.num == 1) {
                // TODO
                     this.$message({
          message: '登录成功',
          type: 'success'
        });
                this.gotoHome();
              } else if (res.num == 0) {
                this.$message({
          message: '号码注册失败',
          type: 'warning'
        });
              }
            });
          }
        }
      } else {
      }
    },
    getCode() {
      //获取验证码
      var _this = this;
      if (!/^1[3456789]\d{9}$/.test(_this.NoteFrom.phone)) {
       this.$message({
          message: '手机号码错误，请重新填写',
          type: 'warning'
        });
        return false;
      }
      if (!_this.isgetNode) return;
      getNote(_this.NoteFrom).then(res => {
        console.log(res);
        if (res.zt == 0) {
          _this.code = res.code;
          //验证码发送成功
          _this.isgetNode = false;
          clearInterval(_this.myStieout);
          let next = 60;
          _this.myStieout = setInterval(() => {
            next--;
            _this.nextTime = "" + next + "秒后再获取";
            if (next == 0) {
              _this.nextTime = "获取验证码";
              _this.isgetNode = true;
              clearInterval(_this.myStieout);
              return;
            }
          }, 1000);
        } else {
        }
      });
    },
    login() {
      //搭建项目
    },
    forgetPassword(res) {
      //忘记密码
      this.islogin = !this.islogin;
      this.isfind = true;
      this.title = "找回密码";
      this.buttonText = "设置";
    },
    signIn() {
      //注册
      this.islogin = !this.islogin;
      this.isfind = false;
      this.title = "注册用户";
      this.buttonText = "注册";
    },
    gotoHome() {
      //进入首页
      this.$router.push({
        path: "/loyout"
      });
    }
  }
};
</script>
<style scoped>
.codeDiv {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 50px;
  width: 277px;
  margin: auto;
}
.codeDiv > p {
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #282828;
  cursor: pointer;
}
input[readonly] {
  background-color: #fff !important;
}
.codeDiv > input {
  height: 39px;
  border-radius: 20px;
  border: solid 1px #cdcccd;
  background-color: #eeeeee;
  display: block;
  outline: none;
  box-shadow: none;
  text-align: center;
}
.sign {
  width: 252px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-top: 8px;
}
.sign > p {
  cursor: pointer;
}

input::-webkit-input-placeholder {
  text-align: center;
}
.login_login > button {
  width: 277px;
  height: 45px;
  background-image: linear-gradient(#8e1218, #8e1218),
    linear-gradient(#858b93, #858b93);
  background-blend-mode: normal, normal;
  border-radius: 20px;
  margin-top: 66px;
  color: white;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
}
.login_login > input {
  width: 277px;
  height: 39px;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  border: solid 1px #cdcccd;
  background-color: #eeeeee;
  display: block;
  margin: auto;
  outline: none;
  box-shadow: none;
  text-align: center;
}
.login_login > p {
  font-family: FZLTZHK--GBK1-0;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #282828;
  margin-top: 26px;
  margin-bottom: 27px;
}
.login {
  width: 100%;
  height: 100%;
  min-width: 1200px;
  position: relative;
  background-color: #858b93;
  overflow: hidden;
}
.login > img {
  position: absolute;
  top: 163px;
  left: 20.36%;
  width: 436px;
  height: 726px;
}
/* TODO */
.centent {
  height: 352px;
  margin-top: 20%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center */
}
.title {
  margin-left: 12.5%;
  text-align: center;
  margin-top: 26px;
}
.title > .h1 {
  font-family: FZLTTHFW--GB1-0;
  font-size: 76px;
  font-weight: 800;
  font-stretch: normal;
  /* line-height: 360px; */
  letter-spacing: 0px;
  z-index: 9;
  color: white;
}
.title > .h4 {
  font-family: FZLTZHK--GBK1-0;
  font-size: 60px;
  font-weight: normal;
  font-stretch: normal;
  /* line-height: 360px; */
  margin-top: 15px;
  z-index: 9;
  letter-spacing: 0px;
  color: white;
}
.title > .p {
  font-family: FZLTXHK--GBK1-0;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  /* line-height: 360px; */
  margin-top: 23px;
  z-index: 9;
  letter-spacing: 0px;
  color: white;
}
.login_login {
  width: 373px;
  height: 352px;
  background-color: #eeeeee;
  border-radius: 20px;
  margin-right: 12%;
  text-align: center;
}
a,
button,
input {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  -webkit-user-modify: read-write-plaintext-only;
  outline: none;
  box-shadow: none;
}
</style>
