import book from "../../img/book.png";
import Image from "next/image";

const SlideList = [{ id: "1", img: book }, { id: "2", img: book }, { id: "3", img: book }, { id: "4", img: book }, { id: "5", img: book }, { id: "67", img: book }, { id: "7", img: book }, { id: "8", img: book }, { id: "9", img: book }, { id: "10", img: book }];

const Slide = (props) => {
    return (
        <div className="flex w-3/4 bg-red overflow-scroll">
            {SlideList.map((item, i) => (
                <div className="h-54 w-42 m-2">
                    <a
                        key={i}
                        href={`/detail/${item.id}`}
                    >
                        <Image src={item.img} alt={i + "thBook"} width="153px" height="204px" />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Slide;
