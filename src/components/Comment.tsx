import { useEffect, useRef } from "react";

const Comment = () => {
  const commentsEl = useRef<HTMLDivElement>(null);
  const slug = window.location.pathname
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "kim-dongho/blog");
    scriptEl.setAttribute("issue-term", slug);
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
