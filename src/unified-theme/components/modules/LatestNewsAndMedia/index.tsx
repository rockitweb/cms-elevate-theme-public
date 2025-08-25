import { ModuleFields } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';

import { HSBlogsQueryResult } from '../../types/hs-data-types.js';

// @ts-expect-error -- ?island not typed
import LatestNewsAndMediaTabsIsland from '../../tabs/LatestNewsAndMediaTabs?island';


type LatestNewsAndMediaProps = {
  dataQueryResult: {
    data: HSBlogsQueryResult;
    loading: boolean;
    error: any;
  };
};

export function Component(props: LatestNewsAndMediaProps) {
  return (
    <Island
      module={LatestNewsAndMediaTabsIsland}
      news={props.dataQueryResult.data.news.post_collection.items}
      media={props.dataQueryResult.data.media.post_collection.items}
      clientOnly={true}
    />
  );
  /*   return (
    <LatestNewsAndMediaTabs
      blogs={props.dataQueryResult.data.BLOG.post_collection.items}
    />
  ); */
}

export const meta = {
  label: 'Latest News & Media Tabs',
};
export const fields = <ModuleFields children={''}></ModuleFields>;

export const query = `

query BlogsQuery($limit: Int! = 3) {
  news:BLOG {
    post_collection(
      limit: $limit
      orderBy: publish_date__desc
      filter: {post_tag_slug__eq: "news"}
    ) {
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
    media:BLOG {
    post_collection(
      limit: $limit
      orderBy: publish_date__desc
      filter: {post_tag_slug__eq: "media-releases"}
    ) {
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
