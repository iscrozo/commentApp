export interface CommentsModel {
  id: number | null;
  article_id: number | null;
  content: string | null;
  name: string | null;
  email: string | null;
  website: string | null;
  dates: comments_date;
}

export interface comments_date {
  created: string;
  updated?: string;
}

export interface commentes_create {
  content: string;
  name: string;
  email: string;
  website: string | null;
}

export interface commentes_update {
  content?: string;
  name: string;
  email: string;
}
