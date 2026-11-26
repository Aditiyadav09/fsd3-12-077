import React from "react";

const Mybutton = () => {
  const handleClick = () => {
    alert("Button Clicked");
  };
  return (
    <div>
      <p>Click on the button </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Mybutton;
