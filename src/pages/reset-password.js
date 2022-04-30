// import React, { Component } from 'react'
// import { If, Then, Else } from 'react-if'
// import { Link } from 'react-router-dom'
// import { Helmet } from 'react-helmet'
// import Button from 'antd/lib/button'
// import Input from 'antd/lib/input'
// import Form from 'antd/lib/form'
// import Result from 'antd/lib/result'
// import Divider from 'antd/lib/divider'
// import message from 'antd/lib/message'
// import { MailOutlined } from '@ant-design/icons'
// import DefaultLayout from '../layouts/default'

export default function ResetPasswordPage(params) {
  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <DefaultLayout>
        <div className="bg-white shadow rounded px-12 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl">Reset Password</h1>
          </div>
          <Form className="Page__resetPassword">
            <Form.Item>
              <Input placeholder="Password" size="large" type="password" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Password Confirmation" size="large" type="password" />
            </Form.Item>
            <Form.Item>
              <Button block loading={false} htmlType="submit" size="large" type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </DefaultLayout>
    </>
  )
}

// class ResetPasswordPage extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       user: {
//         password: '',
//         passwordConfirmation: ''
//       },
//       isLoading: false
//     }
//   }
{/* <template>
  <outside-layout>
    <div class="bg-white shadow rounded px-12 py-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl">Reset Password</h1>
      </div>
      <a-form class="resetPassword" :model="user" layout="vertical" @submit.prevent="resetPassword">
        <a-form-item>
          <a-input v-model:value="user.password" placeholder="Password" size="large" type="password"></a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="user.passwordConfirmation" placeholder="Password Confirmation" size="large" type="password"></a-input>
        </a-form-item>
        <a-form-item>
          <a-button block :loading="isLoading" html-type="submit" size="large" type="primary">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </outside-layout>
</template>

<script>
import axios from 'axios'
import { message } from 'ant-design-vue'
import OutsideLayout from '../layouts/outside.vue'
import head from '../plugins/head'

export default {
  components: {
    OutsideLayout
  },
  data() {
    return {
      user: {
        password: '',
        passwordConfirmation: ''
      },
      isLoading: false
    }
  },
  methods: {
    async resetPassword() {
      this.isLoading = true
      try {
        const { email } = this.$route.query
        const { token } = this.$route.params
        const { password: newPassword, passwordConfirmation } = this.user
        await axios.put('/api/reset-password', { email, token, newPassword, password_confirmation: passwordConfirmation })
        this.user = {
          password: '',
          passwordConfirmation: ''
        }
      } catch ({ response }) {
        message.error(response.data.message)
      } finally {
        this.isLoading = false
      }
    }
  },
  beforeCreate() {
    head.title('Reset Password')
  },
  async created() {
    try {
      await axios.delete('/api/logout')
    } catch ({ response }) {
      if (window.sanctum) {
        message.error(response.data.message)
      }
    }
  }
}
</script>

<style scoped>
form.resetPassword {
  width: 24rem;
}
</style> */}
