import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Item = ({ name, price, url }) => {
  const { cartItem, setCartItem } = useContext(CartContext);

  const handleAddToCart = () => {
    setCartItem([...cartItem, { Name: name, Price: Number(price) }]);
  };

  return (
    <div className="w-[350px] max-h-min bg-gray-800 m-4 rounded-xl border-2 text-gray-400 border-gray-600 p-3">
      <img className="h-60 w-full rounded-2xl" src={url} alt="new image" />
      <h2 className="py-2 text-xl font-sans font-bold">
        Product Name : {name}
      </h2>
      <h2 className={`text-lg font-bold pb-2`}>Price : ${price}</h2>
      <button className={`py-2 w-full bg-slate-700`} onClick={handleAddToCart}>
        AddToCart
      </button>
    </div>
  );
};

export default Item;
