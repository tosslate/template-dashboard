<template>
  <a-dropdown placement="bottomRight">
    <a-space class="cursor-pointer">
      <a-avatar src="https://i2.wp.com/ui-avatars.com/api/applause"></a-avatar>
      <span class="select-none">applause</span>
      <down-outlined class="text-xs"></down-outlined>
    </a-space>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <router-link to="/user/profile">Your profile</router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link to="/settings">Settings</router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link to="/sign-out">Sign out</router-link>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
import axios from 'axios'
import { message } from 'ant-design-vue'
import { DownOutlined } from '@ant-design/icons-vue'

export default {
  components: {
    DownOutlined,
  }
}
</script>
