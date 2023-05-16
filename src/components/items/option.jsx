import styled from "styled-components";
// import arrow from "../../../public/arrow.svg";
// import Image from "next/image";
import { useRef, useState } from "react";

const SelectBoxWrapper = styled.div`
  display: flex;
`;

const SelectBox = styled.select`
  width: 150px;
  height: 50px;
  border: 1px solid grey;
  border-radius: 50px;
  padding: 0 21px;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(arrow);
  box-shadow: 0px 1px 1px 1px #afafaf;
`;

const ArrowWrapper = styled.div`
  position: relative;
  left: -40px;
  top: 18px;
`;

const Option = ({ selectOptionList }) => {
  const selectRef = useRef();
  const openDropdown = () => {};

  return (
    <SelectBoxWrapper>
      <SelectBox ref={selectRef}>
        {selectOptionList.map((Option, index) => (
          <option key={index}> {Option}</option>
        ))}
      </SelectBox>
      <ArrowWrapper onClick={openDropdown}>
        {/* 이미지 추가할 경우 이미지 누르면 option 안 열림 */}
        {/* <Image priority="true" src={arrow} alt="(선택)" /> */}
      </ArrowWrapper>
    </SelectBoxWrapper>
  );
};

export default Option;
