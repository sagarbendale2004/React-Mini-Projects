import { MdDelete } from "react-icons/md";
// eslint-disable-next-line react/prop-types
function TodoLi({ name, date, onDelete }) {
  return (
    <li className="flex items-center justify-between min-h-10 mb-4">
      <h1 className="text-2xl ml-6 w-[40%] text-wrap">{name}</h1>
      <h1 className="text-2xl w-[25%]">{date}</h1>
      <button
        className="p-3 border-gray-500 w-[20%] font-semibold text-xl rounded-2xl bg-red-900 text-white mr-6"
        onClick={onDelete}
      >
        <span className="flex items-center justify-center gap-2">
          Delete <MdDelete />
        </span>
      </button>
    </li>
  );
}

export default TodoLi;
