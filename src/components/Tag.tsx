import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";
import { filterList } from "../atom";
import { useLocation, useNavigate } from "react-router-dom";

interface TagProps {
  name: string;
  filterEvent: boolean;
}

interface StyledTagProps {
  filterEvent: boolean;
}

const Tag = ({ name, filterEvent }: TagProps) => {
  const setFilter = useSetRecoilState(filterList);
  const location = useLocation();
  const navigation = useNavigate();

  const handleFilter = (name: string) => {
    if (filterEvent) {
      setFilter((prev) => [...prev, name]);
      if (location.pathname === "/tags") {
        navigation("/");
      }
    }
  };

  return (
    <StyledTag filterEvent={filterEvent} onClick={() => handleFilter(name)}>
      {name}
    </StyledTag>
  );
};

const StyledTag = styled.div<StyledTagProps>`
  padding: 8px 12px;
  margin: 4px;
  border-radius: 16px;
  font-size: 14px;
  display: inline-block;
  color: black;
  background-color: #ebebeb;
  cursor: ${(props) => (props.filterEvent ? "pointer" : "default")};
`;

export default Tag;
