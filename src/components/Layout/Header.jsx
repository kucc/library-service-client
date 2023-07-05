import Image from "next/image";
import { useEffect, useState } from "react";
import thumbnailHorizontal from "../../img/thumbnail-horizontal.png";
import Link from "next/link";
import SearchBarHeader from "../items/SearchBarHeader";

const Header = ({
  headerItems = [
    { id: "/search", value: "전체도서" },
    { id: "/purchase", value: "구매신청" },
    { id: "/mypage", value: "마이페이지" },
    { id: "/logout", value: "로그아웃" },
  ],
}) => {
  const [headerSearchItem, setHeaderSearchItem] = useState("");

  const [scrollDirection, setScrollDirection] = useState("");
  // const [yPosition, setYPosition] = useState();
  // useEffect(() => {
  //   const currentY = window.pageYOffset;
  //   window.addEventListener("scroll", (e) => {
  //     let lateY = 0;

  //     lateY = window.pageYOffset;

  //     const direction = lateY > currentY ? "down" : "up";
  //     // setYPosition(window.pageYOffset);
  //     // const direction =
  //     //   window.pageYOffset - 10 > currentY
  //     //     ? "down"
  //     //     : window.pageYOffset + 10 < currentY
  //     //     ? "up"
  //     //     : scrollDirection;
  //     // setScrollDirection(direction);
  //     console.log(currentY, lateY);
  //     console.log(direction);
  //   });
  // }, [scrollDirection]);
  return (
    <>
      <div
        className={`z-50 w-screen h-[136px] shadow-md border-t-[18px] border-crimson-500 bg-white`}
      >
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
