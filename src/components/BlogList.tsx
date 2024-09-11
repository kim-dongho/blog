import BlogListItem from "./BlogListItem";
import { useMarkDownList } from "../hooks/useMarkDownList";
import { ListProps } from "../types/ListProps";

const BlogList = () => {
  const blogList = useMarkDownList();
  
  return (
    <div>
      {blogList?.map((item: ListProps) => {
        return <BlogListItem {...item} />;
      })}
    </div>
  );
};

export default BlogList;
