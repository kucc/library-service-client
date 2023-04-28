import { counterState } from "@/recoil/atoms/counterAtom";
import Link from "next/link";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px dotted grey;
  text-align: center;
`;

const Recoil = () => {
  const [counter, setCount] = useRecoilState(counterState);

  const plus = () => {
    setCount((count) => count + 1);
  };

  const minus = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="h-72">
      <div className="flex justify-center gap-3 text-3xl ">
        <Button onClick={plus}>+</Button>
        <div>{counter}</div>
        <Button onClick={minus}>-</Button>
      </div>
      <div>
        <Link
          className="px-5 py-2.5 text-black bg-slate-300 rounded-full hover:bg-slate-800 hover:text-white hover:cursor-pointer"
          href="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default Recoil;
