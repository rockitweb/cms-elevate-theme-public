import { HSBlog } from "../types/hs-data-types.js";
import { BlogCard } from "./cards/blog-card.js";

export type BlogListProps = {
  blogs: HSBlog[];
};
export function BlogList({ blogs }: BlogListProps) {
  return (
    <div className="latest-blogs">
      <ul className="list-disc flex  justify-center gap-5">
        {blogs?.map((blog: HSBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
}
