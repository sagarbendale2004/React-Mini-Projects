import React from "react";
import Stepper from "../src/components/Stepper";
import { steps } from "../src/steps";

function App() {
  return (
    <div className="main">
      <Stepper stepperCont={steps} />
    </div>
  );
}

export default App;
