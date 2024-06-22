import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItem, setCartItem } = useContext(CartContext);

  const handleClick = () => {
    if (cartItem.length === 0) {
      alert("Please add items into cart");
      return; // Exit function early if cart is empty
    }

    const confirmPayment = window.confirm("Do You Want To Pay");

    if (confirmPayment) {
      alert("Payment Success");
      setCartItem([]);
    }
  };

  useEffect(() => {
    console.log("Cart Items:", cartItem); // Log cart items for debugging
  }, [cartItem]);

  let total = cartItem.reduce((a, b) => a + Number(b.Price), 0);

  return (
    <div className="w-[350px] p-4 border-2 border-gray-500">
      <h1 className="text-2xl font-bold mb-4">Cart Items Added By You</h1>
      <ul className="list-disc pl-5 mb-4">
        {cartItem.map((item, index) => (
          <li key={index} className="text-lg">
            {item.Name} - ${item.Price}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold pb-4">Total Bill = ${total}</h2>

      <button
        onClick={handleClick}
        className={`py-2 w-full bg-slate-700 text-white `}
      >
        Pay Now
      </button>
    </div>
  );
};

export default Cart;
