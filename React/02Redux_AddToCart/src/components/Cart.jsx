import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <h1 className="p-10 bg-gray-900 text-white text-3xl px-24 flex justify-between">
      Your Grand Total is - ${total.toFixed(2)}
      <span className="flex text-4xl relative">
        <span className="text-xl bg-pink-200 rounded-2xl px-2 text-black absolute left-4 bottom-4">
          {cartItems.length}
        </span>
        <FaCartShopping />
      </span>
    </h1>
  );
}

export default Cart;
