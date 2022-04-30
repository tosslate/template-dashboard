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

export default function ForgotPasswordPage(params) {
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <DefaultLayout>
        <div className="bg-white shadow rounded px-12 py-8">
          <If condition={false}>
            <Then className="max-w-sm">
              <Result status="success" title="We have sent you a password recovery email." />
            </Then>
            <Else>
              <div className="text-center mb-8">
                <h1 className="text-3xl">Forgot Password</h1>
                <p>Enter your email address to retrieve your password</p>
              </div>
              <Form className="Page__forgotPassword">
                <Form.Item>
                  <Input prefix={<MailOutlined className="mr-1" />} placeholder="Email Address" size="large" type="email" />
                </Form.Item>
                <Form.Item>
                  <Button block loading={false} htmlType="submit" size="large" type="primary">Retrieve Password</Button>
                </Form.Item>
              </Form>
              <Divider>
                <Link className="font-normal" to="/login">Back to login page</Link>
              </Divider>
            </Else>
          </If>
        </div>
      </DefaultLayout>
    </>
  )
}

// class ForgotPasswordPage extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       user: {
//         email: ''
//       },
//       success: false,
//       isLoading: false
//     }
//   }
{/* <template>
  <outside-layout>
    <div class="bg-white shadow rounded px-12 py-8">
      <div v-if="success" class="max-w-sm">
        <a-result status="success" title="We have sent you a password recovery email."></a-result>
      </div>
      <template v-else>
        <div class="text-center mb-8">
          <h1 class="text-3xl">Forgot Password</h1>
          <p>Enter your email address to retrieve your password</p>
        </div>
        <a-form class="forgotPassword" :model="user" layout="vertical" @submit.prevent="forgotPassword">
          <a-form-item>
            <a-input v-model:value="user.email" placeholder="Email Address" size="large" type="email">
              <template #prefix>
                <MailOutlined class="mr-1" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button block :loading="isLoading" html-type="submit" size="large" type="primary">Retrieve Password</a-button>
          </a-form-item>
        </a-form>
      </template>
      <a-divider>
        <router-link class="font-normal" to="/login">Back to login page</router-link>
      </a-divider>
    </div>
  </outside-layout>
</template>

<script>
import axios from 'axios'
import { message } from 'ant-design-vue'
import { MailOutlined } from '@ant-design/icons-vue'
import OutsideLayout from '../layouts/outside.vue'
import head from '../plugins/head'

export default {
  components: {
    MailOutlined,
    OutsideLayout
  },
  data() {
    return {
      user: {
        email: ''
      },
      success: false,
      isLoading: false
    }
  },
  methods: {
    async forgotPassword() {
      this.isLoading = true
      try {
        const { email } = this.user
        const { data } = await axios.post('/api/send-reset-password', { email })
        this.user.email = ''
        this.success = true
      } catch ({ response }) {
        message.error(response.data.message)
      } finally {
        this.isLoading = false
      }
    }
  },
  beforeCreate() {
    head.title('Forgot Password')
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
form.forgotPassword {
  width: 24rem;
}
</style> */}
