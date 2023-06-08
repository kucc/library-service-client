import { useRouter } from "next/router";
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

const NavBar = ({ list, selectFn = () => {} }) => {
  const [focusedItem, setFocusedItem] = useState(list[0].navItem);

  const router = useRouter();
  const navigatorRoute = (link) => {
    console.log(link);
    if (link) {
      router.push(link);
    }
    return;
  };

  return (
    <div className="flex ">
      {list.map((item, i) => (
        <NavItem
          key={i}
          onClick={() => {
            setFocusedItem(item.navItem);
            selectFn(item.navItem);
            navigatorRoute(item["link"]);
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
