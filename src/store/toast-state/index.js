export default {
  namespaced: true,
  state: {
    showToast: false,
    msg: '',
    // 弹窗icon
    classType: ''
  },
  mutations: {
    changeToastState(state, payload) {
      state.showToast = payload.showToast
      state.msg = payload.msg
      state.classType = payload.classType
    }
  },
  actions: {
    asyncChangeToastState(state, payload) {
      state.commit('changeToastState', {
        showToast: true,
        msg: payload.msg,
        classType:
          payload.classType === 'error'
            ? 'icon-chucuo'
            : payload.classType === 'warning'
            ? 'icon-jingshi'
            : 'icon-zhengque'
      })

      setTimeout(() => {
        state.commit('changeToastState', {
          showToast: false,
          msg: payload.msg,
          classType:
            payload.classType === 'error'
              ? 'icon-chucuo'
              : payload.classType === 'warning'
              ? 'icon-jingshi'
              : 'icon-zhengque'
        })
      }, 1500)
    }
  }
}
