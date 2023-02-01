
<template>
  <div class="menu-wrap">
    <!-- <div class="gz-wrap">
      <img src="img/gz.jpg" alt="" />
      <p>公众号：百里青山</p>
    </div> -->
    <div class="title">
      <!-- <img :src="require('@/assets/title.png')" alt="" /> -->
      打坤兽
    </div>
    <div class="menu-box">
      <div
        class="menu-item"
        v-for="(item, index) in menuList"
        :key="index"
        @mouseover="$store.commit('playAudio', hoverMusic)"
        @click="$store.commit('playAudio', clickMusic), item.clickHandle()"
        v-show="item.show()"
      >
        {{ item.name }}
      </div>
    </div>
    <transition name="fadeUp">
      <div class="dialog" v-show="dialog === 'support'">
        <p>
          感谢您的支持，本游戏作者是抖音“猫猫花狗狗”，如果您愿意对作者表示支持，请多多给我点赞哟，感谢您的支持，作者在这里提前给您拜年了，祝您身体健康，阖家欢乐！
        </p>
        <div class="dialog-footer">
          <div
            class="footer-btn close-btn"
            @click="(dialog = false), $store.commit('playAudio', clickMusic)"
          >
            关闭
          </div>
        </div>
      </div>
    </transition>
    <!-- <transition name="fadeUp">
      <div class="dialog" v-show="dialog === 'comment'">
        <p>
          小游戏简陋，未接入接口，如果您想您的祝福出现在弹幕中，请您点击链接(<a
            href="https://juejin.cn/post/7051464086722183205/"
            target="_blank"
            >https://juejin.cn/post/7051464086722183205/</a
          >)前往活动文章，把您的称呼及祝福写在评论区即可！
        </p>
        <div class="dialog-footer">
          <div
            class="footer-btn close-btn"
            @click="(dialog = false), $store.commit('playAudio', clickMusic)"
          >
            关闭
          </div>
        </div>
      </div>
    </transition> -->
    <transition name="fadeUp">
      <div class="dialog" v-show="dialog === 'sound'">
        <p>
          网站配乐较为喜庆，请确认您的耳机已经插入，音量已经调好，否则容易造成社死！
        </p>
        <div class="dialog-footer">
          <div class="footer-btn" @click="dialog = false">取消</div>
          <div
            class="footer-btn close-btn"
            @click="
              (dialog = false),
                $store.commit('tooglePlay', true),
                $store.commit('playAudio', clickMusic)
            "
          >
            确认
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      menuList: [
        {
          name: "开始游戏",
          clickHandle: () => {
            this.gameBegin();
          },
          show: () => true,
        },
        {
          name: "打开声音(强烈建议)",
          clickHandle: () => {
            this.$store.commit("tooglePlay", true);
          },
          show: () => !this.$store.state.setting.isPlay,
        },
        {
          name: "关闭声音",
          clickHandle: () => {
            this.$store.commit("tooglePlay", false);
          },
          show: () => this.$store.state.setting.isPlay,
        },
        // {
        //   name: "打开弹幕",
        //   clickHandle: () => {
        //     this.$store.commit("toggleBulletChat");
        //   },
        //   show: () => !this.$store.state.setting.showBulletChat,
        // },
        // {
        //   name: "关闭弹幕",
        //   clickHandle: () => {
        //     this.$store.commit("toggleBulletChat");
        //   },
        //   show: () => this.$store.state.setting.showBulletChat,
        // },
        // {
        //   name: "发送弹幕",
        //   clickHandle: () => {
        //     this.dialog = "comment";
        //   },
        //   show: () => true,
        // },
        {
          name: "支持作者",
          clickHandle: () => {
            this.dialog = "support";
          },
          show: () => true,
        },
      ],
      dialog: false,
      sound: false,
      hoverMusic: require("../assets/mp3/hover.wav"),
      clickMusic: require("../assets/mp3/click.wav"),
    };
  },
  methods: {
    gameBegin() {
      this.$emit("gameBegin");
    },
  },
};
</script>
<style scoped>
.gz-wrap {
  position: absolute;
  right: 20px;
  bottom: 20px;
  text-align: center;
}
.gz-wrap img {
  width: 150px;
  height: 150px;
}
.gz-wrap p {
  font-size: 14px;
  color: #fff;
  margin-top: 10px;
}
.menu-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
}
.title {
  font-size: 50px;
  font-weight: bold;
  color: #928de7;
  text-align: center;
  letter-spacing: 30px;
  margin-top: 20vh;
}
.menu-box {
  position: absolute;
  width: 150px;
  top: 55%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.menu-item {
  color: #fff;
  text-align: center;
  background-image: linear-gradient(to right bottom, #928de7, #9dd8e6);
  box-shadow: 0 5px 5px 1px rgb(255 237 26 / 20%);
  border-radius: 10px;
  font-size: 16px;
  line-height: 60px;
  cursor: pointer;
  opacity: 0.8;
  margin-bottom: 20px;
  transition: all 0.2s;
}
.menu-item:hover {
  opacity: 1;
  transform: scale(1.2);
}
.dialog {
  width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 20px;
  background: #9dd8e6;
  color: #928de7;
  padding: 20px;
  text-indent: 40px;
  border-radius: 20px;
  word-break: break-all;
}
.dialog a {
  color: #ffdf83;
}
.dialog p {
  user-select: text;
}
.dialog-footer {
  display: flex;
  justify-content: center;
  margin: 40px auto 20px;
  /* align-items: center; */
}
.footer-btn {
  width: 200px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
.close-btn {
  text-indent: 0px;
  text-align: center;
  color: #9dd8e6;
  background: #928de7;
}
.footer-btn:hover {
  transform: scale(1.2);
}

.fadeUp-enter-active,
.fadeUp-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fadeUp-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) scale(0.8);
}
.fadeUp-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) scale(0.8);
}
</style>