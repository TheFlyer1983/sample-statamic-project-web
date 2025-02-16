<script lang="ts" setup>
defineProps<{
  navigationData: NavigationResource[];
}>();
</script>

<template>
  <nav
    v-if="navigationData.length"
    class="relative flex flex-row justify-center bg-amber-50"
  >
    <NavItem
      v-for="item in navigationData"
      :key="item.page.id"
      :nav-item="item"
    />
  </nav>
</template>
