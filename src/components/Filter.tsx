import { useRecoilValue } from "recoil";
import { themeState } from "../atom";
import { icons } from "../util/asset";
import { useState } from "react";
import { css } from "@emotion/react";
import FilterModal from "./FilterModal";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(true);
  const isDark = useRecoilValue(themeState);

  return (
    <div css={filterWrapper} onClick={() => setIsOpen(!isOpen)}>
      <img src={isDark ? icons.filterDark : icons.filterLight} alt="filter" />
      <span>Filter</span>
      {isOpen && <FilterModal />}
    </div>
  );
};

const filterWrapper = css`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  img {
    width: 18px;
    height: 18px;
  }
  span {
    font-size: 18px;
  }
`;

export default Filter;
