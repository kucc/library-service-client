import Header from "@/components/Layout/Header";
import avatar from "../../img/Ellipse.png";
import Image from "next/image";
import NavItem from "@/components/items/NavItem";
import DefaultBtn from "@/components/items/DefaultBtn";
import InfoCard from "@/components/items/InfoCard";
import { useState } from "react";
import imgbook from "../../img/Ellipse.png";
import Purchase from "./purchase";

export default function MyPage() {
  const name = "사용자";
  const email = "user@gmail.com";
  const handleClick = (act) => {
    console.log(act + "버튼 클릭!");
  };
  const nav = [
    { navItem: "대출" },
    { navItem: "예약" },
    { navItem: "전체" },
    { navItem: "신청", link: "/mypage/purchase" },
    { navItem: "리뷰" },
  ];
  const book = [
    {
      img: imgbook,
      title: "test1",
      author: "cherry",
      publisher: "hanbit",
      publication_year: "2022",
    },
    {
      img: imgbook,
      title: "test2",
      author: "cherry",
      publisher: "hanbit",
      publication_year: "2022",
    },
  ];
  const [selected, setSelected] = useState("대출");
  console.log(selected);

  return (
    <>
      <div className="m-auto w-[860px]">
        <div className="flex justify-around h-[140px] my-[120px]">
          <div className="flex">
            <Image src={avatar} width={140} height={140} alt="avatar" />
            <div className="my-auto ml-10">
              <div className="text-2xl">{name}</div>
              <div className="text-lg text-gray-400">{email}</div>
            </div>
          </div>
          <div className="my-auto h-[53px]">
            <DefaultBtn text="수정" handleClick={() => handleClick("수정")} />
          </div>
        </div>
        <NavItem list={nav} selectFn={setSelected} />
        <div className="mt-[70px]">
          {book.map((e, i) => (
            <InfoCard
              key={i}
              img={e.img}
              bodyProps={e}
              footerProps={[
                { text: "연장", handleClick: () => handleClick("연장") },
                { text: "반납", handleClick: () => handleClick("반납") },
              ]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
