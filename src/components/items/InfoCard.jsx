import Image from "next/image";
import DefaultBtn from "./DefaultBtn";

const CardBody = (props) => {
  const { title, author, publisher, publication_year } = props;
  return (
    <div>
      <div className="px-[24px] text-xl">{title}</div>
      <div className="flex text-base text-gray-400 divide-x">
        <div className="px-[24px]">{author}</div>
        <div className="px-[24px]">{publisher}</div>
        <div className="px-[24px]">{publication_year}</div>
      </div>
    </div>
  );
};

const CardFooter = (props) => {
  const { footerProps } = props;
  return (
    <div className="flex flex-col gap-[10px] mt-[-5px]">
      {footerProps.map((e, i) => (
        <div key={i}>
          <DefaultBtn width={100} height={45} text={e.text} handleClick={e.handleClick} />
        </div>
      ))}
    </div>
  );
};

const Info = (props) => {
  const { img, bodyProps, footerProps } = props;
  console.log(img, bodyProps, footerProps);
  return (
    <div className="border-2 rounded-2xl py-7 px-16 m-2 bg-gray-50 flex w-100 h-[150px] justify-between">
      <div className="flex">
        <div className="my-auto">
          <Image src={img} alt="card img" width={90} height={90} />
        </div>
        <div className="my-auto ml-5">
          <CardBody {...bodyProps} />
        </div>
      </div>
      <CardFooter footerProps={footerProps} />
    </div>
  );
};

export default Info;
