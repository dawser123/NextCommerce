import { ImageCard } from "@/types/imageCard";
import Image from "next/image";
import React from "react";

const ProductImage = ({ src, alt, className }: ImageCard) => {
  return (
    <>
      <Image
        src={src}
        className={`h-[300px] ${className} w-[300px] rounded-xl brightness-75`}
        alt={alt}
        width={300}
        priority
        height={300}
        quality={100}
      />
    </>
  );
};

export default ProductImage;
