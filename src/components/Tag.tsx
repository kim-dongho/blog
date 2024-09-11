import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { filterList } from "../atom";

interface TagProps {
  name: string;
}

const Tag = ({ name }: TagProps) => {
  const [filter, setFilter] = useRecoilState(filterList);
  return (
    <StyledTag onClick={() => setFilter((prev) => [...prev, name])}>
      {name}
    </StyledTag>
  );
};

const StyledTag = styled.div`
  padding: 8px 12px;
  margin: 4px;
  border-radius: 16px;
  font-size: 14px;
  display: inline-block;
  color: black;
  background-color: #ebebeb;
`;

export default Tag;
