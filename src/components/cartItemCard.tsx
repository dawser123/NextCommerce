"use client";
import { useCartContext } from "@/contexts/cartContext";
import React from "react";
import Image from "next/image";
import CartItemDetails from "./cartItemDetails";
import CartItemSummary from "./cartItemSummary";

const CartItemCard = () => {
  const {
    items,
    subtotal,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartContext();

  if (items.length === 0) {
    return <p className="text-center text-xl">Your cart is empty</p>;
  }

  return (
    <div className="mb-10 flex flex-col lg:flex-row">
 
        <ul className="rounded-lg bg-primaryColor ">
          {items.map((item) => (
            <li
              className="flex  flex-col border border-secondaryColor/25 my-10 rounded-lg bg-primaryColor px-5 py-10"
              key={item.id}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={200}
                quality={100}
                priority
                className="h-32 w-32 rounded-lg mb-2"
              />
              <CartItemDetails
                item={item}
                removeItemFromCart={removeItemFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            </li>
          ))}
        </ul>


      <CartItemSummary subTotal={subtotal} />
    </div>
  );
};

export default CartItemCard;
