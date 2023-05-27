import { useMemo, useState } from "react";
import arrow from "../../../public/arrow.svg";
import Image from "next/image";
import styled from "styled-components";

const OptionButton = styled.button`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const Option = (props) => {
  const { selectOptionList } = props;

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(selectOptionList[0]);
  return (
    <>
      <OptionButton
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-black border rounded-full shadow-md focus:ring focus:ring-blue-300 border-slate-400"
        type="button"
        onClick={() => setIsDropDownOpen((prev) => !prev)}
        // onBlur={() => setIsDropDownOpen((prev) => !prev)}
      >
        {selectedNavItem}
        <Image className="w-6 ml-4" src={arrow} alt="선택" />
      </OptionButton>
      <div
        id="dropdown"
        className={`absolute z-10 ${
          !isDropDownOpen ? "hidden" : ""
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
          {selectOptionList.map((opt, i) => {
            return (
              <li key={i}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    setSelectedNavItem(opt);
                    setIsDropDownOpen((prev) => !prev);
                  }}
                >
                  {opt}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Option;
