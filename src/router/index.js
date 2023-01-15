import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index,
        children: [
          {
            path: '/aComment',
            name: 'aComment',
            component: () => import('../components/notices/aComment.vue')
          },
          {
            path: '/index/thumbNews',
            name: 'thumbNews',
            component: () => import('../components/notices/thumbNews.vue')
          },
          {
            path: 'replyMessage',
            name: 'replyMessage',
            component: () => import('../components/notices/replyMessage.vue')
          },
          {
            path: '/index/auditInformation',
            name: 'auditInformation',
            component: () =>
              import('../components/notices/auditInformation.vue')
          },
          {
            path: '/index/activeMessage',
            name: 'activeMessage',
            component: () => import('../components/notices/activeMessage.vue')
          },
          {
            path: '/index/friendVerification',
            name: 'friendVerification',
            component: () =>
              import('../components/notices/friendVerification.vue')
          },
          {
            path: '/index/friendsMessage',
            name: 'friendsMessage',
            component: () => import('../components/notices/friendsMessage.vue')
          },
          {
            path: '/index/noticesettings',
            name: 'noticesettings',
            component: () => import('../components/notices/noticesettings.vue')
          },
          {
            path: '/index/showinfo',
            name: 'showinfo',
            component: () => import('../components/mySpace/showinfo.vue')
          },
          {
            path: '/index/imageUp',
            name: 'imageUp',
            component: () => import('../components/mySpace/imageUp.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
