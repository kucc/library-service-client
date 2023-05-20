import React, { useState } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    width: 600px;
    height: 75px;
    border-radius: 60px;
    background-color: #EBEBEB;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #777777;
    line-height: 24px;
    padding-left: 31px;
    display: flex;
    align-items: center;
`

export default function SearchBar() {
  

  return (
    <>
        <Bar>검색</Bar>
    </>
  );
}