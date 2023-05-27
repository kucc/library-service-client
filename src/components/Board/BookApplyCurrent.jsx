const BookApplyCurrent = ({ num = "No", bookInfo, date = "신청일", isTitle = false }) => {
  const fontWeight = isTitle ? 700 : 500;
  const borderWidth = isTitle ? 2 : 1;
  const height = isTitle ? 36 : 100;
  const dateColor = isTitle ? "#000" : "#777777";

  return (
    <div
      className={`flex font-${fontWeight} border-black border-b-[${borderWidth}px] items-center h-[${height}px]`}
    >
      <div className="w-1/6 text-left">{num}</div>
      <div className="w-4/6 ">
        {isTitle ? (
          <div>도서</div>
        ) : (
          bookInfo && (
            <div className="flex">
              <div className="w-3/4 text-ellipsis">{bookInfo.title}</div>
              <div className={`text-[${dateColor}]`}>{bookInfo.publish}</div>
            </div>
          )
        )}
      </div>
      <div className={`w-1/6 text-left text-[${dateColor}]`}>{date}</div>
    </div>
  );
};
export default BookApplyCurrent;
