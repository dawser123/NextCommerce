import { Product } from "@/types/product";
import React from "react";
import ProductPrice from "./productPrice";

const RecommendedProductInfo = ({ product }: { product: Product }) => {
  return (
    <div className="mt-auto flex flex-grow flex-col justify-between">
      <h3 className="py-4 text-sm font-bold text-primaryTextColor md:text-base">
        {product.title}
      </h3>
 <ProductPrice productPrice={product.price}/>
    </div>
  );
};

export default RecommendedProductInfo;
