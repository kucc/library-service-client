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
import thumbnail from "@/img/thumbnail.png";
import Option from "@/components/items/option";
import NavItem from "@/components/items/nav-item";
import OptionEx from "@/components/items/option-ex2";
import { Alert } from "flowbite-react";
import Footer from "@/components/Layout/footer";
import DeactBtn from "@/components/items/deact-btn";
import DefaultBtn from "@/components/items/default-btn";
import GenreBtn from "@/components/items/genre-btn";
import SearchBar from "@/components/items/search-bar";
import Slide from "@/components/items/slide";
import List from "@/components/items/list";

const Box = styled.div`
    width = 954px;
    height = 316px;
    background-color: rgb(241 245 249);
`


export default function Home() {
  return (
    <>
      <div class = "mb-12">
        <Header/>
      </div>
      <div class = "flex justify-center mb-12">
        <Image priority="true" src={thumbnail} alt="home" width={479} height={182} />
      </div>
      <div class = "flex justify-center items-center mb-12">
        <SearchBar text="도서 검색"/>
        <DefaultBtn text="검색"/>
      </div>
      <Box>
        <NavItem/>
      </Box>
      <div>
        <Footer/>
      </div>
    </>
  );
}
