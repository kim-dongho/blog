export interface MarkdownModule {
  default: React.FC<Record<string, unknown>>; // MDX 컴포넌트 타입
  frontmatter: ListProps;
}

export interface ListProps {
  date: string;
  draft: boolean;
  summary: string;
  tags: string[];
  thumbnail: string;
  title: string;
  koTitle: string;
}
