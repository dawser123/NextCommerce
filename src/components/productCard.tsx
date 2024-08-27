import { requests } from "@/api/requests";
import ProductImageCard from "@/components/productImage";
import { Product } from "@/types/product";
import ProductFeatures from "./productFeatures";
import ProductInfo from "./productInfo";
const ProductCard = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const response = await fetch(`${requests.singleProductData}${id}`);
  const product: Product = await response.json();
  return (
    <>
      <ProductImageCard
        className={"mx-auto "}
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
};

export default ProductCard;
