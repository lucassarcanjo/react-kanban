import React from "react";
import ReactMarkdown, { Options } from "react-markdown";

import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown-light.css";

export const MarkdownRenderer: React.FC<Options> = (props) => {
  return (
    <ReactMarkdown
      className="markdown-body"
      rehypePlugins={[rehypeSanitize, rehypeRaw, remarkGfm]}
      {...props}
    />
  );
};
