import { Inter } from "next/font/google";

import { useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";
import { useQuery } from "react-query";
import Image from "next/image";
import thumbnail from "../img/thumbnail.png";

import NavItem from "@components/components/items/NavBar";

import Slide from "@/components/items/Slide";
import SearchBar from "@/components/items/SearchBar";
import NoticeBoard from "@/components/items/Notice";
import { useEffect } from "react";
import baseURLState from "@components/recoil/atoms/apiAtom";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const list = [{ navItem: "인기도서" }, { navItem: "신착도서" }, { navItem: "장르별" }];
  const baseURL = useRecoilValue(baseURLState);

  useEffect(() => {
    // const response = fetch("http://gutendex.com/books/")
    //   .then((response) => response.json())
    //   .then((quote) => console.log(quote));
    // axios.get("http://118.67.134.56:8080/").then((res) => {
    //   console.log(res);
    // });
    // const response2 = fetch("http://118.67.134.56:8080/books/")
    //   .then((response) => response.json())
    //   .then((quote) => console.log(quote));
  }, [baseURL]);

  return (
    <div>
      <div className="flex flex-col">
        <div className="mt-[192px] mb-[77px] mx-auto">
          <Image priority="true" src={thumbnail} alt="home" width={479} height={182} />
        </div>
        <div className="mb-[159px] mx-auto">
          <div className="flex items-center">
            <SearchBar />
          </div>
        </div>
        <div className="mx-auto mb-[135px]">
          <NavItem list={list} />
          <Slide />
        </div>
        <div className="flex justify-center mb-[194px]">
          <div className="mr-[118px]">
            <NoticeBoard text="공지사항" href="/notice" className="w-[348px] h-[240px]" />
          </div>
          <div>
            <svg
              width="1"
              height="295"
              viewBox="0 0 1 255"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0.5" x2="0.5" y2="255" stroke="black" strokeDasharray="4 4" />
            </svg>
          </div>
          <div className="ml-[118px]">
            <NoticeBoard text="도서 신청 현황" href="/notice" className="w-[348px] h-[240px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
