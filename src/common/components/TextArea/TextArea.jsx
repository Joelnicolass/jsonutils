import React from "react";

const TextArea = ({ error, ...props }) => {
  return (
    <div className="flex h-full w-full  relative p-[5px] rounded-[20px]">
      <textarea
        className="h-full w-full resize-none text-gray-50 outline-none overflow-scroll p-3 rounded-[20px] border-2 border-gray-700 border-opacity-50 focus:border-opacity-100 focus:border-gray-500 backdrop-blur-sm bg-white/10"
        {...props}
      />
    </div>
  );
};

export default TextArea;
