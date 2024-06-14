import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
function AddTodo({ handleNewItems }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setTodoDate(e.target.value);
  };

  const handleButtonClick = () => {
    todoName !== "" && todoDate !== ""
      ? handleNewItems(todoName, todoDate)
      : alert("Please fill all fields");
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo Here"
        className="p-3 m-6 w-[40%] border-2 border-gray-500 text-xl font-semibold"
        value={todoName}
        onChange={handleNameChange}
      />
      <input
        type="date"
        className="p-3 w-[25%] border-2 border-gray-500 font-semibold"
        value={todoDate}
        onChange={handleDateChange}
      />
      <button
        className="p-3 ml-6 border-2 border-gray-500 w-[20%]  text-xl font-semibold rounded-2xl bg-green-700 text-white"
        onClick={handleButtonClick}
      >
        <span className="flex justify-center gap-3 items-center">
          Add <IoAddCircle />
        </span>
      </button>
    </div>
  );
}

export default AddTodo;
