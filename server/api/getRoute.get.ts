import type { ApiResponse } from '~~/shared/types/global';
import type { RouteResource } from '~~/shared/types/routeData';

export default defineEventHandler(async (event) => {
  const slug = getQuery(event).route;

  const response = await $fetch<ApiResponse<RouteResource[]>>(
    `http://sample-project.test/api/collections/routes/entries?filter[slug]=${slug}`
  );

  return response.data[0];
});
