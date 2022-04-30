// import React from 'react'
// import homePage from '../pages/home'
// import loginPage from '../pages/login'
// import forgotPasswordPage from '../pages/forgot-password'
// import ResetPasswordPage from '../pages/reset-password'
import notFoundPage from '../pages/not-found'

export default [
  // {
  //   path: '/',
  //   component: homePage
  // },
  // {
  //   path: '/login',
  //   component: loginPage
  // },
  // {
  //   path: '/forgot-password',
  //   component: forgotPasswordPage
  // },
  // {
  //   path: '/reset-password/:token',
  //   component: ResetPasswordPage
  // },
  {
    path: '*',
    component: notFoundPage
  }
]
