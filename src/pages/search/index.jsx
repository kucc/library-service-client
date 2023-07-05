import logo from '../../img/logo512.png'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import RightArrow from '@components/components/items/RightArrow'
import Option from '@components/components/items/Option'
import imgbook from "../../img/Ellipse.png";
import LeftArrow from '@components/components/items/LeftArrow'
import SearchCard from '@components/components/items/SearchCard'
import BoardTitle from '@components/components/Board/BoardTitle'

const Search = () => {
    const router = useRouter()
    const { query } = router
    console.log(query.bookname)
    const category = ["카테고리", "전체", "인공지능", "데이터", "디자인", "게임", "하드웨어", "수학", "이론", "웹", "앱", "언어", "기타"];
    const sort = ["정렬", "제목순", "등록일순", "출판일순", "인기순", "평점순F"];
    const book = [
        {
            img: imgbook,
            title: "test1",
            author: "cherry",
            publisher: "hanbit",
            publication_year: "2022",
        },
        {
            img: imgbook,
            title: "test2",
            author: "cherry",
            publisher: "hanbit",
            publication_year: "2022",
        },
        {
            img: imgbook,
            title: "test1",
            author: "cherry",
            publisher: "hanbit",
            publication_year: "2022",
        },
        {
            img: imgbook,
            title: "test2",
            author: "cherry",
            publisher: "hanbit",
            publication_year: "2022",
        },
        {
            img: imgbook,
            title: "test1",
            author: "cherry",
            publisher: "hanbit",
            publication_year: "2022",
        },
    ];

    return (
        <>
            <div className="w-[960px] m-auto mb-[200px]">
                <div className="mt-[53px]">
                    <Link href="/">
                        <LeftArrow />
                    </Link>
                </div>
                <div className='flex justify-between mt-[64px] mb-[22px]'>
                    <BoardTitle title="검색 결과" className="" />
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
                        <SearchCard
                            key={i}
                            img={e.img}
                            bodyProps={e}
                            footerProps={[
                                { text: "대출", handleClick: () => handleClick("대출") },
                            ]}
                        />
                    ))}
                </div>
                <div className='flex mx-auto'>
                    <LeftArrow />
                    <RightArrow />
                </div>
            </div>
        </>
    )
}

export default Search