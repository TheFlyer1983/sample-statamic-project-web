<script lang="ts" setup>
defineProps<{
  navItem: NavigationResource
}>()
</script>

<template>
  <NuxtLink
      :to="
        !navItem.page.slug
          ? navItem.page.url
          : navItem.page.slug === 'home'
            ? '/'
            : { params: { slug: navItem.page.slug } }
      "
      :external="!navItem.page.slug"
    >
      {{ navItem.page.title }}
    </NuxtLink>
</template>