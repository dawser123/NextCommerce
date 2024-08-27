import { Product } from "@/types/product";
import Carusel from "./carusel";
import RecommendedProduct from "./recommendedProduct";
import { requests } from "@/api/requests";
import ContentWrapper from "./contentWrapper";
const RecommendedProducts = async () => {
  const response = await fetch(requests.limitData);
  const data: Product[] = await response.json();
  return (
    <div className="my-8">
      <ContentWrapper>
        <h2 className="text- mb-5 text-2xl font-bold md:text-left">
          Recommended for you
        </h2>
      </ContentWrapper>
      <ul>
        <Carusel>
          {data.map((product) => (
            <RecommendedProduct key={product.id} product={product} />
          ))}
        </Carusel>
      </ul>
    </div>
  );
};

export default RecommendedProducts;
