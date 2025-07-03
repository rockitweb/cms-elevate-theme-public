export type HSBlogsQueryResult = {
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
};
