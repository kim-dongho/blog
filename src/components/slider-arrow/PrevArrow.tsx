import { useRecoilValue } from "recoil";
import { icons } from "../../util/asset";
import { themeState } from "../../atom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrevArrow = (props: any) => {
  const { onClick, className, style, currentSlide } = props;
  const isDark = useRecoilValue(themeState);

  return (
    <img
      src={isDark ? icons["arrow-leftLight"] : icons["arrow-leftDark"]}
      onClick={currentSlide !== 0 && onClick}
      className={className}
      style={style}
    />
  );
};

export default PrevArrow;
