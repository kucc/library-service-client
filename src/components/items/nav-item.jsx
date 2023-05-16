import { useRef, useState } from "react";
import styled from "styled-components";

const NavItem = styled.div`
  width: 102px;
  height: 37px;
  text-align: center;
  cursor: pointer;
  &::after {
    content: "";
    width: 80%;
    height: 3px;
    display: block;
    margin: 0 auto;
    background-color: black;
    border-radius: 10px;
    margin-top: 3px;
  }
  &:hover {
    color: #c3201f;
  }
  &:hover::after {
    background-color: #c3201f;
  }
  //focus한 css코드는 global.css에서 class로 설정
`;

const NavBarList = [{ navItem: "인기도서" }, { navItem: "신착도서" }, { navItem: "장르별" }];

const NavBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [focusedItem, setFocusedItem] = useState(NavBarList[0].navItem);
  const focusRef = useRef(null);

  const clickFocus = () => {
    // console.log(focusRef.current.hover());
    focusRef.current.focus();
  };

  return (
    <div className="flex ">
      {NavBarList.map((item, i) => (
        <NavItem
          key={i}
          onClick={() => {
            console.log(item.navItem);
            setFocusedItem(item.navItem);
          }}
          className={focusedItem == item.navItem ? "navItem-focus" : null}
        >
          {item.navItem}
        </NavItem>
      ))}
    </div>
  );
};

export default NavBar;
