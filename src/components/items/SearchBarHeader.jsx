import { useRouter } from "next/router";

const SearchBarHeader = ({ value, onChange }) => {
  const router = useRouter();
  const handleOnchange = (e) => {
    onChange(e.target.value);
  };

  const searchInHeader = () => {
    router.push({
      pathname: "/search",
      query: { searchData: value },
    });
  };

  const searchInHeaderWithEnter = (event) => {
    // if (!value) {
    //   alert("검색어를 입력해주세요");
    //   return;
    // }

    if (event.key === "Enter") {
      router.push({
        pathname: "/search",
        query: { searchData: value },
      });
    }
  };
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="검색"
        onChange={handleOnchange}
        onKeyDown={searchInHeaderWithEnter}
        value={value}
        className="w-[270px] bg-[#EBEBEB] text-[20px] py-[10px] pl-[30px] pr-[60px] rounded-full outline-none"
      />
      <div className="relative left-[-50px] cursor-pointer" onClick={searchInHeader}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBarHeader;
