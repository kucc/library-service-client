import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState } from "@/recoil/atoms/counterAtom";
import Link from "next/link";
import { useQuery } from "react-query";
import Image from "next/image";
import thumbnail from "../img/thumbnail.png";
import Header from "@/components/Layout/Header";
import NavItem from "@/components/items/NavItem";
import Option from "@/components/items/Option";
import Footer from "@/components/Layout/Footer";
import Slide from "@/components/items/Slide";
import DeactBtn from "@/components/items/DeactBtn";
import DefaultBtn from "@/components/items/DefaultBtn";
import GenreBtn from "@/components/items/GenreBtn";
import SearchBar from "@/components/items/SearchBar";
import { headerItemState } from "@/recoil/atoms/headerItemAtom";
import NoticeBoard from "@/components/items/Notice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const headerItems = useRecoilValue(headerItemState);
  return (
    <div>
    <Header headerItems={headerItems} className = ""/>
        <div className = "flex flex-col">
      <div className = "mt-[192px] mb-[77px] mx-auto">
        <Image priority="true" src={thumbnail} alt="home" width={479} height={182} />
      </div>
      <div className = "mb-[159px] mx-auto">
        <div className = "flex items-center">
          <SearchBar/>
          <DefaultBtn text="검색"></DefaultBtn>
        </div>
      </div>
      <div className="mx-auto mb-[135px]">
        <NavItem />
        <Slide />
      </div>
      <div className = "flex justify-center mb-[194px]">
        <div className = "mr-[118px]">
          <NoticeBoard text="공지사항" className = "w-[348px] h-[240px]"/>
        </div>
        <div>
          <svg width="1" height="295" viewBox="0 0 1 255" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" x2="0.5" y2="255" stroke="black" stroke-dasharray="4 4"/>
          </svg>
        </div>
        <div className = "ml-[118px]">
          <NoticeBoard text="도서 신청 현황" className = "w-[348px] h-[240px]"/>
        </div>
      </div>
      <div>
    </div>
        <Footer />
      </div>
    </div>
  );
}
