import React from "react";

const Grid = ({ children, ...props }) => {
  return (
    <div
      className="grid auto-rows-[192px] grid-cols-3 gap-6 max-w-3xl mx-auto mt-10
  "
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
