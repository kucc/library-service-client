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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const headerItems = useRecoilValue(headerItemState);

  const testOption = [
    // { value: "출판년도순", label: "출판년도순" },
    // { value: "출판년도순", label: "출판년도순" },
    // { value: "출판년도순", label: "출판년도순" },
    // { value: "출판년도순", label: "출판년도순" },
    "출판년도순",
    "인기순",
    "제목순",
    "저자순",
  ];
  return (
    <>
      <Header headerItems={headerItems} />
      <Image priority="true" src={thumbnail} alt="home" width={479} height={182} />
      <h1>hello this is home</h1>
      <Link href="/search?text=abc">go search</Link>
      <div className="m-10">
        <h1>option 2안</h1>
        <Option selectOptionList={testOption} />
      </div>
      <div className="m-10">
        <h1>nav 바</h1>
        <NavItem />
        <Slide />
      </div>
      <div>
        <DeactBtn text="대출불가"></DeactBtn>
        <GenreBtn text="인공지능"></GenreBtn>
        <DefaultBtn text="대출"></DefaultBtn>
        <SearchBar/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
