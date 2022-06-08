import axios from 'axios'
import store from '@/store/index.js'

const instance = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
  timeout: '10000'
})

instance.interceptors.request.use(
  (config) => {
    config.params.key = '419dbaba1196427fabe150539220506'
    return config
  },
  (err) => {
    store.dispatch('ToastState/asyncChangeToastState', {
      msg: err,
      classType: 'error'
    })
    return new Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    let res_data = res.data
    return res_data
  },
  (err) => {
    store.dispatch('ToastState/asyncChangeToastState', {
      msg: err.response.data.error.message,
      classType: 'error'
    })
    return
  }
)

export default instance
