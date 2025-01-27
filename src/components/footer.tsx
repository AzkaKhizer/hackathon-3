import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Image from "next/image";
import Offers from "./offers";


export default function Footer(){
    return(
        <main className="bg-[#F0F0F0] relative p-7 md:px-12 w-full h-full max-w-screen-2xl  mx-auto  md:h-[400px] flex flex-col  justify-start items-center mt-36 md:mt-32">
          
           <span className="absolute  top-[-180px]  md:top-[-120px]">
           <Offers />
           </span>
           
        <div className="w-full h-[60%] flex flex-col md:flex-row justify-between items-start mt-52  md:mt-20 border-b-2 pb-5">
             {/* top div */}
             <div className="w-full md:w-[40%] mt-10 md:mt-5">
                <h1 className="text-2xl md:text-3xl font-extrabold">SHOP.CO</h1>
                <p className="mt-2 text-sm text-gray-600">We have clothes that suits your style and which you&apos;re proud to wear. From women to men.</p>
                  <div className="flex space-x-2 mt-3">
                         <FaTwitter className="text-xl"/>
                        <BsFacebook className="text-xl"/>
                       <FaInstagram className="text-xl"/>
                    <FaSquareGithub className="text-xl"/>
                  </div>
             </div>
             {/* bottom div */}
             <div className=" w-full grid grid-cols-2 md:grid-cols-4 justify-between md:place-items-center ">
                {/* box1 */}
             <div className="mt-4">
                <h2 className="text-xl mb-4">Company</h2>
                <ul className="space-y-1">
                    <li className="font-sans text-gray-600">About</li>
                    <li className="font-sans text-gray-600">Features</li>
                    <li className="font-sans text-gray-600">Works</li>
                    <li className="font-sans text-gray-600">Career</li>
                </ul>
             </div>
             {/* box 2 */}
             <div>
                <h2 className="text-xl mt-4  mb-4">Help</h2>
                <ul  className="space-y-1">
                    <li className="font-sans text-gray-600">Customer Support</li>
                    <li className="font-sans text-gray-600">Delivery Details</li>
                    <li className="font-sans text-gray-600">Terms & Conditions</li>
                    <li className="font-sans text-gray-600">Privacy Policy</li>
                </ul>
             </div>
             {/* box3 */}
             <div className="space-y-1 mt-4">
                <h2 className="text-xl  mb-4">FAQ</h2>
                 <ul className="space-y-1">
                    <li className="font-sans text-gray-600">Account</li>
                    <li className="font-sans text-gray-600">Manage Deliveries</li>
                    <li className="font-sans text-gray-600">Orders</li>
                    <li className="font-sans text-gray-600">Payments</li>
                </ul>
             </div>
             {/* box4 */}
           <div  className="space-y-1 mt-4">
                <h2 className="text-xl  mb-4">Resources</h2>
                <ul className="space-y-1">
                    <li className="font-sans text-gray-600">Free eBooks</li>
                    <li className="font-sans text-gray-600">Development Tutorial</li>
                    <li className="font-sans text-gray-600">How to - Blog</li>
                    <li className="font-sans text-gray-600">Youtube Playlist </li>
                </ul>
             </div>
             {/* complete */}
             </div>
        </div>
        <div className=" w-full flex flex-col md:flex-row items-center mt-5 md:mt-7 justify-between">
            <p className="text-xs md:text-sm">Shop.co © Made by Azka Khizer,  All Rights Reserved</p>
            <div className="flex mt-4 md:mt-0">
                <Image src={"/visa.png"}     
                className="w-[47px]" width={100} height={100} alt="visa"></Image>
                <Image src={"/Badge.png"} 
                className="w-[47px]" width={100} height={100} alt="visa"></Image>
                <Image src={"/paypal.png"}   
                className="w-[47px]" width={100} height={100} alt="visa"></Image>
                <Image src={"/apple.png"}   
                className="w-[47px]" width={100} height={100} alt="visa"></Image>
                <Image src={"/gpay.png"}     
                className="w-[47px]" width={100} height={100} alt="visa"></Image>
            </div>
        </div>
        
        </main>
    )
}