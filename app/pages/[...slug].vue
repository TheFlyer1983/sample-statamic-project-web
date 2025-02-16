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
    <!-- <nav class="flex flex-row justify-center space-x-4">
      <NuxtLink
        v-for="item in navigationData"
        :key="item.page.id"
        :to="
          !item.page.slug
            ? item.page.url
            : item.page.slug === 'home'
              ? '/'
              : { params: { slug: item.page.slug } }
        "
        :external="!item.page.slug"
      >
        {{ item.page.title }}
      </NuxtLink>
    </nav> -->
    <div>
      <h1>{{ pageData.title }}</h1>
    </div>
    <!-- <div class="grid grid-cols-2 gap-4">
      <div>
        <p>Route</p>
        <pre class="whitespace-pre-wrap">{{ routeData }}</pre>
      </div>
      <div>
        <p>Page</p>
        <pre class="whitespace-pre-wrap">{{ pageData }}</pre>
      </div>
    </div> -->
  </div>
</template>
