"use client";
import { useCart } from "$/store";

const Cart = (props: any) => {
  const { products, setProduct } = useCart();
  const { products: items, productData } = props;

  if ((products as any[]).some((data) => data.title === productData.title)) {
    return (
      <button
        // onClick={() => setProduct(productData)}
        className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
      >
        Remove from cart
      </button>
    );
  }

  return (
    <button
      onClick={() => setProduct(productData)}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      Add to cart
    </button>
  );
};

export default Cart;
