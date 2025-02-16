<script lang="ts" setup>
const props = defineProps<{
  navItem: NavigationResource;
}>();

const linkTo = computed(() => {
  return !props.navItem.page.slug
    ? props.navItem.page.url
    : props.navItem.page.slug === 'home'
      ? '/'
      : { params: { slug: props.navItem.page.slug } };
});
</script>

<template>
  <NuxtLink :to="linkTo" :external="!navItem.page.slug">
    {{ navItem.page.title }}
  </NuxtLink>
</template>
