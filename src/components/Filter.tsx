// import { useRecoilValue } from "recoil";
// import { themeState } from "../atom";
// import { icons } from "../util/asset";
import { css } from "@emotion/react";
import { useAllTag } from "../hooks/useAllTag";
import Tag from "./Tag";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "./slider-arrow/PrevArrow";
import NextArrow from "./slider-arrow/NextArrow";

const Filter = () => {
  // const isDark = useRecoilValue(themeState);
  const allTag = useAllTag();

  const settings = {
    variableWidth: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div css={filterContainer}>
      <Slider {...settings}>
        {allTag.map((item) => (
          <Tag name={item} filterEvent={true} filtering={true} />
        ))}
      </Slider>
    </div>
  );
};

const filterContainer = css`
  position: relative;
  width: 95%;
  margin: 0 auto;
`;

export default Filter;
