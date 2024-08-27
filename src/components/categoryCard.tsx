import Link from "next/link";
import { Product } from "@/types/product";
import ProductImageCard from "./productImage";
import { requests } from "@/api/requests";
import ProductPrice from "./productPrice";
const CategoryCard = async ({ params }: { params: { category: string } }) => {
  const response = await fetch(`${requests.categoryData}${params.category}`);
  const data: Product[] = await response.json();
  return (
    <>
      {data.map(({ id, image, title, price }) => (
        <li
          key={id}
          className="relative flex w-[250px] cursor-pointer flex-col duration-500 hover:scale-95"
        >
          <Link href={`/${params.category}/${id}`} className="block">
            <ProductImageCard src={image} alt={title} />
          </Link>
          <div className="flex flex-grow flex-col">
            <h3 className="py-4 text-sm font-bold text-primaryTextColor md:text-base">
              {title}
            </h3>
            <ProductPrice productPrice={price} />
          </div>
        </li>
      ))}
    </>
  );
};

export default CategoryCard;
