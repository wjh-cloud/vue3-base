<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- el-config-provider 统一注入中文语言包（按需引入模式下的全局配置） -->
  <el-config-provider :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
