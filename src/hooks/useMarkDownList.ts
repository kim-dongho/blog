import { useRecoilValue } from "recoil";
import markdownFiles from "../loadMarkdownFiles";
import { MarkdownModule } from "../types/ListProps";
import { filterList } from "../atom";

export const useMarkDownList = () => {
  const filter = useRecoilValue(filterList);
  let list = Object.entries(markdownFiles).map(([_, module]) => {
    return (module as MarkdownModule).frontmatter;
  });

  if (filter?.length) {
    list = list.filter((item) => item.tags.some((tag) => filter.includes(tag)));
  }

  return list.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
};
