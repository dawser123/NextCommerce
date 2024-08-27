import { ReactNode } from "react";

const MarginTopWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="mt-[108px]">{children}</div>;
};

export default MarginTopWrapper;
