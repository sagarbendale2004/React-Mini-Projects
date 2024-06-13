// eslint-disable-next-line react/prop-types
function InputComp({ displayVal }) {
  return (
    <input
      type="text"
      value={displayVal}
      className="w-[350px] m-4 p-4 bg-gray-500 outline-white text-white text-2xl rounded-xl"
      readOnly
    />
  );
}

export default InputComp;
