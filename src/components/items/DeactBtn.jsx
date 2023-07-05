import React from "react";

const DeactBtn = ({ width = 120, height = 50, text }) => {
  return (
    <button
      className={`w-[${width}px] h-[${height}px] rounded-full bg-black m-[20px] ease-out duration-300 shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]`}
    >
      <span className="text-center w-[56px] h-[20px] font-normal text-[20px] text-white ">
        {text}
      </span>
    </button>
  );
};

export default DeactBtn;
