const Radio = ({ value, id, name, label }) => {
  return (
    <div className="flex gap-[65px] mb-[20px]">
      <input
        type="radio"
        value={value}
        id={id}
        name={name}
        className="accent-crimson-500 bg-slate-500"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Radio;
