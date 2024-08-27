"use client";
import { CURRENCY_SIGN } from "@/constants/currencies";
import { convertToEUR, useCurrencyContext } from "@/contexts/currencyContext";
import { ReactNode } from "react";
const ProductPrice = ({
  className,
  productPrice,
  text,
}: {
  className?: ReactNode;
  text?: boolean;
  productPrice: number;
}) => {
  const { selectedCurrency } = useCurrencyContext();
  const priceInSelectedCurrency = convertToEUR(productPrice);
  return (
    <p className="mt-auto text-primaryTextColor">
      {`${text ? "Price" : ""}`}
      <span className={`text-xl font-bold ${className} `}>
        {`${selectedCurrency === "USD" ? productPrice.toFixed(2) : priceInSelectedCurrency}`}
        {CURRENCY_SIGN[selectedCurrency as "USD" | "EUR"]}
      </span>
    </p>
  );
};

export default ProductPrice;
