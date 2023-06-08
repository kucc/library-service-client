import Footer from "@components/components/Layout/Footer";
import Header from "@components/components/Layout/Header";
import BoardTitle from "@components/components/Board/BoardTitle";
import Link from "next/link";
import LeftArrow from "@components/components/items/LeftArrow";
import PurchaseInput from "@components/components/Purchase/Input";
import { useState } from "react";
import Radio from "@components/components/Purchase/Radio";
import DefaultBtn from "@components/components/items/DefaultBtn";

const Purchase = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookSubtitle, setBookSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [purchaseUrl, setPurhcaseUrl] = useState("");
  const [reason, setReason] = useState("");

  const submitPurchase = () => {
    console.log({ bookTitle, bookSubtitle, author, publisher, publishYear, purchaseUrl, reason });
  };

  return (
    <>
      <div className="w-[960px] m-auto mb-[200px] min-h-[70vh] text-[20px] ">
        <div className="mt-[53px] w-fit">
          <Link href="/mypage">
            <LeftArrow />
          </Link>
        </div>
        <BoardTitle title="구매신청" className="mt-[53px] mb-[49px]" />
        <div className="flex justify-between w-full">
          <div className="w-[440px]">
            <PurchaseInput
              label={"제목"}
              placeholder={"책 제목을 입력하세요"}
              value={bookTitle}
              onChangeFn={setBookTitle}
            />
            <PurchaseInput
              label={"부제목"}
              placeholder={"부제목을 입력하세요"}
              value={bookSubtitle}
              onChangeFn={setBookSubtitle}
            />
            <PurchaseInput
              label={"저자"}
              placeholder={"저자 이름을 입력하세요"}
              value={author}
              onChangeFn={setAuthor}
            />
            <PurchaseInput
              label={"출판사"}
              placeholder={"출판사를 입력하세요"}
              value={publisher}
              onChangeFn={setPublisher}
            />
          </div>
          <div className="w-[440px]">
            <PurchaseInput
              label={"출판연도 또는 판"}
              placeholder={"출판연도를 입력해주세요"}
              value={publishYear}
              onChangeFn={setPublishYear}
            />
            <PurchaseInput
              label={"구입 링크"}
              placeholder={"링크를 입력해주세요"}
              value={purchaseUrl}
              onChangeFn={setPurhcaseUrl}
            />
          </div>
        </div>
        <div className="flex items-start justify-between w-full mt-[90px] ">
          <div className="w-[440px]">
            <div className="mb-[25px]">이번 학기 컴퓨터 학과 전공 도서 여부</div>
            <Radio value="yes" id="choice1" name="major" label="예" />
            <Radio value="no" id="choice2" name="major" label="아니오" />
            <Radio value="dontKnow" id="choice3" name="major" label="모름" />
          </div>
          <div className="w-[440px] flex items-start">
            <PurchaseInput
              label={"신청 사유"}
              placeholder={"입력하세요"}
              value={reason}
              onChangeFn={setReason}
            />
          </div>
        </div>
        <div className="text-center w-full h-[53px] mt-[130px]">
          <DefaultBtn text="등록" handleClick={submitPurchase} />
        </div>
      </div>
    </>
  );
};

export default Purchase;
