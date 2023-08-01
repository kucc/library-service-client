import Image from "next/image";
import { useEffect, useState } from "react";
import thumbnailHorizontal from "../../img/thumbnail-horizontal.png";
import Link from "next/link";

const AdminHeader = () => {
  return (
    <>
      <div
        className={`z-50 w-screen h-[136px] shadow-md border-t-[18px] border-crimson-500 bg-white`}
      >
        <div className="flex items-center justify-around h-full">
          <Link href="/admin">
            {/* <Image alt="도서관썸네일" src={thumbnailHorizontal} width={200} height={50} /> */}
            어드민 로고
          </Link>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
