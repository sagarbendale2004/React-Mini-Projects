import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  const colors = ["red", "green", "orange", "blue", "purple", "indigo", "gray", "olive", "black", "skyblue"];

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex justify-center bottom-16 inset-x-0 px-4">
        <div className="flex flex-wrap justify-center px-4 py-2 text-xl bg-white gap-4 shadow-lg rounded-3xl">
          {colors.map((clr) => (
            <button
              key={clr}
              onClick={() => setColor(clr)}
              className="px-4 py-1 rounded-2xl outline-none text-white"
              style={{ backgroundColor: clr }}
            >
              {clr.charAt(0).toUpperCase() + clr.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;