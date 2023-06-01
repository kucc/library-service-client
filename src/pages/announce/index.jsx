import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import NoticeBoardContent from "@/components/Board/NoticeBoardContent";
import BoardTitle from "@/components/Board/BoardTitle";
import { headerItemState } from "@/recoil/atoms/headerItemAtom";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import LeftArrow from "@/components/items/LeftArrow";

const testData = [
  { notice_id: "03", title: "서버 점검 안내", creation_date: "2023. 05. 14" },
  { notice_id: "02", title: "서버 점검 안내", creation_date: "2023. 05. 13" },
  { notice_id: "01", title: "서버 점검 안내", creation_date: "2023. 05. 12" },
];

const Announce = () => {
  const router = useRouter();
  const { id } = router.query;
  const headerItems = useRecoilValue(headerItemState);

  return (
    <>
      <Header headerItems={headerItems} />
      <div className="w-[960px] m-auto mb-[200px]">
        <div className="mt-[53px]">
          <Link href="/">
            <LeftArrow />
          </Link>
        </div>
        <BoardTitle title="공지사항" className="mt-[53px] mb-[49px]" />
        <div className="w-full">
          <NoticeBoardContent isTitle={true} />
          {testData.map((board) => {
            return (
              <NoticeBoardContent
                key={board.notice_id}
                notice_id={board.notice_id}
                title={board.title}
                creation_date={board.creation_date}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Announce;
