import Link from "next/link";
import { Product } from "@/types/product";
import ProductImageCard from "./productImage";
import { requests } from "@/api/requests";
import ProductPrice from "./productPrice";

const CategoryCard = async ({ params }: { params: { category: string } }) => {
  try {
    const response = await fetch(`${requests.categoryData}${params.category}`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok)
      throw new Error(`Failed to fetch category: ${response.status}`);
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
  } catch (error) {
    console.error("Error fetching category:", error);
    return (
      <li className="col-span-full w-full py-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-5xl">⚠️</div>
          <h3 className="text-xl font-bold text-primaryTextColor">
            Unable to Load Products
          </h3>
          <p className="max-w-md text-center text-sm text-gray-600">
            Please try again later.
          </p>
        </div>
      </li>
    );
  }
};

export default CategoryCard;
