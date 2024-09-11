import { MDXProvider } from "@mdx-js/react";
import TestMdx, { frontmatter } from "../data/test.mdx";
import "github-markdown-css/github-markdown.css";
import { css } from "@emotion/react";
import markdownFiles from "../loadMarkdownFiles";

const Home = () => {
  return (
    <div>{/* {Object.entries(markdownFiles).map(())} */}</div>
    // <div css={mdxContainer} className="markdown-body">
    //   <MDXProvider>
    //     <h1>{frontmatter.name}</h1>
    //     <TestMdx />
    //   </MDXProvider>
    // </div>
  );
};

const mdxContainer = css`
  background: inherit;
  color: inherit;
`;
export default Home;
