<script lang="ts" setup>
import type { NavigationResource } from '~~/shared/types/navigationData';

const route = useRoute();

const slug = computed(() => {
  const slug = Array.isArray(route.params.slug)
    ? route.params.slug[0]
    : route.params.slug;

  return slug || 'home';
});
const { data: routeData } = await useFetch('/api/getRoute', {
  key: 'route',
  query: { route: slug }
});

const pageID = routeData.value?.page_layout?.id;

const [{ data: pageData }, { data: navigationData }] = await Promise.all([
  useFetch<PageResource>('/api/getPageData', {
    key: 'pageData',
    query: { id: pageID }
  }),

  useFetch<NavigationResource[]>('/api/primaryNavigation', { key: 'navData' })
]);

useHead({
  title: pageData.value?.replicator_field[0]?.title
});
</script>

<template>
  <div v-if="pageData && navigationData?.length">
    <NavBar :navigation-data />

    <MainContent :page-data />
  </div>
</template>
