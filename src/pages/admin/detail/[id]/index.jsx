import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import BoardContent from "@/components/Board/BoardContent";
import BoardTitle from "@/components/Board/BoardTitle";
import book from "@/img/book.png";
import Image from "next/image";
import { headerItemState } from "@/recoil/atoms/headerItemAtom";
import styled from "styled-components";
import DefaultBtn from "@/components/items/DefaultBtn";
import imgbook from "@/img/Ellipse.png";

import { useRouter } from "next/router";
import NavItem from "@/components/items/NavItem";
import { useRecoilValue } from "recoil";
import ReviewCard from "@/components/items/ReviewCard";
import LeftArrow from "@/components/items/LeftArrow";
import Link from "next/link";
import { useState } from "react";


const Detail = () => {
  const router = useRouter();
    const [selected, setSelected] = useState("대출 내역");
  const [review, setReview] = useState({ star: 0, content: "" })
  const { id } = router.query;
  const data = { id: id, img: book, title: "파이썬 갈기기", author: "작가", publisher: "출판사", publication_year: "2023", genre: "장르", star: 4.5, disable: true };
  const { img, title, author, publisher, publication_year, genre, star, disable } = data;
  const reviews = [{ id: 1, img: imgbook, name: "user1", content: "this is very very goot", star: 4.5 }, { id: 2, img: imgbook, name: "user1", content: "this is very very goot", star: 4.5 }, { id: 1, img: imgbook, name: "user3", content: "this is very very goot", star: 4.5 },]
  const headerItems = useRecoilValue(headerItemState);
  const handleClick = () => { alert("대출예약") }
  const handlechange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };
  const nav = [
    { navItem: "대출 내역" },
    { navItem: "반납 내역" },
    { navItem: "연장 내역" },
    { navItem: "예약 내역" },
  ];

  return (
    <>
      <div className="w-[960px] m-auto mb-[200px]">
        <div className="mt-[53px]">
          <Link href="/admin/main">
            <LeftArrow />
          </Link>
        </div>
        <div className="w-full my-[83px]">
          <div className="flex w-100 h-[200px] justify-between">
            <div className="flex">
              <Image src={img} alt="card img" width={153} height={200} />
              <div className="my-auto ml-5 pl-[39px]">
                <div className="px-[24px] text-xl">{title}</div>
                <div className="flex divide-x text-base text-gray-400 py-[25px]">
                  <div className="px-[24px]">{author}</div>
                  <div className="px-[24px]">{publisher}</div>
                  <div className="px-[24px]">{publication_year}</div>
                  <div className="px-[24px]">{genre}</div>
                </div>
                <div className="px-[24px]">{star}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <NavItem list={nav} selectFn={setSelected} />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Detail;
