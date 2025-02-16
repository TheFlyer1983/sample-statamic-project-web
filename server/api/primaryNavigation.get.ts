import type { NavigationResource } from "~~/shared/types/navigationData";

export default defineEventHandler(async () => {
  const response = await $fetch<ApiResponse<NavigationResource[]>>(`http://sample-project.test/api/navs/primary_navigation/tree`);

  return response.data;
})
