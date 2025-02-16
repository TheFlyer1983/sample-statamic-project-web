export type ApiResponse<T> = {
  data: T;
  links?: Links;
  meta?: Meta;
}

export type Links = {
  first: string;
  last: string;
  prev: string | null,
  next: string | null
};

export type Meta = {
  current_page: number;
  from: number;
  last_page: number;
  links: MetaLinks[]
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type MetaLinks = {
  url: string | null;
  label: string;
  active: boolean;
};

export type HandleTitle = {
  handle: string;
  title: string;
}