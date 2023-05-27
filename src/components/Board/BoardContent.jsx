const BoardContent = ({ num = "No", title = "제목", date = "작성일", isTitle = false }) => {
  const fontWeight = isTitle ? "font-700" : "font-500";
  const borderWidth = isTitle ? "border-b-[2px]" : "border-b-[1px]";
  const height = isTitle ? "h-[36px]" : "h-[100px]";
  const dateColor = isTitle ? "text-[#000000]" : "text-[#777777]";

  return (
    <div className={`flex ${fontWeight} border-black ${borderWidth} items-center ${height}`}>
      <div className="w-1/6 text-left">{num}</div>
      <div className="w-4/6 text-left text-ellipsis">{title}</div>
      <div className={`w-1/6 text-left ${dateColor}`}>{date}</div>
    </div>
  );
};

export default BoardContent;
