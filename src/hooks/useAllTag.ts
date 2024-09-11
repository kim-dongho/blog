import markdownFiles from "../loadMarkdownFiles";
import { MarkdownModule } from "../types/ListProps";

export const useAllTag = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const list = Object.entries(markdownFiles).map(([_, module]) => {
    return (module as MarkdownModule).frontmatter.tags;
  });

  const set = new Set(list.flat());

  return [...set];
};
