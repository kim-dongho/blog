import { useEffect, useRef } from "react";
import slugify from "slugify";

type Props = {
  title: string;
};

const Comment = ({ title }: Props) => {
  const commentsEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "kim-dongho/blog");
    scriptEl.setAttribute("issue-term", "title");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("crossorigin", "anonymous");
    commentsEl.current?.appendChild(scriptEl);
  }, []);

  return (
    <div>
      <div ref={commentsEl} />
    </div>
  );
};

export default Comment;
