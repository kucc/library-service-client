import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 117px;
  height: 100%;
  border-radius: 60px;
  background: #C3201F;
  margin: 3px;

  transition-timing-function: ease-out;
  transition-duration: 0.3s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:active {
    background-color: #A71622;
  }
`;

const ButtonText = styled.span`
  text-align: center;
  height: 19px;
  width: 56px;

  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  color: #FFFFFF;
`;

const DefaultBtn = (props) => {

  return (
    <Button onClick={props.handleClick}>
      <ButtonText>{props.text}</ButtonText>
    </Button>
  );
};


export default DefaultBtn;
