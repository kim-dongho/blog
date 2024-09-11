import { css } from "@emotion/react";
import TagList from "./TagList";
import { useAllTag } from "../hooks/useAllTag";

const FilterModal = () => {
  const tags = useAllTag();
  return (
    <div css={modalContainer}>
      <TagList tags={tags} />
    </div>
  );
};

const modalContainer = css`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-color: tomato;
  position: absolute;
  top: 30px;
`;
export default FilterModal;
