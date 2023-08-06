import AdminMenu from "@components/components/Admin/AdminMenu";

const Admin = () => {
  const adminMenu = [
    { name: "도서 관리", link: "/admin/book" },
    { name: "도서 신청", link: "/book" },
    { name: "대출 및 반납", link: "/book" },
    { name: "공지사항", link: "/book" },
    { name: "사용자 관리", link: "/book" },
  ];
  return (
    <div className="flex justify-around my-[100px]">
      <div className="flex items-center">로고</div>
      <div className="flex flex-col gap-[18px]">
        {adminMenu.map((menu, index) => (
          <AdminMenu menuItem={menu.name} key={index} link={menu.link} />
        ))}
      </div>
    </div>
  );
};

export default Admin;
