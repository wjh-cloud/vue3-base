<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center gap-4 py-20">
    <div class="text-6xl font-bold text-gray-300">404</div>
    <p class="text-gray-500">抱歉，你访问的页面不存在</p>
    <el-button type="primary" @click="router.replace('/')">返回首页</el-button>
  </div>
</template>
