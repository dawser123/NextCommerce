import { Product } from "@/types/product";
import React from "react";
import ProductPrice from "./productPrice";

const CartItemDetails = ({
  item,
  removeItemFromCart,
  decreaseQuantity,
  increaseQuantity,
}: {
  item: Product;
  removeItemFromCart: (item: Product) => void;
  increaseQuantity: (item: Product) => void;
  decreaseQuantity: (item: Product) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-primaryTextColor">{item.category}</p>
        <ProductPrice className="ml-0" productPrice={item.price} />
        <div className="flex items-center gap-2">
          <button
            onClick={() => decreaseQuantity(item)}
            className="rounded-md text-primaryTextColor bg-secondaryColor px-2 py-1 md:px-4 md:py-2"
          >
            -
          </button>
          <span className="text-lg font-semibold">{item.quantity}</span>
          <button
            onClick={() => increaseQuantity(item)}
            className="rounded-md text-primaryTextColor bg-secondaryColor px-2 py-1 md:px-4 md:py-2"
          >
            +
          </button>
        </div>
        <button
          onClick={() => removeItemFromCart(item)}
          className="mt-2 rounded-md hover:bg-secondaryColor/50 duration-300 bg-secondaryColor px-4 py-2 text-primaryTextColor md:w-[30%]"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItemDetails;
