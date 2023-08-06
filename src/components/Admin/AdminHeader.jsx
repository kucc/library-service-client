import Image from "next/image";
import { useEffect, useState } from "react";
import thumbnailHorizontal from "../../img/thumbnail-horizontal.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { checkAdminHome } from "@components/utils/checkAdmin";

const AdminHeader = () => {
  const router = useRouter();
  console.log(checkAdminHome(router.pathname));

  return (
    <>
      {!checkAdminHome(router.pathname) && (
        <div
          className={`z-50 w-screen h-[136px] shadow-md border-t-[18px] border-crimson-500 bg-white`}
        >
          <div className="flex items-center justify-around h-full">
            <Link href="/admin">
              <Image alt="도서관썸네일" src="/admin-thumbnail.png" width={300} height={50} />
            </Link>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHeader;
