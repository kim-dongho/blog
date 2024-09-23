import { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import PrismLight from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

interface TProps {
  language: string;
  value: string;
}

const CodeBlock: FC<TProps> = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={PrismLight}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
