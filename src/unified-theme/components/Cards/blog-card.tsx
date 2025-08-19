import { CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card.js";
import { HSBlog } from "../types/hs-data-types.js";
import { ImageTopCard } from "./image-top-card.js";
import { Button } from "../ui/button.js";
import SafeHtmlRenderer from "../SanitizeHTML/index.js";
import {
  getLinkFieldHref,
  getLinkFieldTarget,
} from "../utils/content-fields.js";

export type BlogCardProps = {
  blog: HSBlog;
};

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <ImageTopCard
      image={blog.featured_image}
      imageAlt={blog.featured_image_alt_text || blog.name}
    >
      <CardHeader>
        <CardTitle className="text-[22px] font-extrabold">
          {blog.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-[14px] flex-1 overflow-auto">
        <SafeHtmlRenderer content={blog.post_summary} />
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4">
        <Button asChild variant="outline" size="sm">
          <a href={`/blog/${blog.id}`}>Read More</a>
        </Button>
        {blog.extraButton && (
          <Button asChild={true} variant={blog.extraButton.buttonStyleVariant} >
            <a
              href={getLinkFieldHref(blog.extraButton.buttonContentLink)}
              target={getLinkFieldTarget(blog.extraButton.buttonContentLink)}
            >
              {blog.extraButton.buttonContentText}
            </a>
          </Button>
        )}

        {/*    {blog.publish_date && blog && (
          <div className="text-xs text-gray-500">
            {new Date(blog.publish_date).toLocaleDateString() || "Unknown Date"}
          </div>
        )} */}
      </CardFooter>
    </ImageTopCard>
  );
}
