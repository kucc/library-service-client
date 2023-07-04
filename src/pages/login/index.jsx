import DefaultBtn from "@components/components/items/DefaultBtn";
import Input from "@components/components/items/Input";

export default function Login() {
  // 로그인 API 연결
  const handleClick = () => {};

  return (
    <>
      <div className="w-screen h-[calc(100vh-136px)] flex flex-col items-center justify-center">
        <Input placeholder={"아이디"} className="mb-[20px]" />
        <Input placeholder={"비밀번호"} />
        <div className="h-[45px]"></div>
        <button className="w-[120px] h-[53px] rounded-full text-white bg-crimson-500 shadow-md">
          로그인
        </button>
        <div className="h-[20px]"></div>
        <button className="w-[120px] h-[53px] rounded-full text-[#777777] bg-white-500 border-[1px] border-[#777777] shadow-md">
          회원가입
        </button>
      </div>
    </>
  );
}
