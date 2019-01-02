import axios from 'axios'
// 把axios方法封装成模块

const Http = {}
//   添加实例方法
Http.install = function (Vue, options) {
  axios.defaults.baseURL =
  'http://localhost:8888/api/private/v1/'

  // 添加实例方法
  Vue.prototype.$http = axios
}

export default Http
