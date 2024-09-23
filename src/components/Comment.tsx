import { useEffect, useRef } from "react";

const Comment = () => {
  const commentsEl = useRef<HTMLDivElement>(null);
  const encodedPathname = encodeURIComponent(window.location.pathname);

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "kim-dongho/blog");
    scriptEl.setAttribute("issue-term", encodedPathname);
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
