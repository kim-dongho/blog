import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { filterList } from "../atom";
import { useLocation, useNavigate } from "react-router-dom";

interface TagProps {
  name: string;
  filterEvent: boolean;
  filtering?: boolean;
}

interface StyledTagProps {
  filterEvent: boolean;
  filtering?: boolean;
  isFiltered: boolean;
}

const Tag = ({ name, filterEvent, filtering }: TagProps) => {
  const [filter, setFilter] = useRecoilState(filterList);
  const location = useLocation();
  const navigation = useNavigate();

  const handleFilter = (name: string) => {
    if (filterEvent) {
      setFilter((prev) => {
        if (prev.includes(name)) {
          return prev.filter((item) => item !== name);
        } else {
          return [...prev, name];
        }
      });

      if (location.pathname === "/tags") {
        navigation("/");
      }
    }
  };

  const isFiltered = filter.includes(name);

  return (
    <StyledTag
      isFiltered={isFiltered}
      filtering={filtering}
      filterEvent={filterEvent}
      onClick={() => handleFilter(name)}
    >
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
  background-color: ${(props) =>
    props.isFiltered && props.filtering ? "#d4edda" : "#ebebeb"};
  cursor: ${(props) => (props.filterEvent ? "pointer" : "default")};
`;

export default Tag;
