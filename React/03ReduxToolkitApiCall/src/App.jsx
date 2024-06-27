import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./redux/slices/comments";

function App() {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.comment);
  const { data = [], isLoading = false } = comment;

  if (isLoading) {
    return <h1 style={{ textAlign: "center" }}>Loading....</h1>;
  }

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          dispatch(fetchComments());
        }}
      >
        Fetch Comments
      </button>
      <div className="main">
        {data.map((e) => (
          <div className="card" key={e.id}>
            <h2>{`Name = ${e.name}`}</h2>
            <h3>{`Email = ${e.email}`}</h3>
            <h3>{`Body = ${e.body}`}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
