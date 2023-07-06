import React from "react";

const RegisterInput = ({ label, placeholder, value, onChangeFn, type = "text" }) => {
  const onChangeInput = (event) => {
    onChangeFn(event.target.value);
  };
  return (
    <div
      className={`flex flex-col w-[600px] gap-[20px] justify-start items-center mb-[30px] text-left`}
    >
      <label className="flex justify-start w-full text-[20px] font-normal">{label}</label>
      <input
        type={type}
        className="border-2 w-full h-[60px] py-[18px] px-[30px] rounded-full bg-[#EBEBEB] focus:outline-none placeholder:text-[#777]"
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
      />
    </div>
  );
};

export default RegisterInput;
