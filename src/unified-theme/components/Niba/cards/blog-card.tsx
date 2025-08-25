import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card.js";
import { HSBlog } from "../../types/hs-data-types.js";
import { ImageTopCard } from "./image-top-card.js";
import { Button } from "../../ui/button.js";
import SafeHtmlRenderer from "../../SanitizeHTML/index.js";

export type BlogCardProps = {
  blog: HSBlog;
};

export function BlogCard({ blog }: BlogCardProps) {
  console.log("BlogCard", blog);
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
      <CardContent className="text-[14px]">
        <SafeHtmlRenderer content={blog.post_summary} />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button asChild variant="outline" size="sm">
          <a href={`/blog/${blog.id}`}>Read More</a>
        </Button>
        {blog.publish_date && blog && (
          <div className="text-xs text-gray-500">
            {new Date(blog.publish_date).toLocaleDateString() || "Unknown Date"}
          </div>
        )}
      </CardFooter>
    </ImageTopCard>
  );
}
