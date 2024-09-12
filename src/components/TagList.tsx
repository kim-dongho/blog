import Tag from "./Tag";

interface TagListProps {
  tags: string[];
  filterEvent: boolean;
}

const TagList = ({ tags, filterEvent }: TagListProps) => {
  return (
    <div>
      {tags?.map((item: string) => {
        return <Tag name={item} filterEvent={filterEvent} />;
      })}
    </div>
  );
};

export default TagList;
