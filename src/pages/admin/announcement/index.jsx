import RegisterInput from "@components/components/Admin/Input";
import DefaultBtn from "@components/components/items/DefaultBtn";
import NavBar from "@components/components/items/NavBar";
import React, { use, useState } from "react";

const nav = [
  { navItem: "도서관리" },
  { navItem: "등록" },
  { navItem: "수정" },
  { navItem: "공지사항" },
  { navItem: "통계" },
];

const Announcement = () => {
  const [selected, setSelected] = useState("공지사항");

  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [annoumentContent, setAnnouncementContent] = useState("");

  const handleAnnouncementContent = (e) => {
    setAnnouncementContent(e.target.value);
  };

  const registerAnnouncement = () => {
    if (announcementTitle && annoumentContent) {
      console.log(announcementTitle, annoumentContent);
      return;
    }
    alert("입력을 확인해주세요");
  };

  return (
    <>
      <div className="w-[960px] m-auto mb-[200px]">
        <div className="flex justify-between mt-[64px] mb-[22px]">
          <NavBar list={nav} selectFn={setSelected} selected={selected} />
        </div>
        <div className="h-[50px]"></div>
        <div>
          <RegisterInput
            label={"제목"}
            placeholder={"제목을 입력하세요"}
            value={announcementTitle}
            onChangeFn={setAnnouncementTitle}
          />
        </div>
        <div className={`flex flex-col w-full gap-[20px] justify-start items-center mb-[30px]`}>
          <label className="flex justify-start w-full text-[20px] font-normal">공지 내용</label>
          <textarea
            value={annoumentContent}
            onChange={handleAnnouncementContent}
            type="text"
            className="w-full h-[360px] py-[18px] px-[30px] rounded-xl resize-none overflow-auto bg-[#EBEBEB] focus:outline-none placeholder:text-[#777] "
          />
        </div>
        <div className="h-[42px]" />
        <div className="h-[50px] w-full flex justify-center">
          <DefaultBtn text={"등록"} handleClick={registerAnnouncement} />
        </div>
      </div>
    </>
  );
};

export default Announcement;
