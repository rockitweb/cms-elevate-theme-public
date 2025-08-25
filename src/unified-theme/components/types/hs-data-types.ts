import { ButtonContentType } from "../modules/Button-New/ButtonContent/types.js";
export type HSBlogsQueryResult = {
  news: {
    post_collection: {
      items: HSBlog[];
    };
  };
  media: {
    post_collection: {
      items: HSBlog[];
    };
  };
  BLOG: {
    post_collection: {
      items: HSBlog[];
    };
  };
};

export type HSBlog = {
  url: string;
  slug: string;
  name: string;
  id: string;
  post_body: string;
  post_summary: string;
  featured_image: string;
  featured_image_alt_text: string;
  publish_date: number;
  extraButton?: ButtonContentType; // Optional field for extra button content
};
