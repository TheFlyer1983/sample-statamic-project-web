import type { User } from '@@/shared/types/userData';
import type { HandleTitle } from './global';

export type RouteResource = {
  api_url: string;
  author: User;
  blueprint: HandleTitle;
  collection: HandleTitle;
  date: string;
  edit_url: string;
  id: string;
  is_entry: boolean;
  last_modified: string;
  locale: string;
  mount: string | null;
  order: number;
  origin_id: string | null;
  page_layout: PageLayout;
  parent: string | null;
  permalink: string;
  private: boolean;
  published: boolean;
  slug: string;
  status: string;
  title: string;
  updated_at: string;
  updated_by: User;
  uri: string;
  url: string;
};

export type PageLayout = {
  id: string;
  title: string;
  url: string;
  permalink: string;
  api_url: string;
};

