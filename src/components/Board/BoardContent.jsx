const BoardContent = ({ num = "No", title = "제목", date = "작성일", isTitle = false }) => {
  const fontWeight = isTitle ? 700 : 500;
  const borderWidth = isTitle ? 2 : 1;
  const height = isTitle ? 36 : 100;
  const dateColor = isTitle ? "#000" : "#777777";
  console.log(fontWeight, borderWidth, height, dateColor);

  return (
    <div
      className={`flex font-${fontWeight} border-black border-b-[${borderWidth}px] items-center h-[${height}px]`}
    >
      <div className="w-1/6 text-left">{num}</div>
      <div className="w-4/6 text-left text-ellipsis">{title}</div>
      <div className={`w-1/6 text-left text-[${dateColor}]`}>{date}</div>
    </div>
  );
};

export default BoardContent;
