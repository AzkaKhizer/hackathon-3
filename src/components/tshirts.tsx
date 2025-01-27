import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";



interface Iproducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string,
    img_url:string
}

let product:Iproducts[]=[
    {
        title:"Polo with Contrast Trims",
        price:"$212",
        id:9,
        old_price:"$242",
        img_url:"/new4.png"
    },
    {
        title:"Gradient Graphic T-shirt",
        price:"$145",
        id:10,
        
        img_url:"/new3.png"
    },
    {
        title:"Polo with Tipping Details",
        price:"$180",
        id:11,
        img_url:"/new2.png"
    },
    {
        title:"Black Striped T-shirt",
        price:"$120",
        id:12,
        old_price:"$150",
        img_url:"/new1.png"
    }
]
let star=[<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />]

export default function TShirts(){
    return(
        <div className="mt-10 md:mt-10 w-full h-full md:h-[500px] max-w-screen-2xl  mx-auto ">
            <h1 className="text-[32px] md:text-[48px] font-bold md:font-extrabold text-center ">YOU MIGHT ALSO LIKE</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:px-10 mt-10 gap-3">
                {
                    product.map((data)=>{
                        return (
                            <div key={data.id}>
                                <Link href={`/products/${data.id}`}>
                                <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px]">
                                <Image src={data.img_url} alt={data.title} width={295} height={298} className="rounded-[20px]"></Image>
                                </div>
                                </Link>
                                <div>
                                <p className="text-[16x] md:text-[20px] font-semibold mt-2">{data.title}</p>
                                <p className="flex text-[#FFC633]">{star}</p>
                                <p className="text-[20px] md:text-[24px] font-bold mt-1">{data.price} <span className="text-gray-400 line-through">{data.old_price} </span></p>
                                </div>
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}