import { IoIosSearch } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";

export default function Offers(){
    return(
        <main className="w-full flex justify-center items-center mt-10 max-w-screen-2xl  mx-auto ">
        <div className="w-[80%] bg-black text-white h-full md:h-[150px] flex flex-col md:flex-row items-center justify-evenly rounded-[20px] p-16 ">
            <h1 className="font-bold text-[32px] md:text-[40px] w-[300px] md:w-[60%] ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            <div>
            <div className=" flex justify-center items-center w-[311px] h-[42px] md:w-[349px] md:h-[48px] mt-4 md:mt-0 bg-[#F0F0F0] rounded-[62px] mb-2 ">
                                <p className="text-black">Subscribe to Newsletter</p>
                                </div>
                <div className=" flex justify-start items-center w-[311px] h-[42px] md:w-[349px] md:h-[48px] bg-[#F0F0F0] rounded-[62px] ">
                
                               <TfiEmail  className="text-xl ml-4 text-gray-600" />
                                <input placeholder="Enter your email address" className="text-gray-600 w-full ml-2 h-full outline-none bg-[#F0F0F0]  rounded-[62px]"></input>
                                </div>
                
            </div>
        </div>
        
            
        
        </main>
    )
}