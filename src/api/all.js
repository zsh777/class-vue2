import $axios from '@/utils/axios.js'
export default {
  getAllJson(data) {
    // console.log('全部课程', data)
    const service = {
      method: 'get',
      url: '/moni/all/all.json'
    }
    return $axios(service, data)
  }
}
