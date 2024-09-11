import { useRecoilValue } from "recoil";
import markdownFiles from "../loadMarkdownFiles";
import { MarkdownModule } from "../types/ListProps";
import { filterList } from "../atom";

export const useMarkDownList = () => {
  const filter = useRecoilValue(filterList);
  const list = Object.entries(markdownFiles).map(([_, module]) => {
    return (module as MarkdownModule).frontmatter;
  });

  if (filter?.length) {
    return list.filter((item) => item.tags.some((tag) => filter.includes(tag)));
  } else {
    return list;
  }
};
