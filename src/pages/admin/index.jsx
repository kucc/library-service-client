import AdminMenu from "@components/components/Admin/AdminMenu";
import Image from "next/image";
import { useState } from "react";

const Admin = () => {
  const [activeIdx, setActiveIdx] = useState();
  const adminMenu = [
    {
      idx: 1,
      name: "도서 관리",
      subMenu: [
        { name: "전체 목록", link: "/book" },
        { name: "신규 등록", link: "/book" },
      ],
    },
    { idx: 2, name: "도서 신청", link: "/book", subMenu: [] },
    { idx: 3, name: "대출 및 반납", link: "/book", subMenu: [] },
    {
      idx: 4,
      name: "공지사항",
      link: "/book",
      subMenu: [
        { name: "전체 목록", link: "/book" },
        { name: "신규 등록", link: "/book" },
      ],
    },
    {
      idx: 5,
      name: "사용자 관리",
      link: "/book",
      subMenu: [
        { name: "전체 목록", link: "/book" },
        { name: "신규 등록", link: "/book" },
      ],
    },
  ];

  return (
    <div className="flex justify-around my-[100px] h-[500px]">
      <div className="flex items-center">
        <Image src="/admin-thumbnail.png" alt="admin-logo" width={300} height={100} />
      </div>
      <div className="flex flex-col gap-[10px] items-center justify-center">
        {adminMenu.map((menu, index) => {
          const active = activeIdx === index + 1 ? true : false;
          return (
            <AdminMenu
              menuItem={menu.name}
              key={index}
              idx={menu.idx}
              activeIdx={activeIdx}
              active={active}
              setActiveIdx={setActiveIdx}
              subMenu={menu.subMenu}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
