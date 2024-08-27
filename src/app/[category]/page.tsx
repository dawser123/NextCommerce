import ProductCard from "@/components/categoryCard";
import ContentWrapper from "@/components/contentWrapper";
import MarginTopWrapper from "@/components/marginTopWrapper";
import React from "react";

const page = ({ params }: { params: { category: string } }) => {
  return (
    <MarginTopWrapper>
      <ContentWrapper>
        <ul className="my-12 flex flex-wrap justify-center gap-5 pb-10">
          <ProductCard params={params} />
        </ul>
      </ContentWrapper>
    </MarginTopWrapper>
  );
};

export default page;
