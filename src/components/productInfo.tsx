"use client";
import { Product } from "@/types/product";
import ProductPrice from "./productPrice";
import { useCartContext } from "@/contexts/cartContext";

const ProductInfo = ({ product }: { product: Product }) => {
  const { addItemToCart, isItemInCart } = useCartContext();
  const handleAddItemToCart = () => {
    addItemToCart(product);
  };
  const isInCart = isItemInCart(product.id);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="leading-relaxed">{product.description}</p>
      <ProductPrice productPrice={product.price} />
      <button
        disabled={isInCart}
        onClick={handleAddItemToCart}
        className={`rounded-lg ${isInCart ? 'bg-secondaryColor/40 hover:bg-secondaryColor/40 ':'hover:bg-secondaryColor/70' } bg-secondaryColor py-3 duration-300 `}
      >
        {isInCart ? 'Added to cart':'Add to cart'}
      </button>
    </div>
  );
};

export default ProductInfo;
