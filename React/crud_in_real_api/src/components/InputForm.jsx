import React, { useEffect, useState } from "react";
import { PostData, EditData } from "../Api/PostsApi";

function InputForm({ data, setData, setUpdateDataApi, updateDataApi }) {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updateDataApi).length === 0;

  //  get the updated data and shows it into input

  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addPostData = async () => {
    const res = await PostData(addData);
    console.log(res);

    if (res.status == 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  const updatePostData = async () => {
    const res = await EditData(updateDataApi.id, addData);
    setData((prev) => {
      return prev.map((currElem) => {
        return currElem.id === updateDataApi.id ? res.data : currElem;
      });
    });
    setAddData({ title: "", body: "" });
    setUpdateDataApi({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    addPostData();
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="input-section">
      <input
        type="text"
        name="title"
        placeholder="Add Title"
        className="input-field"
        value={addData.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="body"
        placeholder="Add Post"
        className="input-field"
        value={addData.body}
        onChange={handleInputChange}
      />
      <button className="add-btn" value={isEmpty ? "Add" : "Edit"}>
        {isEmpty ? "Add" : "Edit"}
      </button>
    </form>
  );
}

export default InputForm;
