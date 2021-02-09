<template>
  <outside-layout>
    <div class="bg-white shadow rounded px-12 py-8">
      <div class="notFound">
        <a-result status="404" title="Page not found" sub-title="The page you were looking for doesn’t exist.">
        </a-result>
        <a-divider>
          <router-link class="font-normal" to="/">Back to home</router-link>
        </a-divider>
      </div>
    </div>
  </outside-layout>
</template>

<script>
import OutsideLayout from '../layouts/outside.vue'
import head from '../plugins/head'

export default {
  components: {
    OutsideLayout
  },
  beforeCreate() {
    head.title('Page Not Found')
  }
}
</script>

<style scoped>
form.notFound {
  width: 24rem;
}
</style>
