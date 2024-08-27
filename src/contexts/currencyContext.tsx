'use client'
import { createContext, useState, ReactNode, useContext } from "react";
type CurrencyCode = 'USD' | 'EUR';
type CurrencyProps={
    selectedCurrency: CurrencyCode
    setSelectedCurrency: (currency: CurrencyCode) => void; 
}
const defaultValue: CurrencyProps = {
    selectedCurrency: "USD",
    setSelectedCurrency: () => {}, 
  };
  const CurrencyContext = createContext<CurrencyProps>(defaultValue);
export const CurrencyContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>("USD");
  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrencyContext=()=>{

    return useContext(CurrencyContext)
}


export const convertToEUR = (priceInUSD: number): string => {
  const exchangeRate = 0.85;
  return (priceInUSD * exchangeRate).toFixed(2); 
};