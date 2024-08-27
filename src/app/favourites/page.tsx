import ContentWrapper from "@/components/contentWrapper";
import MarginTopWrapper from "@/components/marginTopWrapper";
import Image from "next/image";

const favourites = () => {
  return (
    <MarginTopWrapper>
      <ContentWrapper>
        <div className="w-full">
          <h2 className="border-b py-2 text-left text-2xl">Favourites</h2>
          <div>
            {/* <Image /> */}
            <div>
              <h3>Title</h3>
              <p>
                price <span>10$</span>
              </p>
              <div>
                <button>delete</button>
                <button>add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </MarginTopWrapper>
  );
};

export default favourites;
