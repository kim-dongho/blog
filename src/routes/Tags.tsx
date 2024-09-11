import TagList from "../components/TagList";
import Title from "../components/Title";
import { useAllTag } from "../hooks/useAllTag";
import ContentLayout from "../layouts/ContentLayout";

const Tags = () => {
  const tags = useAllTag();
  return (
    <ContentLayout>
      <Title text="ALL TAGS" />
      <TagList tags={tags} />
    </ContentLayout>
  );
};

export default Tags;
