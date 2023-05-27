import Image from "next/image";
import { useEffect, useState } from "react";
import thumbnailHorizontal from "../../img/thumbnail-horizontal.png";
import Link from "next/link";

const Header = ({ headerItems = [] }) => {
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
            <input type="text" placeholder="검색" />
          </div>
          <div className="flex gap-5">
            {headerItems.map((headerItem, i) => {
              return <div key={i}>{headerItem}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
