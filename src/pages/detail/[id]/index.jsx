import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import BoardContent from "@/components/Board/BoardContent";
import BoardTitle from "@/components/Board/BoardTitle";
import { headerItemState } from "@/recoil/atoms/headerItemAtom";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

const testData = [
  { num: "03", title: "서버 점검 안내", date: "2023. 05. 14" },
  { num: "02", title: "서버 점검 안내", date: "2023. 05. 13" },
  { num: "01", title: "서버 점검 안내", date: "2023. 05. 12" },
];

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const headerItems = useRecoilValue(headerItemState);

  return (
    <>
      <Header headerItems={headerItems} />
      <div className="w-[960px] m-auto mb-[200px]">
        <div className="mt-[53px]">arrow</div>
        <BoardTitle title="공지사항" className="mt-[53px] mb-[49px]" />
        <div className="w-full">
          <BoardContent isTitle={true} />
          {testData.map((board) => {
            return (
              <BoardContent key={board.num} num={board.num} title={board.title} date={board.date} />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
