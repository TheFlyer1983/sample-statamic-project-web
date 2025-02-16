<script lang="ts" setup>
defineProps<{
  pageData: PageResource;
}>()
</script>

<template>
  <div class="mt-14">
    <h1 class="flex justify-center font-bold text-2xl">{{ pageData.title }}</h1>
  </div>
</template>