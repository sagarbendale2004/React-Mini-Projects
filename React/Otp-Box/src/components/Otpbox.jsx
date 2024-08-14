import React, { useState, useRef, useEffect } from "react";

function Otpbox() {
  const [arr, setArr] = useState(new Array(6).fill(""));
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef([]);

  // Focus the first input box on initial render
  useEffect(() => {
    ref.current[0].focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only numeric values and ensure it's a single character
    if (/^[0-9]$/.test(value)) {
      const copyOtp = [...arr];
      copyOtp[index] = value;
      setArr(copyOtp);

      // Move focus to the next input if the current input is filled
      if (index < arr.length - 1) {
        setCurrentIndex(index + 1);
        ref.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    const key = e.key;

    if (key === "Backspace" || key === "Delete") {
      const copyOtp = [...arr];
      copyOtp[index] = "";
      setArr(copyOtp);

      // Move focus to the previous input
      if (index > 0) {
        setCurrentIndex(index - 1);
        ref.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="otp-field">
      {arr.map((val, index) => (
        <input
          type="text"
          className={`box ${index === currentIndex ? "toggle" : ""}`}
          key={index}
          value={val}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(curr) => (ref.current[index] = curr)}
          maxLength={1}
        />
      ))}
    </div>
  );
}

export default Otpbox;
