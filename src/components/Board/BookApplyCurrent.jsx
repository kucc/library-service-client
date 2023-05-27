const BookApplyCurrent = ({ num = "No", bookInfo, date = "신청일", isTitle = false }) => {
  const fontWeight = isTitle ? "font-700" : "font-500";
  const borderWidth = isTitle ? "border-b-[2px]" : "border-b-[1px]";
  const height = isTitle ? "h-[36px]" : "h-[100px]";
  const dateColor = isTitle ? "text-[#000000]" : "text-[#777777]";

  return (
    <div className={`flex ${fontWeight} border-black ${borderWidth} items-center ${height}`}>
      <div className="w-1/6 text-left">{num}</div>
      <div className="w-4/6 ">
        {isTitle ? (
          <div>도서</div>
        ) : (
          bookInfo && (
            <div className="flex">
              <div className="w-3/4 text-ellipsis">{bookInfo.title}</div>
              <div className={`${dateColor}`}>{bookInfo.publish}</div>
            </div>
          )
        )}
      </div>
      <div className={`w-1/6 text-left ${dateColor}`}>{date}</div>
    </div>
  );
};
export default BookApplyCurrent;
