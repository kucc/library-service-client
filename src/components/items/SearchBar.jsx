import React, { useState } from "react";
import { useRouter } from "next/router";
import DefaultBtn from "./DefaultBtn";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const searchdata = (event) => {
    setSearch(event.target.value);
  };
  const handleClick = () => {
    router.push({
      pathname: "/search",
      query: { bookname: search },
    });
  };

  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <input
        placeholder="도서 검색"
        value={search}
        onChange={searchdata}
        onKeyPress={onSubmitSearch}
        className="w-[600px] h-[75px] rounded-full bg-[#EBEBEB] font-normal text-[20px] text-[#777] px-[30px] "
      />

      <div className="pl-2 my-auto h-[60px]">
        <DefaultBtn text="검색" handleClick={handleClick} />
      </div>
    </>
  );
};

export default SearchBar;
