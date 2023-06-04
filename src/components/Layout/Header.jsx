import Image from "next/image";
import { useEffect, useState } from "react";
import thumbnailHorizontal from "../../img/thumbnail-horizontal.png";
import Link from "next/link";
import SearchBarHeader from "../items/SearchBarHeader";

const Header = ({
  headerItems = [
    { id: "/search", value: "전체도서" },
    { id: "/mypage", value: "마이페이지" },
    { id: "/logout", value: "로그아웃" },
  ],
}) => {
  const [headerSearchItem, setHeaderSearchItem] = useState("");

  return (
    <>
      <div className=" w-screen h-[136px] shadow-md border-t-[18px] border-crimson-500">
        <div className="flex items-center justify-around h-full">
          <div>
            <Link href="/">
              <Image alt="도서관썸네일" src={thumbnailHorizontal} width={200} height={50} />
            </Link>
          </div>
          <div>
            <SearchBarHeader value={headerSearchItem} onChange={setHeaderSearchItem} />
          </div>
          <div className="flex gap-5">
            {headerItems?.map((headerItem, i) => {
              return (
                <Link href={headerItem.id} key={i}>
                  {headerItem.value}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
