import { HSBlog } from "../types/hs-data-types.js";
import { BlogCard } from "../Cards/blog-card.js";

export type BlogListProps = {
  blogs: HSBlog[];
};
export function BlogList({ blogs }: BlogListProps) {
  return (
    <div className="latest-blogs">
      <ul className=" grid grid-flow-row auto-rows-fr sm:grid-flow-col sm:auto-cols-fr gap-5">
        {blogs?.map((blog: HSBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
}
