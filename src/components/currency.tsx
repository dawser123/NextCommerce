'use client'

import { CURRENCIES } from "@/constants/currencies";
import { useCurrencyContext } from "@/contexts/currencyContext";

const Currency = () => {

const{setSelectedCurrency}=useCurrencyContext()
  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedCurrency(event.target.value as 'USD'| 'EUR');
  };
  return (
    <select
      onChange={handleCurrencyChange}
      className="bg-secondaryColor p-1 focus:border-transparent"
    >
      <option className="text-sm sm:text-base" value=   {CURRENCIES.USD}>
      {CURRENCIES.USD}
      </option>
      <option className="text-sm sm:text-base" value={CURRENCIES.EUR}>
      {CURRENCIES.EUR}
      </option>
    </select>
  );
};

export default Currency;
