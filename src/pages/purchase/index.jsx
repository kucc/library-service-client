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
          <Link href="/">
            <LeftArrow />
          </Link>
        </div>
        <BoardTitle title="구매신청" className="mt-[53px] mb-[49px]" />
        <div className="flex flex-col gap-[20px]">
          <PurchaseInput
            label={"제목"}
            placeholder={"책 제목을 입력하세요"}
            value={bookTitle}
            onChangeFn={setBookTitle}
          />
          <PurchaseInput
            label={"구입 링크"}
            placeholder={"링크를 입력해주세요"}
            value={purchaseUrl}
            onChangeFn={setPurhcaseUrl}
          />
          <PurchaseInput
            label={"신청 사유"}
            placeholder={"입력하세요"}
            value={reason}
            onChangeFn={setReason}
          />
        </div>
        <div className="text-center w-full h-[53px] mt-[60px]">
          <DefaultBtn text="등록" handleClick={submitPurchase} />
        </div>
      </div>
    </>
  );
};

export default Purchase;
