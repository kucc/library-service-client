import ModalWrapper from "@components/components/Modal/ModalWrapper";
import React, { useState } from "react";

function Book() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>모달 열기</button>
      {modalIsOpen && (
        <ModalWrapper isOpen={modalIsOpen} setOpen={setModalIsOpen}>
          테스트
        </ModalWrapper>
      )}
    </div>
  );
}

export default Book;
