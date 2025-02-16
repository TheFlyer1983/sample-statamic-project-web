import type { ApiResponse } from '~~/shared/types/global';
import type { PageResource } from '~~/shared/types/pageData';

export default defineEventHandler(async (event) => {
  const id = getQuery(event).id;

  const response = await $fetch<ApiResponse<PageResource[]>>(
    `http://sample-project.test/api/collections/pages/entries?filter[id]=${id}`
  );

  return response.data[0];
});
