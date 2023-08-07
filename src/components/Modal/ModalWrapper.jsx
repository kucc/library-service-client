import React from "react";

function ModalWrapper({ children, isOpen, setOpen }) {
  return (
    isOpen && (
      <>
        <div
          className="absolute top-0 left-0 w-screen h-screen bg-[#888888]/50 flex justify-center items-center"
          onClick={() => setOpen(false)}
        ></div>
        <div
          className="absolute z-30 translate-x-[-50%] translate-y-[-50%] w-24 h-24 bg-white top-1/2 left-1/2 rounded-xl"
          onClick={() => {
            setOpen(true);
          }}
        >
          {children}
        </div>
      </>
    )
  );
}

export default ModalWrapper;
