<script lang="ts" setup>
const props = defineProps<{
  navItem: NavigationResource;
}>();

const linkTo = computed(() => {
  return props.navItem.page.external_link
    ? props.navItem.page.url
    : props.navItem.page.slug === 'home'
      ? '/'
      : { params: { slug: props.navItem.page.slug } };
});

const isExternal = computed(() => props.navItem.page.external_link);
const hover = ref(false);
</script>

<template>
  <div @mouseover="hover = true" @mouseleave="hover = false">
    <NuxtLink
      :to="linkTo"
      :external="isExternal"
      class="flex flex-row items-center space-x-2 p-4 hover:bg-amber-100"
    >
      <span>
        {{ navItem.page.title }}
      </span>
      <ExternalIcon v-if="isExternal" class="h-3 w-3" />
      <ChevronDownIcon v-if="navItem.children.length" class="h-3 w-3" />
    </NuxtLink>
    <div
      v-if="hover && navItem.children.length"
      class="absolute left-0 flex w-full justify-center bg-amber-300"
    >
      <NavItem
        v-for="item in props.navItem.children"
        :key="item.page.id"
        :nav-item="item"
      />
    </div>
  </div>
</template>
