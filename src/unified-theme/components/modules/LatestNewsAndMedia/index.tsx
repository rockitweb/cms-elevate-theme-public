import { ModuleFields } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';

import '../../../assets/_hs/css/tailwind.hubl.css';
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
      blogs={props.dataQueryResult.data.BLOG.post_collection.items}
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
  BLOG {
    post_collection(limit: $limit, orderBy: publish_date__desc, filter: {post_tag_slug__eq: "news"}) {
      items {
        url
        slug
        name
        id
        post_body
        post_summary
        featured_image
        featured_image_alt_text
      }
    }
  }
}`; // buildBlogsQuery(3);
