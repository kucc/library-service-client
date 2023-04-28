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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const count = useRecoilValue(counterState);
  return (
    <>
      <Header />

      <Image src={thumbnail} alt="home" width={479} height={182} />
      <h1>hello this is home</h1>
      <Link href="/search?text=abc">go search</Link>
    </>
  );
}
