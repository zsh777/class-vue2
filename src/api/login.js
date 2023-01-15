import $axios from '@/utils/axios.js'
export default {
  getData(params) {
    // console.log('params', params)
    const service = {
      method: 'get',
      url: '/data'
    }
    return $axios(service, params)
  }
}
