import { isHTTPMethod } from 'next/dist/server/web/http';
import React, { useState } from 'react';
import styled from 'styled-components';



export default function RightArrow() {
  const [isShown, setIsShown] = useState(false);

    return(
        <>
            <button 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className = {`w-[53px] h-[53px] bg-white border-[1px] border-[${isShown ? "#C3201F" : "#1F1F1F"}] rounded-full display: flex items-center justify-center shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-[#C3201F]`}>
              <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 13.5C1.17157 13.5 0.5 12.8284 0.5 12C0.5 11.1716 1.17157 10.5 2 10.5L2 13.5ZM22.0607 10.9393C22.6464 11.5251 22.6464 12.4749 22.0607 13.0607L12.5147 22.6066C11.9289 23.1924 10.9792 23.1924 10.3934 22.6066C9.80761 22.0208 9.80761 21.0711 10.3934 20.4853L18.8787 12L10.3934 3.51472C9.80761 2.92893 9.80761 1.97919 10.3934 1.3934C10.9792 0.807612 11.9289 0.807612 12.5147 1.3934L22.0607 10.9393ZM2 10.5L21 10.5L21 13.5L2 13.5L2 10.5Z" fill={isShown ? "#FFFFFF" : "#1F1F1F"}/>
              </svg>

            </button>
        </>
    )
}