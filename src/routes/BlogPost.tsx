import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { useEffect, useState } from "react";
import "github-markdown-css/github-markdown.css";
import { css } from "@emotion/react";
import ContentLayout from "../layouts/ContentLayout";
import Title from "../components/Title";
import Comment from "../components/Comment";
import CodeBlock from "../components/CodeBlock";
import { mediaQuery } from "../style/media";

const BlogPost = () => {
  const { id } = useParams();
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(
    null
  );
  const [koTitle, setKoTitle] = useState("");

  useEffect(() => {
    if (id) {
      import(`../data/${id}.mdx`)
        .then((module) => {
          setKoTitle(module.frontmatter.koTitle);
          setMDXContent(() => module.default);
        })
        .catch((error) => console.error("Error loading MDX file:", error));
    }
  }, [id]);

  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <CodeBlock
          value={String(children).replace(/\n$/, "")}
          language={match[1]}
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  if (!MDXContent) return <div>Loading...</div>;

  return (
    <ContentLayout>
      <Title text={koTitle} />
      <div css={mdxContainer} className="markdown-body">
        <MDXProvider components={components}>
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

  ol {
    list-style-type: number;
  }
  ul {
    list-style-type: disc;
  }

  table {
    font-size: 14px;
  }

  pre {
    font-size: 14px;
  }

  img {
    width: 400px;
    height: 400px;
    ${mediaQuery.mobile} {
      width: 300px;
      height: 300px;
    }
  }
`;

export default BlogPost;
