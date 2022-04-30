<template>
  <div>
    <a-input>
      <template #prefix>
        <search-outlined></search-outlined>
      </template>
    </a-input>
  </div>
</template>

<script>
import { SearchOutlined } from '@ant-design/icons-vue'

export default {
  components: {
    SearchOutlined
  }
}
</script>
