// import React from 'react'
import homePage from '../pages/home'
import loginPage from '../pages/login'
import forgotPasswordPage from '../pages/passwords/forgot-password'
import ResetPasswordPage from '../pages/passwords/reset-password'
import notFoundPage from '../pages/_404'

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
    path: '/forgot-password',
    component: forgotPasswordPage
  },
  {
    path: '/reset-password/:token',
    component: ResetPasswordPage
  },
  {
    path: '*',
    component: notFoundPage
  }
]

// import homePage from '../pages/home.vue'
// import loginPage from '../pages/login.vue'
// import forgotPasswordPage from '../pages/forgot-password.vue'
// import resetPasswordPage from '../pages/reset-password.vue'
// import notFoundPage from '../pages/not-found.vue'

// export default [
//   {
//     path: '/',
//     component: homePage
//   },
//   {
//     path: '/login',
//     component: loginPage
//   },
//   {
//     path: '/sign-out',
//     redirect: '/login'
//   },
//   {
//     path: '/forgot-password',
//     component: forgotPasswordPage
//   },
//   {
//     path: '/reset-password/:token',
//     component: resetPasswordPage
//   },
//   {
//     path: '/:slug(.*)*',
//     component: notFoundPage
//   }
// ]
