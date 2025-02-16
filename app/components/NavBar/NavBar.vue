<script lang="ts" setup>
defineProps<{
  navigationData: NavigationResource[];
}>();
</script>

<template>
  <nav
    v-if="navigationData.length"
    class="flex flex-row justify-center space-x-4"
  >
    <NavItem v-for="item in navigationData" :key="item.page.id" :nav-item="item" />
  </nav>
</template>
