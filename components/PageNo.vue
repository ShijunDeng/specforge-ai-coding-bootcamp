<script setup lang="ts">
withDefaults(defineProps<{
  current: string
  total?: string
}>(), {
  total: '41',
})
</script>

<template>
  <div class="page-no">{{ current }} / {{ total }}</div>
</template>
