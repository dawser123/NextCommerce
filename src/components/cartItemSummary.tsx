import Link from "next/link";
import ProductPrice from "./productPrice";
import { useCartContext } from "@/contexts/cartContext";

const CartItemSummary = ({ subTotal }: { subTotal: number }) => {
  const { setItems } = useCartContext();
  const shippingCost = 49;
  const orderTotal = subTotal + shippingCost;

  const orderedItems = () => {
    alert('Are you sure?(checkout in proggress)')
    setItems([]);
  };
  return (
    <div className="flex h-1/4 lg:top-[120px] flex-col lg:sticky gap-5 rounded-lg bg-gray-900 p-6 shadow-lg lg:w-1/4">
      <h3 className="mb-6 text-2xl font-bold text-primaryTextColor">
        Order Summary
      </h3>
      <div className="flex justify-between text-primaryTextColor">
        <p>Subtotal</p>
        <ProductPrice className="font-normal" productPrice={subTotal} />
      </div>
      <div className="flex justify-between text-primaryTextColor">
        <p>Shipping</p>
        <ProductPrice className="font-normal" productPrice={shippingCost} />
      </div>
      <div className="flex justify-between text-primaryTextColor">
        <p className="text-lg font-bold">Order Total</p>
        <div className="text-lg font-bold text-primaryColor">
          <ProductPrice productPrice={orderTotal} />
        </div>
      </div>
      <Link href={"/"}>
        <button
          onClick={orderedItems}
          type="submit"
          className="w-full rounded-md bg-secondaryColor py-2"
        >
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartItemSummary;
