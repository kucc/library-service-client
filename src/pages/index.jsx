import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";
import Header from "@/components/Layout/header";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState } from "@/recoil/atoms/counterAtom";
import Link from "next/link";
import { useQuery } from "react-query";
import Image from "next/image";
import thumbnail from "../img/thumbnail.png";
import Option from "@/components/items/option";
import NavItem from "@/components/items/nav-item";
import OptionEx from "@/components/items/option-ex2";
import { Alert } from "flowbite-react";
import Slide from "@/components/items/slide";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const count = useRecoilValue(counterState);

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
      <Header />
      <Image priority="true" src={thumbnail} alt="home" width={479} height={182} />
      <h1>hello this is home</h1>
      <Link href="/search?text=abc">go search</Link>
      <div className="m-10">
        <h1>option 1안</h1>
        <Option selectOptionList={testOption} />
      </div>
      <div className="m-10">
        <h1>option 2안</h1>
        <OptionEx selectOptionList={testOption} />
      </div>
      <div className="m-10">
        <h1>nav 바</h1>
        <NavItem />
        <Slide />
      </div>
    </>
  );
}
