<template>
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
</style>
