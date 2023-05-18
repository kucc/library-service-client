import book from "../../img/Ellipse.png";
import Image from "next/image";

const ListList = [{ id: "1", img: book }, { id: "2", img: book }, { id: "3", img: book }, { id: "4", img: book }, { id: "5", img: book }, { id: "67", img: book }, { id: "7", img: book }, { id: "8", img: book }, { id: "9", img: book }, { id: "10", img: book }];

const List = (props) => {
    return (
        <div className="flex w-1/2 bg-red overflow-auto">
            {ListList.map((item, i) => (
                <div style={{ width: "153px", height: "204px" }}
                    key={i}>
                    <a className="m-2"
                        href={`/detail/${item.id}`}
                    >
                        <Image src={item.img} alt={i + "thBook"} />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default List;
