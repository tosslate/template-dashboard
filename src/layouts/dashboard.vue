<template>
  <a-layout>
    <a-layout-sider class="h-screen" :width="256">
      <div class="h-16"></div>
      <sider-menu></sider-menu>
    </a-layout-sider>
    <a-layout class="bg-gray-200">
      <a-layout-header class="bg-white shadow px-12 z-50">
        <div class="flex items-center h-full">
          <header-search></header-search>
          <div class="flex flex-auto flex-row-reverse items-center">
            <header-dropdown></header-dropdown>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content>
        <slot></slot>
      </a-layout-content>
      <a-layout-footer class="bg-gray-200">
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import axios from 'axios'
import { message } from 'ant-design-vue'
import SiderMenu from '../components/sider-menu.vue'
import HeaderSearch from '../components/header-search.vue'
import HeaderDropdown from '../components/header-dropdown.vue'

export default {
  components: {
    SiderMenu,
    HeaderSearch,
    HeaderDropdown
  },
  async created() {
    try {
      const { data } = await axios.get('/api/user')
      localStorage.setItem('authData', JSON.stringify(data))
    } catch ({ response }) {
      await message.error(response.data.message)
      this.$router.replace('/login')
    }
  }
}
</script>
