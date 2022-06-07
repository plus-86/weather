<template>
  <div class="toast">
    <i class="icon iconfont" :class="classType"></i>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Toast',
  computed: {
    ...mapState('ToastState', ['msg', 'classType'])
  }
}
</script>

<style scoped lang="scss">
.toast {
  //置顶居中
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);

  background: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 0 0 10px #fff; // 阴影
  i {
    margin-right: 10px;
  }

  .icon-jingshi {
    color: orange;
  }
  .icon-chucuo {
    color: red;
  }
  .icon-zhengque {
    color: green;
  }
}
</style>
