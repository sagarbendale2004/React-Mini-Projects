import { useState } from "react";
import InputComp from "./components/InputComp";
import ButtonComp from "./components/ButtonComp";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState("");
  const handleClick = (Num) => {
    if (Num === "C") {
      setValue("");
    } else if (Num === "=") {
      let result = eval(value);
      setValue(result);
    } else {
      const newValue = value + Num;
      setValue(newValue);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[24rem] border-2 border-gray-500 rounded-xl max-h-min bg-orange-100">
        <InputComp displayVal={value}></InputComp>
        <ButtonComp handleClick={handleClick}></ButtonComp>
      </div>
    </div>
  );
}

export default App;
