import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router"
import DefaultBtn from './DefaultBtn';


const Bar = styled.input`
    width: 600px;
    height: 75px;
    border-radius: 60px;
    background-color: #EBEBEB;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #777777;
    line-height: 24px;
    padding-left: 31px;
    display: flex;
    align-items: center;
`



const SearchBar = (props) => {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const searchdata = event => {
    setSearch(event.target.value);
    console.log(search);
  }
  const handleClick = () => {
    router.push({
      pathname: '/search',
      query: { "bookname": search }
    })
  }

  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
      handleClick
    }
  }

  return (
    <>
      <Bar placeholder="도서 검색"
        value={search}
        onChange={searchdata}
        onKeyPress={onSubmitSearch} />

      <div className="pl-2 my-auto h-[60px]" >
        <DefaultBtn text="검색" handleClick={handleClick} />
      </div>
    </>
  );
}

export default SearchBar