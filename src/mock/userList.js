// eslint-disable-next-line no-unused-vars
import {post} from 'jquery'
import Mock from 'mockjs' //导入mockjs
const userList = {
  // 定义用户数据
  data: {
    total: 3,
    userinfo: [
      {
        login: '18339224213',
        password: '123456',
        token: '00111222333444',
        age: '19'
      },
      {
        login: '15672767510',
        password: '123456',
        token: '44555112222222',
        age: '20'
      },
      {
        login: '7777777',
        password: '123456',
        token: '5885222448855',
        age: '22'
      }
    ],
    meta: {
      status: 200,
      message: 'success'
    }
  }
}

// 定义请求方法与路径
export default {
  'get|/user': userList
}

// post请求
Mock.mock('/user', 'post', (req) => {
  const {login, password} = JSON.parse(req.body) //将传递过来的数据保存
  for (let i = 0; i < userList.data.userinfo.length; i++) {
    //判断userLsit中是否存在该用户并且用户密码是否正确
    if (
      login === userList.data.userinfo[i].login &&
      password === userList.data.userinfo[i].password
    ) {
      return {
        token: {
          token: '00111222333444'
        },
        meta: {
          message: 'success',
          status: 200
        },
        user: {
          login: userList.data.userinfo[i].login
        }
      }
    }
  }
  return {
    meta: {
      message: 'error',
      status: 201
    }
  }
})
