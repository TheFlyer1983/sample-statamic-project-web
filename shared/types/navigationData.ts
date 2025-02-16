export type NavigationResource = {
  page: PageResource & { external_link: boolean };
  depth: number;
  children: NavigationResource[];
};
