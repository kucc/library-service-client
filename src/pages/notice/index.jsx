import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import NoticeBoardItemAccordian from "@components/components/Board/NoticeBoardAccordian";
import BoardTitle from "@/components/Board/BoardTitle";
import { headerItemState } from "@/recoil/atoms/headerItemAtom";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import LeftArrow from "@/components/items/LeftArrow";
import { useState } from "react";
import noticeBoardState from "@components/recoil/atoms/noticeBoardAtom";

// const testData = [
//   {
//     notice_id: "03",
//     title: "서버 점검 안내",
//     creation_date: "2023. 05. 14",
//     notice_content:
//       "2023년 05월 21일(목) 20시 ~ 22시 홈페이지 서비스 점검 안내 보다 안정적인 서비스를 위하여 서버 점검이 예정되어 있습니다. ○ 작업대상 : KUCC 서버 점검 ○ 작업일시 : 2023년 05월 21일(목) 20:00 ~ 2023년 05월 21일(목) 22:00 ○ 작업내용 : WEB/WAS 서비스 점검 작업시간 동안 홈페이지 연결이 불안정하거나 접속이 불가능할 수 있습니다. 홈페이지 이용에 불편을 끼쳐드려 죄송합니다. 보다 나은 서비스제공을 위하여 최선을 다하겠습니다. 감사합니다.",
//   },
//   {
//     notice_id: "02",
//     title: "서버 점검 안내",
//     creation_date: "2023. 05. 13",
//     notice_content:
//       "2023년 05월 21일(목) 20시 ~ 22시 홈페이지 서비스 점검 안내 보다 안정적인 서비스를 위하여 서버 점검이 예정되어 있습니다. ○ 작업대상 : KUCC 서버 점검 ○ 작업일시 : 2023년 05월 21일(목) 20:00 ~ 2023년 05월 21일(목) 22:00 ○ 작업내용 : WEB/WAS 서비스 점검 작업시간 동안 홈페이지 연결이 불안정하거나 접속이 불가능할 수 있습니다. 홈페이지 이용에 불편을 끼쳐드려 죄송합니다. 보다 나은 서비스제공을 위하여 최선을 다하겠습니다. 감사합니다.",
//   },
//   {
//     notice_id: "01",
//     title: "서버 점검 안내",
//     creation_date: "2023. 05. 12",
//     notice_content: "오늘 폐업함",
//   },
// ];

const Notice = () => {
  const router = useRouter();
  const { notice_id } = router.query;
  const notice_item = useRecoilValue(noticeBoardState);

  return (
    <>
      <div className="w-[960px] m-auto mb-[200px] min-h-[70vh] ">
        <div className="mt-[53px] w-fit">
          <Link href="/">
            <LeftArrow />
          </Link>
        </div>
        <BoardTitle title="공지사항" className="mt-[53px] mb-[49px]" />
        <div className="w-full">
          <div className={`flex font-700 border-black border-b-[2px] items-center h-[36px]`}>
            <div className="w-1/6 text-left">No</div>
            <div className="w-4/6 text-left text-ellipsis ">제목</div>
            <div className={`w-1/6 text-left text-[#000] `}>작성일</div>
          </div>
          {notice_item.map((notice) => {
            return (
              <NoticeBoardItemAccordian
                key={notice.notice_id}
                notice_id={notice.notice_id}
                title={notice.title}
                creation_date={notice.creation_date}
                notice_content={notice.notice_content}
                clicked_item={notice_id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notice;
