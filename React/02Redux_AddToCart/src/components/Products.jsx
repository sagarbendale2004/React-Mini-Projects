import useProducts from "../hooks/useProducts";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { data } = useProducts();
  return (
    <div className="product-list m-10">
      {data.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <h2 className="product-title">{product.title}</h2>
          <h3 className="product-category">{product.category}</h3>
          <h4 className="product-rating">{`Rating -  ${product.rating.rate}/5`}</h4>
          <p className="product-price">${product.price}</p>
          <button onClick={() => dispatch(addItem(product))} className="btn">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}
