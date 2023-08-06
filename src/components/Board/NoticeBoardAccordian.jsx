import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import { useRef, useState } from "react";

const NoticeBoardItemAccordian = ({
  notice_id = "No",
  user_id,
  title = "제목",
  notice_content,
  creation_date = "작성일",
  modification_date,
  clicked_item,
}) => {
  console.log(clicked_item);
  const [isOpen, setIsOpen] = useState(notice_id === clicked_item ? true : false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Accordion open={isOpen}>
        <AccordionHeader
          onClick={handleOpen}
          className="flex justify-stretch w-full py-[38px] font-normal text-[20px] text-black"
        >
          <div className="w-1/6 text-left">{notice_id}</div>
          <div className="w-4/6 text-left text-ellipsis hover:cursor-pointer">{title}</div>
          <div className="w-1/8 text-left text-[#777777]">{creation_date}</div>
        </AccordionHeader>
        <AccordionBody onClick={handleOpen} className="text-black border-b-[1px]">
          <div className={`w-4/6 m-auto py-[30px] hover:cursor-pointer font-normal text-[20px]`}>
            {notice_content}
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default NoticeBoardItemAccordian;
