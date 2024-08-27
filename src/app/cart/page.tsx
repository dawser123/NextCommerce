import CartItemCard from "@/components/cartItemCard";
import ContentWrapper from "@/components/contentWrapper";
import MarginTopWrapper from "@/components/marginTopWrapper";
const page = () => {
  return (
    <MarginTopWrapper>
      <ContentWrapper>
        <div className="w-full">
          <h2 className="mb-10 text-left text-2xl">My Cart</h2>
        </div>
        <CartItemCard />
      </ContentWrapper>
    </MarginTopWrapper>
  );
};

export default page;
