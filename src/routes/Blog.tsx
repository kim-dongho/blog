import BlogList from "../components/BlogList";
import Filter from "../components/Filter";
import ContentLayout from "../layouts/ContentLayout";

const Blog = () => {
  return (
    <ContentLayout>
      <Filter />
      <BlogList />
    </ContentLayout>
  );
};

export default Blog;
