import React from "react";

const Input = ({ isPassword = false, placeholder, className }) => {
  return (
    <>
      <input
        type="text"
        className={`w-[500px] h-[60px] py-[18px] px-[30px] bg-[#EBEBEB] rounded-full placeholder:text-[#777777] ${className}`}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
