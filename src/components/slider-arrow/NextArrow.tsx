import { useRecoilValue } from "recoil";
import { icons } from "../../util/asset";
import { themeState } from "../../atom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NextArrow = (props: any) => {
  const { onClick, className, style } = props;
  const isDark = useRecoilValue(themeState);

  return (
    <img
      src={isDark ? icons["arrow-rightLight"] : icons["arrow-rightDark"]}
      onClick={onClick}
      className={className}
      style={style}
    />
  );
};

export default NextArrow;
