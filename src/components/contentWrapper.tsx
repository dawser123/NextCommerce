import React from "react";

const ContentWrapper = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className={'max-w-[1200px] w-full px-6 mx-auto'}>
      {children}
    </div>
  );
};

export default ContentWrapper;
