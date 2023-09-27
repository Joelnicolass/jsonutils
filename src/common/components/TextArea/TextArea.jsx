import React from "react";

const TextArea = ({ error, ...props }) => {
  return (
    <div className="flex h-full w-full  relative p-[5px] rounded-[20px]">
      <textarea
        className="h-full w-full resize-none bg-transparent text-gray-50 outline-none overflow-scroll p-3 rounded-[20px] bg-gradient-to-b from-gray-950 to-gray-900 bg-gradient-to-r border-2 border-gray-700 border-opacity-50 focus:border-opacity-100 focus:border-gray-500"
        {...props}
      />
    </div>
  );
};

export default TextArea;
