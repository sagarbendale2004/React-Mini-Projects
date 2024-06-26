import { useEffect, useState } from "react";

export default function useProducts() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return { data };
}
