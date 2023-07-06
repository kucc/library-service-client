import NavBar from "@components/components/items/NavBar";
import React, { use, useRef, useState } from "react";
import RegisterInput from "@components/components/Admin/Input";
import DefaultBtn from "@components/components/items/DefaultBtn";

const nav = [
  { navItem: "도서관리" },
  { navItem: "등록" },
  { navItem: "수정" },
  { navItem: "공지사항" },
  { navItem: "통계" },
];

const Edit = () => {
  const [selected, setSelected] = useState("수정");

  const [bookTitle, setBookTitle] = useState("파이썬 갈기기");
  const [bookAuthor, setBookAuthor] = useState("빌 게이츠");
  const [bookPublisher, setBookPublisher] = useState("넷플릭스 서점");
  const [bookPublishedDate, setBookPublishedDate] = useState("2099.11.11");
  const [bookISBN, setBookISBN] = useState(1234125);

  const uploadInputRef = useRef(null);
  const uploadImage = () => {
    uploadInputRef.current.click();
  };
  const handleInput = (e) => {
    console.log(e.target.files[0]);
  };

  const registerBook = () => {
    if (bookTitle && bookAuthor && bookPublisher && bookPublishedDate && bookISBN) {
      console.log({
        bookTitle,
        bookAuthor,
        bookPublisher,
        bookPublishedDate,
        bookISBN,
      });
      return;
    }
    alert("입력을 다시 확인해주세요.");
  };
  return (
    <>
      <div className="w-[960px] m-auto mb-[200px]">
        <div className="flex justify-between mt-[64px] mb-[22px]">
          <NavBar list={nav} selectFn={setSelected} selected={selected} />
        </div>
        <div className="h-[96px]"></div>
        <div className="flex justify-between">
          <div>
            <div className="w-[200px] h-[300px] bg-gray-500 rounded-lg">
              <button onClick={uploadImage}>이미지 업로드</button>
            </div>
            <input
              ref={uploadInputRef}
              type="file"
              name="book_img"
              accept="image/*"
              className="hidden"
              onChange={handleInput}
            />
          </div>
          <div>
            <RegisterInput
              label={"책 이름"}
              placeholder={"책 이름을 입력하세요"}
              value={bookTitle}
              onChangeFn={setBookTitle}
            />
            <RegisterInput
              label={"저자명"}
              placeholder={"저자 이름을 입력하세요"}
              value={bookAuthor}
              onChangeFn={setBookAuthor}
            />
            <RegisterInput
              label={"출판사"}
              placeholder={"출판사를 입력하세요"}
              value={bookPublisher}
              onChangeFn={setBookPublisher}
            />
            <RegisterInput
              label={"출판 년도"}
              placeholder={"ex) 2023.04.05"}
              value={bookPublishedDate}
              onChangeFn={setBookPublishedDate}
            />
            <RegisterInput
              label={"ISBN"}
              placeholder={"숫자만 입력하세요"}
              value={bookISBN}
              onChangeFn={setBookISBN}
              type="number"
            />
          </div>
        </div>
        <div className="h-[70px]"></div>
        <div className="flex justify-center h-[50px]">
          <DefaultBtn text={"수정"} handleClick={registerBook} />
        </div>
      </div>
    </>
  );
};

export default Edit;
