import React from "react";

const ImageWithFallback = ({
  src,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const defaultImage = "/assets/images/no-image.png";
  return (
    <img
      src={src || defaultImage}
      alt={alt}
      onError={(e) => {
        e.currentTarget.src = defaultImage;
      }}
      {...props}
    />
  );
};

export default ImageWithFallback;
