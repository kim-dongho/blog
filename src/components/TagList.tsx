import Tag from "./Tag";

interface TagListProps {
  tags: string[] | null;
}

const TagList = ({ tags }: TagListProps) => {
  return (
    <div>
      {tags?.map((item: string) => {
        return <Tag name={item} />;
      })}
    </div>
  );
};

export default TagList;
