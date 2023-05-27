import { isHTTPMethod } from 'next/dist/server/web/http';
import React, { useState } from 'react';
import styled from 'styled-components';



export default function LeftArrow() {
  const [isShown, setIsShown] = useState(false);

    return(
        <>
            <button 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className = {`w-[53px] h-[53px] bg-white border-[1px] border-[${isShown ? "#C3201F" : "#1F1F1F"}] rounded-full display: flex items-center justify-center shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#C3201F]`}>
              <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 13.5C21.8284 13.5 22.5 12.8284 22.5 12C22.5 11.1716 21.8284 10.5 21 10.5L21 13.5ZM0.93934 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM21 10.5L2 10.5L2 13.5L21 13.5L21 10.5Z" fill={isShown ? "#FFFFFF" : "#1F1F1F"}/>
              </svg>
            </button>
        </>
    )
}