<template>
  <div id="app">
    <transition name="fade">
      <Toast v-show="showToast"></Toast>
    </transition>
    <router-view />
  </div>
</template>
<script>
import Toast from '@/components/common/Toast'
import { mapState } from 'vuex'
export default {
  components: {
    Toast
  },
  computed: {
    ...mapState('ToastState', ['showToast'])
  }
}
</script>
<style lang="scss">
html {
  font-size: 1vw;
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    cursor: default;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
}
@media screen and (max-width: 500px) {
  html {
    font-size: 2vw;
  }
}
.fade-enter {
  opacity: 0; /** 插入的新元素最开始是透明的 **/
}
.fade-enter-active {
  transition: opacity 0.5s; /**然后用动画过渡慢慢显示出来**/
}
.fade-leave {
  opacity: 1; /**离开的元素开始是不透明的**/
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s; /**然后离开的时候慢慢变透明**/
}
</style>
