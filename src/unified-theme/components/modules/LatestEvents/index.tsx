import { ModuleFields } from '@hubspot/cms-components/fields';

import { HSBlog, HSBlogsQueryResult } from '../../types/hs-data-types.js';

import '../../../assets/_hs/css/tailwind.hubl.css';
import { BlogList } from '../../Niba/blog-list.js';
export type LatestBlogsProps = {
  dataQueryResult: {
    data: HSBlogsQueryResult;
    loading: boolean;
    error: any;
  };
};

export function Component(props: LatestBlogsProps) {
  const blogs = props.dataQueryResult.data?.BLOG?.post_collection?.items || [];



  return <BlogList blogs={blogs as HSBlog[]} />;
}

export const meta = {
  label: 'Latest Events',
};
export const fields = <ModuleFields children={''}></ModuleFields>;
export const query = `query BlogsQuery {
  BLOG {
    post_collection(limit: 3, orderBy: publish_date__desc  filter: {post_tag_slug__eq: "event"}) {
      items {
        url
        slug
        name
        id
        post_body
        post_summary
        featured_image
        featured_image_alt_text
        publish_date
      }
    }
  }
}`; // buildBlogsQuery(3);
