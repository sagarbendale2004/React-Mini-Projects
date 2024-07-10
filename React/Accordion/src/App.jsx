import "./App.css";
import HandleData from "./components/HandleData";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  const setVisible = (id) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  return (
    <div>
      {data.map((elem) => (
        <HandleData
          key={elem.id}
          elem={elem}
          setVisible={setVisible}
          selected={selected}
        />
      ))}
    </div>
  );
}

export default App;
