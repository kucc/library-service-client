import noticeBoardState from "@components/recoil/atoms/noticeBoardAtom";
import Link from "next/link";
import { useRecoilValue } from "recoil";

const Notice = ({ title = "서버점검안내", date = "2023.03.12" }) => {
  return (
    <div
      className={`w-[349px] h-[33px] py-[7px] mb-[27px] flex text-[15px] items-center font-normal active:text-[#777777]`}
    >
      <div className="mr-[92px] text-left">{title}</div>
      <div className="ml-[92px] text-right text-[#000000B2]">{date}</div>
    </div>
  );
};

const NoticeTitle = (props) => {
  return (
    <>
      <div className="text-[20px] py-[10px] mb-[18px]">{props.text}</div>
    </>
  );
};

const NoticeMore = () => {
  return (
    <>
      <button className="flex">
        <div className="mr-[5px]">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="mask0_776_2196" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
              <rect width="25" height="25" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_776_2196)">
              <path
                d="M11.4583 19.7916V13.5416H5.20834V11.4583H11.4583V5.20825H13.5417V11.4583H19.7917V13.5416H13.5417V19.7916H11.4583Z"
                fill="#777777"
              />
            </g>
          </svg>
        </div>
        <div className="text-[16px] text-[#777777]">전체보기</div>
      </button>
    </>
  );
};

const NoticeBoard = (props) => {
  // 테스트 데이터
  const notice = useRecoilValue(noticeBoardState);

  // console.log(notice);
  return (
    <>
      <NoticeTitle text={props.text}></NoticeTitle>
      {notice.map((notice_content) => {
        return (
          <Link
            key={notice_content.notice_id}
            href={{ pathname: "/notice", query: { notice_id: notice_content.notice_id } }}
          >
            <Notice title={notice_content.title} date={notice_content.creation_date}></Notice>
          </Link>
        );
      })}

      <Link href="/notice">
        <NoticeMore></NoticeMore>
      </Link>
    </>
  );
};

export default NoticeBoard;
