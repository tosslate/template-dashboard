import homePage from '../pages/home.vue'
import loginPage from '../pages/login.vue'
import forgotPasswordPage from '../pages/forgot-password.vue'
import resetPasswordPage from '../pages/reset-password.vue'
import notFoundPage from '../pages/not-found.vue'

export default [
  {
    path: '/',
    component: homePage
  },
  {
    path: '/login',
    component: loginPage
  },
  {
    path: '/sign-out',
    redirect: '/login'
  },
  {
    path: '/forgot-password',
    component: forgotPasswordPage
  },
  {
    path: '/reset-password/:token',
    component: resetPasswordPage
  },
  {
    path: '/:slug(.*)*',
    component: notFoundPage
  }
]
