import { CardContent, CardFooter, CardHeader, CardTitle } from '../../ui/card.js';
import { HSBlog } from '../../types/hs-data-types.js';
import { ImageTopCard } from './image-top-card.js';
import { Button } from '../../ui/button.js';
import SafeHtmlRenderer from '../../SanitizeHTML/index.js'

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
        <CardTitle>{blog.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <SafeHtmlRenderer content={blog.post_summary} />
      </CardContent>
      <CardFooter>
        <Button>Read More</Button>
      </CardFooter>
    </ImageTopCard>
  );
}
