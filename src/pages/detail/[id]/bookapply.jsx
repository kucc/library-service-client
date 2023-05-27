import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

import BoardTitle from "@/components/board/BoardTitle";
import BookApplyCurrent from "@/components/board/BookApplyCurrent";
import { headerItemState } from "@/recoil/atoms/headerItemAtom";
import { useRecoilValue } from "recoil";

const testData = [
  {
    num: "03",
    bookInfo: { title: "객체지향 자바 프로그래밍", publish: "에이콘출판" },
    date: "2023. 05. 14",
  },
  {
    num: "02",
    bookInfo: { title: "모던 자바스크립트 deep dive", publish: "머시기출판" },
    date: "2023. 05. 13",
  },
  {
    num: "01",
    bookInfo: { title: "자료구조와 알고리즘", publish: "Oreily" },
    date: "2023. 05. 12",
  },
];

const BookApply = () => {
  const headerItems = useRecoilValue(headerItemState);
  return (
    <>
      <Header headerItems={headerItems} />
      <div className="w-[960px] m-auto mb-[200px]">
        <div className="mt-[53px]">arrow</div>
        <BoardTitle title="도서신청 현황" className="mt-[53px] mb-[49px]" />
        <div className="w-full">
          <BookApplyCurrent isTitle={true} />
          {testData.map((book) => {
            return (
              <BookApplyCurrent
                key={book.num}
                num={book.num}
                bookInfo={book.bookInfo}
                date={book.date}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookApply;
