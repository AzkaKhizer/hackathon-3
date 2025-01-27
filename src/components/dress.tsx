import Image from "next/image"

export default function Dress(){
    return(
        <div className="flex justify-center rounded-[40px] max-w-screen-2xl  mx-auto">
        <div className="w-full md:w-[1239px] h-[975px] md:h-[866px] bg-[#F0F0F0] flex flex-col justify-start items-center md:mt-10 rounded-[40px]">
           <div>
             <h1 className="text-[32px] md:text-[48px] font-bold mt-10">BROWSE BY DRESS STYLE</h1>
           </div>

           <div className="w-[90%] h-[550px] flex flex-wrap items-center justify-center mt-10 ">
            <div className="w-[310px] h-[190px] md:w-[400px] md:h-[280px] md:mr-4  rounded-[20px]">
                 <Image src="/dressstyle4.jpg" alt="dresspic" className=" w-[310px] h-[190px] md:w-[400px] md:h-[280px] rounded-[20px]" width={400} height={280}></Image>
            </div>
            <div className="w-[310px] h-[190px] md:w-[684px] md:h-[280px] rounded-[20px] mt-3">
              <Image src="/dressstyle3.jpg" alt="dresspic2"  className="w-[310px] h-[190px] md:w-[684px] md:h-[280px] rounded-[20px]" width={684} height={280}></Image>
            </div>
            <div className="w-[310px] h-[190px] md:w-[684px] md:h-[280px] mt-3 md:mr-4 md:mt-5 rounded-[20px]">
               <Image src="/dressstyle2.jpg" alt="dresspic3"  className="w-[310px] h-[190px] md:w-[684px] md:h-[280px] rounded-[20px]" width={684} height={280}></Image>
            </div>
            <div className="w-[310px] h-[190px] md:w-[400px] md:h-[280px] mt-3 md:mt-5 rounded-[20px]">
            <Image src="/dressstyle1.jpg" alt="dresspic4"  className="w-[310px] h-[190px] md:w-[400px] md:h-[280px] rounded-[20px]" width={400} height={280} ></Image>
            </div>
           </div>
        </div>
        </div>
    )
}