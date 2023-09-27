import React from "react";

const Title = ({ textColor, textPlain, ...props }) => {
  return (
    <h1>
      <span
        className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text text-3xl
  "
      >
        {textColor}
      </span>{" "}
      {textPlain}
    </h1>
  );
};

export default Title;
