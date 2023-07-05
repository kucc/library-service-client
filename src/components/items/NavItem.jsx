import { useRouter } from "next/router";
import { useState } from "react";

const NavBar = ({ list, selectFn = () => {} }) => {
  const [focusedItem, setFocusedItem] = useState(list[0].navItem);
  const focusedItemClass = (item) => (focusedItem == item.navItem ? "navItem-focus" : "");
  // const router = useRouter();

  return (
    <div className="flex ">
      {list.map((item, i) => (
        <div
          key={i}
          onClick={() => {
            setFocusedItem(item.navItem);
            selectFn(item.navItem);
            // navigatorRoute(item["link"]);
          }}
          className={`${focusedItemClass(
            item
          )} w-[102px] h-[37px] text-center cursor-pointer after:content-[""] after:w-4/5 after:h-[3px] after:block after:mx-auto after:bg-black after:rounded-[10px] after:mt-[3px] hover:text-crimson-500 hover:after:bg-crimson-500`}
        >
          {item.navItem}
        </div>
      ))}
    </div>
  );
};

export default NavBar;
