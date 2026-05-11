import { Product } from "@/types/product";
import Carusel from "./carusel";
import RecommendedProduct from "./recommendedProduct";
import { requests } from "@/api/requests";
import ContentWrapper from "./contentWrapper";

const RecommendedProducts = async () => {
  try {
    const response = await fetch(requests.limitData, {
      next: { revalidate: 3600 },
    });
    if (!response.ok)
      throw new Error(
        `Failed to fetch recommended products: ${response.status}`,
      );
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
  } catch (error) {
    console.error("Error fetching recommended products:", error);
    return (
      <div className="my-8">
        <ContentWrapper>
          <h2 className="text- mb-5 text-2xl font-bold md:text-left">
            Recommended for you
          </h2>
          <div className="flex flex-col items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-8">
            <p className="text-gray-600">
            currently unable to load recommendations.
            </p>
            <p className="text-sm text-gray-500">
              Please refresh the page to try again.
            </p>
          </div>
        </ContentWrapper>
      </div>
    );
  }
};

export default RecommendedProducts;
