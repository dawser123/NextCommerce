'use client'
import Link from "next/link";
import React from "react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Currency from "./currency";
import { useCartContext } from "@/contexts/cartContext";
const HeaderActions = () => {
  const { items } = useCartContext();
  return (
    <div className="flex items-center gap-2">
  <Currency/>
      <div className="relative cursor-pointer">
        <Link href={"/cart"}>
          <PiShoppingCartSimpleFill size={24} />
        </Link>
        <span className="absolute -right-2 -top-2  flex h-5 w-5 items-center justify-center rounded-full bg-secondaryColor text-sm text-primaryTextColor">
        {items.length}
        </span>
      </div>
    </div>
  );
};
export default HeaderActions;
