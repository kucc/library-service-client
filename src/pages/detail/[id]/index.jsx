import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import BoardContent from "@/components/Board/BoardContent";
import BoardTitle from "@/components/Board/BoardTitle";
import { headerItemState } from "@/recoil/atoms/headerItemAtom";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import LeftArrow from "@/components/items/LeftArrow";

const testData = [
  { num: "03", book_title: "서버 점검 안내", requset_date: "2023. 05. 14" },
  { num: "02", book_title: "서버 점검 안내", requset_date: "2023. 05. 13" },
  { num: "01", book_title: "서버 점검 안내", requset_date: "2023. 05. 12" },
];

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const headerItems = useRecoilValue(headerItemState);

  return (
    <>
      <Header headerItems={headerItems} />
      <div className="w-[960px] m-auto mb-[200px]">
        <div className="mt-[53px]">
          <LeftArrow />
        </div>
        <BoardTitle book_title="공지사항" className="mt-[53px] mb-[49px]" />
        <div className="w-full">
          <BoardContent isTitle={true} />
          {testData.map((board) => {
            return (
              <BoardContent
                key={board.num}
                num={board.num}
                book_title={board.book_title}
                requset_date={board.requset_date}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;