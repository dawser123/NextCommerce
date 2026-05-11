import { requests } from "@/api/requests";
import ProductImage from "@/components/productImage";
import { Product } from "@/types/product";
import ProductFeatures from "./productFeatures";
import ProductInfo from "./productInfo";

const ProductCard = async ({ params }: { params: { id: string } }) => {
  try {
    const { id } = params;
    const response = await fetch(`${requests.singleProductData}${id}`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok)
      throw new Error(`Failed to fetch product: ${response.status}`);
    const product: Product = await response.json();
    return (
      <>
        <ProductImage
          className={"mx-auto min-w-[300px]"}
          src={product.image}
          alt={product.title}
        />
        <div>
          <div className="flex flex-col gap-10">
            <ProductInfo product={product} />
            <ul>
              <ProductFeatures />
            </ul>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center gap-4 rounded-lg border border-gray-200 bg-gray-50 p-8">
        <div className="text-5xl">⚠️</div>
        <h3 className="text-xl font-bold text-primaryTextColor">
          Product Not Available
        </h3>
        <p className="max-w-md text-center text-sm text-gray-600">
          We couldn't load the product details. Please try again later or go
          back to browse other items.
        </p>
      </div>
    );
  }
};

export default ProductCard;
