import React from "react";

const DefaultBtn = ({ width = 120, height = 50, text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`w-[${width}px] h-[${height}px] rounded-full bg-crimson-500 ease-out duration-300 shadow-[0_4px_4px_rgba(0,0,0,0.3)] active:bg-[#a71622]`}
    >
      <span className="text-center h-[20px] w-[56px] font-normal text-[20px] text-white">
        {text}
      </span>
    </button>
  );
};

export default DefaultBtn;
