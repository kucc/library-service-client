import Image from "next/image";
import DefaultBtn from "./DefaultBtn";

const CardBody = (props) => {
  const { title, author, publisher, publication_year } = props;
  return (
    <div>
      <h3>{title}</h3>
      <div className="flex divide-x">
        <div>{author}</div>
        <div>{publisher}</div>
        <div>{publication_year}</div>
      </div>
    </div>
  );
};

const CardFooter = (props) => {
  const { footerProps } = props;
  return (
    <div className="flex flex-wrap">
      {footerProps.map((e, i) => (
        <DefaultBtn key={i} text={e.text} handleClick={e.handleClick} />
      ))}
    </div>
  );
};

const Info = (props) => {
  const { img, bodyProps, footerProps } = props;
  return (
    <div className="flex justify-between card w-100">
      <Image src={img} alt="my" />
      <CardBody {...bodyProps} />
      <CardFooter footerProps={footerProps} />
    </div>
  );
};

export default Info;
