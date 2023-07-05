import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 117px;
  height: 53px;
  border-radius: 60px;
  background: #00000080;
  margin: 20px;
  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ButtonText = styled.span`
  text-align: center;
  height: 19px;
  width: 56px;

  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  color: #ffffff;
`;

const DeactBtn = ({ text }) => {
  return (
    <button className="w-[120px] h-[50px] rounded-full bg-black m-[20px] transition">
      <ButtonText>{text}</ButtonText>
    </button>
  );
};

export default DeactBtn;
