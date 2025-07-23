import { BlogList } from "../Niba/blog-list.js";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs.js";
import { HSBlog } from "../types/hs-data-types.js";

export function LatestNewsAndMediaTabs({ blogs }: { blogs: HSBlog[] }) {
  return (
    <Tabs defaultValue="news" className=" w-full">
      <TabsList className="w-full justify-between p-0 h-[60px] rounded-none">
        <TabsTrigger
          value="news"
          className="data-[state=active]:bg-niba-blue data-[state=active]:text-white p-0 border-0 rounded-none text-[20px]"
        >
          Latest News
        </TabsTrigger>
        <TabsTrigger
          value="media"
          className="data-[state=active]:bg-niba-blue data-[state=active]:text-white p-0 border-0 rounded-none text-[20px]"
        >
          Media Releases
        </TabsTrigger>
      </TabsList>
      <TabsContent value="news">
        <div className=" flex justify-center w-full p-0">
          <BlogList blogs={blogs} />
        </div>
      </TabsContent>
      <TabsContent value="media">Change your media here.</TabsContent>
    </Tabs>
  );
}
export default LatestNewsAndMediaTabs;
