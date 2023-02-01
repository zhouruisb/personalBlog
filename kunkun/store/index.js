
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
window.backMusic = new Audio()
window.backMusic.src = require('../assets/mp3/bjyy.mp3')
console.log(window.backMusic);
window.backMusic.loop = true
window.backMusic.load()
window.backMusic.currentTime = 127.2 // 背景音乐默认定位到舒缓片段
export default new Vuex.Store({
  state: {
    setting: {
      isPlay: false,
      showBulletChat: true
    }
  },
  mutations: {
    toggleBulletChat(state) {
      state.setting.showBulletChat = !state.setting.showBulletChat
    },
    tooglePlay(state, status) {
      if (status) {
        window.backMusic.play()
      } else {
        window.backMusic.pause()
      }
      state.setting.isPlay = status
    },
    playAudio(state, src) {
      if (state.setting.isPlay) {
        const audio = new Audio()
        audio.src = src
        audio.load()
        audio.volume = .5
        audio.play()
      }
    },
    // createBackMusic (state, src) {
    //   state.setting.backMusic = src
    //   state.setting.backMusic.load()
    // }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    }
  }
})