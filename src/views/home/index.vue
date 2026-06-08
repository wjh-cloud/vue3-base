<script setup lang="ts">
// ref / computed 等由 unplugin-auto-import 自动注入，无需手动 import
const count = ref(0)

function inc() {
  count.value++
  ElMessage.success(`count = ${count.value}`)
}
</script>

<template>
  <div class="space-y-4">
    <el-card>
      <template #header>
        <span class="font-bold">基础脚手架自检</span>
      </template>

      <!-- Tailwind 原子类生效演示 -->
      <p class="text-red-500 mb-3">这行字是红色（Tailwind 生效）。</p>

      <!-- Element Plus 组件 + 自动导入演示 -->
      <div class="flex items-center gap-3">
        <el-button type="primary" @click="inc">点我 +1（Element Plus 生效）</el-button>
        <el-tag>当前计数：{{ count }}</el-tag>
      </div>

      <!-- SvgIcon 全局组件演示 -->
      <div class="mt-4 flex items-center gap-2 text-gray-600">
        <SvgIcon icon-name="logo" :icon-size="24" />
        <span>SvgIcon 组件（src/assets/icons 下的 svg）</span>
      </div>
    </el-card>

    <el-card>
      <p class="text-gray-500 text-sm">
        在 <code>src/views</code> 下新建页面、在 <code>src/router</code> 注册路由即可开始开发。
      </p>
    </el-card>
  </div>
</template>
