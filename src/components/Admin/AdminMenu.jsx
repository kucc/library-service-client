import Link from "next/link";

const AdminMenu = ({ menuItem, link }) => {
  return (
    <>
      <Link href={link}>
        <div className=" w-[300px] h-[65px] bg-white border-[1px] border-black rounded-lg flex justify-center items-center cursor-pointer hover:bg-blue-gray-50 transition-all">
          {menuItem}
        </div>
      </Link>
    </>
  );
};

export default AdminMenu;
