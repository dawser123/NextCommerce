import ContentWrapper from "@/components/contentWrapper";
import MarginTopWrapper from "@/components/marginTopWrapper";
import ProductCard from "@/components/productCard";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <MarginTopWrapper>
      <ContentWrapper>
        <div className="my-10 flex max-w-[400px] flex-col gap-10 md:max-w-[90%] md:flex-row">
          <ProductCard params={params} />
        </div>
      </ContentWrapper>
    </MarginTopWrapper>
  );
};

export default page;
