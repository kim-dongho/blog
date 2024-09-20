import { useRecoilValue } from "recoil";
import { icons } from "../../util/asset";
import { themeState } from "../../atom";

const PrevArrow = (props: any) => {
  const { onClick, className, style } = props;
  const isDark = useRecoilValue(themeState);

  return (
    <img
      src={isDark ? icons["arrow-leftLight"] : icons["arrow-leftDark"]}
      onClick={onClick}
      className={className}
      style={style}
    />
  );
};

export default PrevArrow;
