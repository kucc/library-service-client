const PurchaseInput = ({ label, placeholder, value, onChangeFn }) => {
  const onChangeInput = (event) => {
    onChangeFn(event.target.value);
  };
  return (
    <div className={`flex  h-[60px] justify-between items-center mb-[30px]`}>
      <label className="w-[100px] mr-[60px]">{label}</label>
      <input
        type="text"
        className="border-2 max-w-[500px] w-3/4 h-[60px]  py-[18px] px-[30px] rounded-full bg-[#EBEBEB] focus:outline-none placeholder:text-[#777]"
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
      />
    </div>
  );
};

export default PurchaseInput;
