import Image from "next/image";

const Info = ({data}) => {
    const { id, img, name, content, star } = data;
    const handleClick = () => {
        alert("click!")
    }
    return (
        <div className="border-2 rounded-2xl py-5 px-14 m-2 bg-gray-50 flex w-100 h-[110px] justify-between">
            <div className="flex">
                <div className="my-auto">
                    <Image src={img} alt="card img" width={50} height={50} />
                    <div className="text-gray-600 text-center">{name}</div>
                </div>
                <div className="my-auto ml-20 flex">
                    <div className="px-[24px] text-xl">{content}</div>
                    <div className="flex text-base underline underline-offset-4 text-gray-500 pt-1">
                        <div className="px-[5px]" onClick={handleClick}>더보기</div>
                        <div className="px-[5px]" onClick={handleClick}>수정</div>
                        <div className="px-[5px]" onClick={handleClick}>삭제</div>
                    </div>
                </div>
            </div>
            <div className="my-auto">{star}</div>
        </div>
    )
};

export default Info;

