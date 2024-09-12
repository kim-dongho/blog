import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { useEffect, useState } from "react";
import "github-markdown-css/github-markdown.css";
import { css } from "@emotion/react";
import ContentLayout from "../layouts/ContentLayout";
import Title from "../components/Title";
import Comment from "../components/Comment";

const BlogPost = () => {
  const { id } = useParams();
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(
    null
  );
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (id) {
      import(`../data/${id}.mdx`)
        .then((module) => {
          setTitle(module.frontmatter.title);
          setMDXContent(() => module.default);
        })
        .catch((error) => console.error("Error loading MDX file:", error));
    }
  }, [id]);

  if (!MDXContent) return <div>Loading...</div>;

  return (
    <ContentLayout>
      <Title text={title} />
      <div css={mdxContainer} className="markdown-body">
        <MDXProvider>
          <MDXContent />
        </MDXProvider>
        <Comment />
      </div>
    </ContentLayout>
  );
};

const mdxContainer = css`
  background: inherit;
  color: inherit;
`;

export default BlogPost;
