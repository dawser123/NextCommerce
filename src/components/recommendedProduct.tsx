import { Product } from "@/types/product";
import RecommendedProductInfo from "./recommendedProductInfo";
import Link from 'next/link';
import Image from 'next/image';

const RecommendedProduct =(({ product }: { product: Product }) => {
  return (
    <li
      key={product.id}
      className="flex h-[350px] w-[200px] max-w-[200px] flex-col items-center justify-center md:w-[250px] md:max-w-[250px]"
    >
      <Link
        className="flex h-full flex-col"
        href={`/${product.category}/${product.id}`}
      >
        <div className="relative w-[200px]">
          <Image
            src={product.image}
            className="h-[200px] w-[200px] rounded-lg shadow-lg brightness-75 transition-opacity duration-300 hover:opacity-60"
            alt={product.title}
            width={200}
            height={200}
            quality={100}
          />

          <div className="absolute left-0 top-0 rounded bg-black/100 p-1 text-xs text-white">
            {product.category}
          </div>
        </div>
        <RecommendedProductInfo product={product} />
      </Link>
    </li>
  );
});


export default RecommendedProduct;
