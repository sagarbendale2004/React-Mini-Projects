import React, { useState } from "react";
import { steps } from "../steps";

function Stepper({ stepperCont }) {
  const [current, setCurrent] = useState(0);
  const length = steps.length - 1;

  const handleBack = () => {
    if (current > 0) setCurrent(current - 1);
  };
  const handleNext = () => {
    if (current < length) setCurrent(current + 1);
  };

  return (
    <>
      <div>
        {steps.map((step, index) => {
          return (
            <div className="step-container" key={index}>
              <div className={`step-count ${index <= current ? "active" : ""}`}>
                {index + 1}
                {index < length && (
                  <div
                    className={`line ${index < current ? "active" : ""}`}
                  ></div>
                )}
              </div>
              <div
                className={`step-label ${
                  index <= current ? "active-font" : ""
                }`}
              >
                {step.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="stepper-content">
        <p>{stepperCont[current]?.content}</p>
      </div>

      <div className="btns">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default Stepper;
