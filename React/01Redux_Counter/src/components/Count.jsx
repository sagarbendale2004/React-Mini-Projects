import { useSelector, useDispatch } from "react-redux";

function Count() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="center">
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <h2>
        Start Clicking - <span>{count}</span>
      </h2>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
}

export default Count;
