import { css } from "@emotion/react";
import { ListProps } from "../types/ListProps";
import { mediaQuery } from "../style/media";
import { textEllipsis } from "../style/common";
import TagList from "./TagList";

const BlogListItem = (props: ListProps) => {
  const { title, thumbnail, summary, tags, date } = props;

  return (
    <div css={itemContainer}>
      <div css={thumbnailWrapper}>
        <img src={thumbnail} alt="image" css={thumbnailImage} />
      </div>
      <div css={contentWrapper}>
        <h2>{title}</h2>
        <TagList tags={tags} />
        <h5>{summary}</h5>
        <p className="date">{date}</p>
      </div>
    </div>
  );
};

const itemContainer = css`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;

  ${mediaQuery.mobile} {
    padding: 20px 0;
  }
`;

const thumbnailWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;

  ${mediaQuery.mobile} {
    display: none;
    justify-content: inherit;
  }
`;
const thumbnailImage = css`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid;
`;

const contentWrapper = css`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-size: 26px;
    line-height: 1.3;
    font-weight: 700;
  }

  h5 {
    font-size: 18px;
    line-height: 1.3;
    font-weight: 600;
    ${textEllipsis(2)}
    ${mediaQuery.mobile} {
      ${textEllipsis(4)}
    }
  }

  .date {
    text-align: right;
    margin-top: 10px;
  }

  ${mediaQuery.mobile} {
    width: 95%;
  }
`;

export default BlogListItem;
