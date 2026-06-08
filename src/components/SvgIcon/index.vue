<script setup lang="ts">
import { computed, useAttrs } from 'vue'

// 组件接受的props
const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  iconClass: {
    type: String,
    default: '',
  },
  iconSize: {
    type: Number,
    default: 0,
  },
})

// 计算图标的实际大小
const iconName = computed(() => `#icon-${props.iconName}`)
const svgClass = computed(() => (props.iconClass ? `svg-icon ${props.iconClass}` : 'svg-icon'))

// 使用 computed 来优化 listeners 过滤逻辑
const filteredListeners = computed(() => {
  const listeners = useAttrs()
  return Object.fromEntries(
    Object.entries(listeners).filter(([value]) => typeof value === 'function'),
  )
})
</script>

<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
    :width="iconSize"
    :height="iconSize"
    v-on="filteredListeners"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped>
.svg-icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
