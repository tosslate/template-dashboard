<template>
  <outside-layout>
    <div class="bg-white shadow rounded px-12 py-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl">Welcome Back</h1>
      </div>
      <a-form class="login" :model="user" layout="vertical" @submit.prevent="login">
        <a-form-item>
          <a-input v-model:value="user.email" required placeholder="Email Address" size="large" type="email">
            <template #prefix>
              <UserOutlined class="mr-1" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="user.password" required placeholder="Password" size="large" type="password">
            <template #prefix>
              <LockOutlined class="mr-1" />
            </template>
          </a-input>
          <div class="flex justify-end">
            <router-link class="leading-10" to="/forgot-password">Forgot your password?</router-link>
          </div>
        </a-form-item>
        <a-form-item>
          <a-button block :loading="isLoading" html-type="submit" size="large" type="primary">Log In</a-button>
        </a-form-item>
      </a-form>
    </div>
  </outside-layout>
</template>

<script>
import axios from 'axios'
import { message } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import OutsideLayout from '../layouts/outside.vue'
import head from '../plugins/head'

export default {
  components: {
    UserOutlined,
    LockOutlined,
    OutsideLayout
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    async login() {
      this.isLoading = true
      try {
        const { email, password } = this.user
        const { data } = await axios.post('/api/login', { email, password, remember: 'on' })
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`
        this.$router.replace('/')
      } catch ({ response }) {
        message.error(response.data.message)
      } finally {
        this.isLoading = false
      }
    }
  },
  beforeCreate() {
    head.title('Log In')
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
form.login {
  width: 24rem;
}
</style>
