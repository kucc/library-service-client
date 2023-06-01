import Image from "next/image";
import DefaultBtn from "./DefaultBtn";

const CardBody = (props) => {
    const { title, author, publisher, publication_year } = props;
    return (
        <div>
            <div className="px-[24px] text-xl">{title}</div>
            <div className="flex divide-x text-base text-gray-400">
                <div className="px-[24px]">{author}</div>
                <div className="px-[24px]">{publisher}</div>
                <div className="px-[24px]">{publication_year}</div>
            </div>
        </div>
    )
}

const CardFooter = (props) => {
    const { footerProps } = props;
    return (
        <div className="flex flex-wrap w-[120px]">
            {footerProps.map((e, i) => (
                <dic className="h-[43px]" key={i}>
                    <DefaultBtn text={e.text} handleClick={e.handleClick} />
                </dic>
            ))}
        </div>
    )
}

const Info = (props) => {
    const { img, bodyProps, footerProps } = props;
    console.log(img, bodyProps, footerProps)
    return (
        <div className="border-2 rounded-2xl py-7 px-16 m-2 flex w-100 h-[150px] justify-between">
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
    )
};

export default Info;

