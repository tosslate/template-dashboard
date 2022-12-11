import forgotPasswordPage from '../pages/passwords/forgot-password'
import resetPasswordPage from '../pages/passwords/reset-password'
import notFoundPage from '../pages/_404'
import loginPage from '../pages/login'
import homePage from '../pages/home'

export default [
  {
    path: '/',
    component: homePage
  },
  {
    path: '/resources/*',
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
    path: '*',
    component: notFoundPage
  }
]
