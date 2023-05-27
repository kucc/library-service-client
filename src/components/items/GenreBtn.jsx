import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 117px;
  height: 53px;
  border: 1px solid #1F1F1F;
  border-radius: 60px;
  background: white;
  margin: 20px;

  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;

  &:active {
    background-color: #c00;
  }
`;

const ButtonText = styled.span`
  text-align: center;
  height: 19px;
  width: 56px;

  font-family: Abel;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
`;

const GenreBtn = (props) => {

  return (
    <Button>
      <ButtonText>{props.text}</ButtonText>
    </Button>
  );
};


export default GenreBtn;
