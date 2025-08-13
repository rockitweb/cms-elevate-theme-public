import { Content } from "@radix-ui/react-tabs";
import { ModuleMeta } from "../../types/modules.js";
import {
  BlogField,
  BlogFieldType,
  BooleanField,
  FieldGroup,
  LinkField,
  ModuleFields,
  PageField,
  RepeatedFieldGroup,
  RichTextField,
} from "@hubspot/cms-components/fields";
import { BlogList } from "../../BlogList/blog-list.js";
import { HSBlog } from "../../types/hs-data-types.js";
import ButtonContent from "../Button/ButtonContent/index.js";
import { ButtonContentType } from "../Button/ButtonContent/types.js";

export type BlogListProps = {
  blogList: {
    page: string;
    groupButtonContent: ButtonContentType & { showExtraButton?: boolean };
  }[];
  hublData?: {
    blogIds: string[];
    blogs: {
      absoluteUrl: string;
      id: string;
      title: string;
      featuredImage: string;
      featuredImageAltText: string;
      featuredImageHeight: number;
      featuredImageWidth: number;
      publishDate: string;
      summary: string;
    }[];
  };
};

export function Component(props: BlogListProps) {
  //console.log("BlogList component loaded", props);

  //quickly map blogs to HSBlog type
  if (props.hublData?.blogs) {
    const blogs = props.hublData.blogs.map((blog) => {
      //get the extra button content if available
      const extraButton =
        props.blogList.find((b) => b.page.toString() === blog.id.toString())
          ?.groupButtonContent || null;

      return {
        url: blog.absoluteUrl,
        slug: blog.id,
        name: blog.title,
        id: blog.id,
        post_body: "", // Provide a default or actual value if available
        featured_image: blog.featuredImage,
        featured_image_alt_text: blog.featuredImageAltText,
        post_summary: blog.summary,
        publish_date: Number(blog.publishDate), // Ensure this is a number
        extraButton: extraButton.showExtraButton ? extraButton : null, // Include extra button if it exists
      } as HSBlog;
    });
    return (
      <div>
        <BlogList blogs={blogs} />
      </div>
    );
  }
  return null;
}
export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      label="Articles"
      name="blogList"
      occurrence={{
        min: 1,
        max: 3,
        default: 1,
      }}
      default={[
        {
          page: "220131549645",
          groupButtonContent: {
            showExtraButton: false,
            buttonContentText: "Learn more",
            buttonContentLink: {
              open_in_new_tab: true,
            },
            buttonStyleVariant: "default",
            buttonStyleSize: "medium",
            buttonContentShowIcon: false,
            buttonContentIcon: {
              name: "arrow-right",
            },
            buttonContentIconPosition: "right",
          },
        },
      ]}
    >
      <PageField
        name="page"
        label="Page"
        helpText="Pulls data from the selected page."
        required={true}
        locked={false}
        placeholder="Select a Blog"
        default={null}
      />
      <FieldGroup
        name="groupButtonContent"
        label="Extra Button"
        required={false}
      >
        <BooleanField label={"Show Extra Button"} name={"showExtraButton"} />
        <ButtonContent
          textDefault="Learn more"
          linkDefault={{
            open_in_new_tab: true,
          }}
          styleDefault={"default"}
          iconPositionDefault="left"
        />
      </FieldGroup>
    </RepeatedFieldGroup>
  </ModuleFields>
);

export const meta: ModuleMeta = {
  label: "Blog List",
  content_types: ["SITE_PAGE", "LANDING_PAGE", "BLOG_LISTING", "BLOG_POST"],
  icon: "",
  categories: ["blog"],
  is_available_for_new_content: true,
};

export { default as hublDataTemplate } from "./hubl-data.hubl.html?raw";
