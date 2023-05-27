const BoardTitle = ({ title, className }) => {
  return (
    <>
      <div className={`${className} text-[30px]`}>{title}</div>
    </>
  );
};

export default BoardTitle;
