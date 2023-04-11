import Link from "next/link";
import styled from "styled-components";

const HomeButton = styled.button`
  width: 200px;
  background-color: grey;
  border-radius: 50px;
  padding: 5px 10px;

  :hover {
    background-color: #d3d3d3;
    color: black;
  }
`;

const Tailwind = () => {
  const goHome = () => {
    window.location.href = "/";
  };
  return (
    <>
      <div className="text-3xl font-bold text-red-800">welcome to tailwind</div>
      <div className="my-10">
        <HomeButton onClick={goHome}>Back to home</HomeButton>
        <Link
          className="px-5 py-2.5 text-black bg-slate-300 rounded-full hover:bg-slate-800 hover:text-white hover:cursor-pointer "
          href="/"
        >
          Home
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="w-1/6 p-4 bg-green-500">a</div>
        <div className="w-1/6 p-4 bg-yellow-500">b</div>
        <div className="w-1/6 p-4 bg-blue-500">c</div>
      </div>
    </>
  );
};

export default Tailwind;
