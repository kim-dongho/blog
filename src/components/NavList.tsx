import { Dispatch, SetStateAction } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { icons } from "../util/asset";

type NavItemProps = {
  id: number;
  text: string;
  icon: string;
  link: string;
};

const navItem = [
  {
    id: 2,
    text: "BLOG",
    icon: icons.blog,
    link: "/",
  },
  {
    id: 3,
    text: "TAGS",
    icon: icons.tag,
    link: "/tags",
  },
];

type IsOpenProps = {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
};

const NavList = (props: IsOpenProps) => {
  const { isOpen, setIsOpen } = props;
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <ul>
      {navItem.map((item: NavItemProps) => {
        return (
          <li
            key={item.id}
            onClick={() => {
              navigate(item.link);
              if (isOpen && setIsOpen) {
                setIsOpen(() => !isOpen);
              }
            }}
          >
            {isMobile && <img src={item.icon} alt="icon" />}
            {item.text}
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
