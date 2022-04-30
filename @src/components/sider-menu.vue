<template>
  <a-menu v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" :inlineIndent="0">
    <a-menu-item>
      <span class="select-none px-6">Dashboard</span>
    </a-menu-item>
    <a-sub-menu>
      <template #title>
        <span class="font-bold text-sm text-gray-600 tracking-widest uppercase select-none px-6">RESOURCES</span>
      </template>
      <a-menu-item>
        <span class="select-none px-6">Networks</span>
      </a-menu-item>
      <a-menu-item>
        <span class="select-none px-6">Databases</span>
      </a-menu-item>
      <a-menu-item>
        <span class="select-none px-6">Caches</span>
      </a-menu-item>
      <a-menu-item>
        <span class="select-none px-6">Domains</span>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {
  data() {
    return {
      openKeys: [],
      selectedKeys: []
    }
  }
}
</script>
