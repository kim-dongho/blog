import { css } from "@emotion/react";
import TagList from "./TagList";
import { useAllTag } from "../hooks/useAllTag";
import { useRecoilValue } from "recoil";
import { filterList, themeState } from "../atom";

const FilterModal = () => {
  const tags = useAllTag();
  const filter = useRecoilValue(filterList);
  const isDark = useRecoilValue(themeState);

  return (
    <div css={modalContainer(isDark)}>
      <TagList tags={tags} filterEvent={true} />
      <div css={line} />
      <div>
        {filter.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div>초기화</div>
    </div>
  );
};

const modalContainer = (isDark: boolean) => css`
  position: fixed;
  border-radius: 5px;
  background-color: ${isDark ? "white" : "black"};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const line = css`
  border-bottom: 1px solid black;
  margin: 20px 0;
`;

export default FilterModal;
