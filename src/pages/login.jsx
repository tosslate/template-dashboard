import { Link } from 'react-router-dom'
// import Button from 'antd/lib/button'
// import Input from 'antd/lib/input'
// import Form from 'antd/lib/form'
import { UserIcon, LockOnIcon } from 'tdesign-icons-react'
import { Button, Input, Loading, Message } from 'tdesign-react'
import { PaintbrushIcon } from '@primer/octicons-react'
// import { UserOutlined, LockOutlined } from '@ant-design/icons'
import DefaultLayout from '../layouts/default'

export default function LoginPage() {
  return (
    <>
      <DefaultLayout>
        <div className="bg-white shadow rounded px-12 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl">Welcome Back</h1>
          </div>
          <div>
            <Message theme="success">asdasdasd</Message>
            <Button loading={true}>确定</Button>
            <Loading showOverlay={true}>
              <div className="h-32"></div>
            </Loading>
            <Loading />
            <Input size="large" prefixIcon={<UserIcon />} placeholder="asdasd" />
          </div>
          {/* <Form className="Page__login">
            <Form.Item>
              <Input prefix={<UserOutlined className="mr-1" />} required placeholder="Email Address" size="large" type="email" />
            </Form.Item>
            <Form.Item>
              <Input prefix={<LockOutlined className="mr-1" />} required placeholder="Password" size="large" type="password" />
              <div className="flex justify-end">
                <Link className="leading-10" to="/forgot-password">Forgot your password?</Link>
              </div>
            </Form.Item>
            <Form.Item>
              <Button block loading={this.state.isLoading} htmlType="submit" size="large" type="primary">Log In</Button>
            </Form.Item>
          </Form> */}
        </div>
      </DefaultLayout>
    </>
  )
}

// class LoginPage extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       user: {
//         email: '',
//         password: ''
//       },
//       isLoading: false
// <template>
//   <outside-layout>
//     <div class="bg-white shadow rounded px-12 py-8">
//       <div class="text-center mb-8">
//         <h1 class="text-3xl">Welcome Back</h1>
//       </div>
//       <a-form class="login" :model="user" layout="vertical" @submit.prevent="login">
//         <a-form-item>
//           <a-input v-model:value="user.email" required placeholder="Email Address" size="large" type="email">
//             <template #prefix>
//               <UserOutlined class="mr-1" />
//             </template>
//           </a-input>
//         </a-form-item>
//         <a-form-item>
//           <a-input v-model:value="user.password" required placeholder="Password" size="large" type="password">
//             <template #prefix>
//               <LockOutlined class="mr-1" />
//             </template>
//           </a-input>
//           <div class="flex justify-end">
//             <router-link class="leading-10" to="/forgot-password">Forgot your password?</router-link>
//           </div>
//         </a-form-item>
//         <a-form-item>
//           <a-button block :loading="isLoading" html-type="submit" size="large" type="primary">Log In</a-button>
//         </a-form-item>
//       </a-form>
//     </div>
//   </outside-layout>
// import { message } from 'ant-design-vue'
// import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
//   data() {
//     return {
//       user: {
//         email: '',
//         password: ''
//       },
//       isLoading: false
//     }
//   },
//   methods: {
//     async login() {
//       this.isLoading = true
//       try {
//         const { email, password } = this.user
//         const { data } = await axios.post('/api/login', { email, password, remember: 'on' })
//         axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`
//         this.$router.replace('/')
//       } catch ({ response }) {
//         message.error(response.data.message)
//       } finally {
//         this.isLoading = false
//       }
//     }
//   },
//   beforeCreate() {
//     head.title('Log In')
//   },
//   async created() {
//     try {
//       await axios.delete('/api/logout')
//     } catch ({ response }) {
//       if (window.sanctum) {
//         message.error(response.data.message)
//       }
//     }
//   }
// }
