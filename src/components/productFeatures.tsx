import { features } from "@/constants/features";
import React from "react";

const ProductFeatures = () => {
  return (
    <>
      {features.map((feature) => (
        <li
          key={feature.text}
          className="flex items-center justify-start gap-2"
        >
          {feature.icon} <p>{feature.text}</p>
        </li>
      ))}
    </>
  );
};

export default ProductFeatures;
