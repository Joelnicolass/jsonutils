import React from "react";

const Title = ({ textColor, textPlain, ...props }) => {
  return (
    <h1>
      <span
        className="bg-gradient-to-r from-sky-300 via-blue-500 to-purple-600
         text-transparent bg-clip-text text-3xl
  "
        {...props}
      >
        {textColor}
      </span>{" "}
      {textPlain}
    </h1>
  );
};

export default Title;
