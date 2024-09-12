import markdownFiles from "../loadMarkdownFiles";
import { MarkdownModule } from "../types/ListProps";

export const useMarkDown = (title: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const item = Object.entries(markdownFiles).filter(([_, module]) => {
    return (module as MarkdownModule).frontmatter.title === title;
  });

  return item;
};
