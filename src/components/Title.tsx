import { css } from "@emotion/react";

interface TextProps {
  text: string;
}

const Title = ({ text }: TextProps) => {
  return <h2 css={TitleText}>{text}</h2>;
};

const TitleText = css`
  font-size: 32px;
  font-weight: 700;
  padding: 30px 0 20px 0;
`;

export default Title;
