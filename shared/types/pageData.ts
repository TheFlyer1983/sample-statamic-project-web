import type { User } from '@@/shared/types/userData';
import type { HandleTitle } from './global';

export type PageResource = {
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
  order: string | null;
  origin_id: string | null;
  permalink: string;
  private: boolean;
  published: boolean;
  replicator_field: ReplicatorField[];
  slug: string | null;
  status: string;
  title: string;
  updated_at: string;
  updated_by: User;
  uri: string;
  url: string;
};

export type ReplicatorField = Record<string, string>