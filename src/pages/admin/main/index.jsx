import logo from '@/img/logo512.png'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import RightArrow from '@components/components/items/RightArrow'
import Option from '@components/components/items/Option'
import imgbook from "@/img/Ellipse.png";
import LeftArrow from '@components/components/items/LeftArrow'
import AdminCard from '@components/components/items/AdminCard'
import NavItem from "@/components/items/NavItem";
import { useState } from "react";

const Search = () => {
    const router = useRouter()
    const { query } = router
    console.log(query.bookname)
    const category = ["카테고리", "전체", "인공지능", "데이터", "디자인", "게임", "하드웨어", "수학", "이론", "웹", "앱", "언어", "기타"];
    const sort = ["정렬", "제목순", "등록일순", "출판일순", "인기순", "평점순F"];
    const nav = [
        { navItem: "도서관리" },
        { navItem: "등록/수정" },
        { navItem: "공지사항" },
        { navItem: "통계" },
    ];
    const book = [
        {
            id: 1,
            img: imgbook,
            title: "test1",
            author: "cherry",
            publisher: "hanbit",
            publication_year: "2022",
        },
        {
            id: 1,
            img: imgbook,
            title: "test2",
            author: "cherry",
            publisher: "hanbit",
            publication_year: "2022",
        },
        {
            id: 1,
            img: imgbook,
            title: "test1",
            author: "cherry",
            publisher: "hanbit",
            publication_year: "2022",
        },
        {
            id: 1,
            img: imgbook,
            title: "test2",
            author: "cherry",
            publisher: "hanbit",
            publication_year: "2022",
        },
        {
            id: 1,
            img: imgbook,
            title: "test1",
            author: "cherry",
            publisher: "hanbit",
            publication_year: "2022",
        },
    ];
    const [selected, setSelected] = useState("도서관리");
    const handleClick = (act) => {
        alert(act + "버튼 클릭!");
    };

    return (
        <>
            <div className="w-[960px] m-auto mb-[200px]">
                <div className='flex justify-between mt-[64px] mb-[22px]'>
                    <NavItem list={nav} selectFn={setSelected} />
                    <div className='flex w-[310px] justify-between'>
                        <div className=''>
                            <Option selectOptionList={category} />
                        </div>
                        <div className=''>
                            <Option selectOptionList={sort} />
                        </div>
                    </div>
                </div>
                <div>
                    {book.map((e, i) => (
                        <AdminCard
                            key={i}
                            img={e.img}
                            bodyProps={e}
                            footerProps={[
                                { text: "삭제", handleClick: () => handleClick("삭제") },
                            ]}
                        />
                    ))}
                </div>
                <div className='flex justify-center mt-[35px]'>
                    <LeftArrow />
                    <RightArrow />
                </div>
            </div>
        </>
    )
}

export default Search