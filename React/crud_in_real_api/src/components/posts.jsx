import React, { useEffect, useState } from "react";
import { getPosts, deletePosts, EditData } from "../Api/PostsApi";
import InputForm from "./InputForm";

function posts() {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  const getPostData = async () => {
    const res = await getPosts();
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  const handleDelete = async (id) => {
    const res = await deletePosts(id);
    if (res.status == 200) {
      const updatedPosts = data.filter((post) => post.id !== id);
      setData(updatedPosts);
    }
  };

  const handleEdit = (currElem) => setUpdateDataApi(currElem);

  return (
    <>
      <InputForm
        data={data}
        setData={setData}
        updateDataApi={updateDataApi}
        setUpdateDataApi={setUpdateDataApi}
      />

      <section>
        <ul>
          {data.map((currElem) => {
            const { id, body, title } = currElem;
            return (
              <li key={id}>
                <div className="card">
                  <p className="card-id">{id}</p>
                  <p className="card-title">Title - {title}</p>
                  <p className="card-body">Body - {body}</p>
                  <div className="card-buttons">
                    <button onClick={() => handleEdit(currElem)}>Edit</button>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default posts;
