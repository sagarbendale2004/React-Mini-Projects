import React from "react";

function HandleData(props) {
  const { id, title, body } = props.elem;

  return (
    <div className="border-2 border-gray-400 m-4 mx-80">
      <h1
        className="bg-gray-500 text-white px-4 cursor-pointer py-4"
        onClick={() => props.setVisible(id)}
      >
        {title}
      </h1>
      {props.selected.includes(id) ? <p className="px-4">{body}</p> : ""}
    </div>
  );
}

export default HandleData;
