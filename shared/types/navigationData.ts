export type NavigationResource = {
  page: PageResource;
  depth: number,
  children: NavigationResource[]
};