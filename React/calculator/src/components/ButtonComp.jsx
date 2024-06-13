// eslint-disable-next-line react/prop-types
function ButtonComp({ handleClick }) {
  const Arr = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    ".",
    "C",
    "=",
  ];

  return (
    <div className="flex flex-wrap gap-6 mb-4 justify-center align-middle">
      {Arr.map((Num) => {
        return (
          <button
            onClick={() => handleClick(Num)}
            key={Num}
            className="h-[60px] w-[60px] bg-gray-500 text-white rounded-xl"
          >
            {Num}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonComp;
