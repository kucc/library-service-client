const PurchaseInput = ({ label, placeholder, value, onChangeFn }) => {
  const onChangeInput = (event) => {
    onChangeFn(event.target.value);
  };
  return (
    <div className={`flex flex-col gap-[16px] justify-between items-center  mb-[30px]`}>
      <label className="w-full">{label}</label>
      {label === "신청 사유" ? (
        <textarea
          className="w-full border-2 py-[18px] px-[30px] resize-none bg-[#EBEBEB] rounded-3xl font-[20px] h-[180px] focus:outline-none  placeholder:text-[#777]"
          placeholder="입력하세요"
        ></textarea>
      ) : (
        <input
          type="text"
          className="border-2 w-full h-[60px] py-[18px] px-[30px] rounded-full bg-[#EBEBEB] focus:outline-none placeholder:text-[#777]"
          placeholder={placeholder}
          value={value}
          onChange={onChangeInput}
        />
      )}
    </div>
  );
};

export default PurchaseInput;
