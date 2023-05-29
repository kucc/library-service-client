const NoticeBoardContent = ({
  notice_id = "No",
  user_id,
  title = "제목",
  notice_content,
  creation_date = "작성일",
  modification_date,
  isTitle = false,
}) => {
  const fontWeight = isTitle ? "font-700" : "font-500";
  const borderWidth = isTitle ? "border-b-[2px]" : "border-b-[1px]";
  const height = isTitle ? "h-[36px]" : "h-[100px]";
  const dateColor = isTitle ? "text-[#000000]" : "text-[#777777]";

  return (
    <div className={`flex ${fontWeight} border-black ${borderWidth} items-center ${height}`}>
      <div className="w-1/6 text-left">{notice_id}</div>
      <div className="w-4/6 text-left text-ellipsis">{title}</div>
      <div className={`w-1/6 text-left ${dateColor}`}>{creation_date}</div>
    </div>
  );
};

export default NoticeBoardContent;
