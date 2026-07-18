<script setup lang="ts">
withDefaults(defineProps<{
  current: string
  total?: string
}>(), {
  total: '42',
})
</script>

<template>
  <div class="page-no">{{ current }} / {{ total }}</div>
</template>
