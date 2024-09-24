import { css } from "@emotion/react";
import { ListProps } from "../types/ListProps";
import { mediaQuery } from "../style/media";
import { textEllipsis } from "../style/common";
import TagList from "./TagList";
import { useNavigate } from "react-router-dom";
import ImageWithFallback from "./ImageWithFallback";

const BlogListItem = (props: ListProps) => {
  const { title, koTitle, thumbnail, summary, tags, date } = props;
  const navigation = useNavigate();

  return (
    <div css={itemContainer}>
      <div css={thumbnailWrapper}>
        <ImageWithFallback src={thumbnail} alt="image" css={thumbnailImage} />
      </div>
      <div css={contentWrapper} onClick={() => navigation(`/blog/${title}`)}>
        <h2>{koTitle}</h2>
        <TagList tags={tags} filterEvent={false} />
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
  width: 150px;
  height: 150px;
  border: 1.5px solid;
  background-color: white;
  ${mediaQuery.mobile} {
    display: none;
    justify-content: inherit;
  }
`;
const thumbnailImage = css`
  width: 100%; /* div의 너비에 맞게 이미지 크기 조절 */
  height: auto; /* 비율을 유지하면서 자동으로 높이 조정 */
  display: block; /* 이미지 아래의 여백 제거 */
`;

const contentWrapper = css`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  &:hover {
    cursor: pointer;
  }
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
