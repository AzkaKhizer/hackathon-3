import { RxCross2 } from "react-icons/rx";

export default function Headertop() {
  return (
    <main className="bg-[#000] w-full h-[38px] text-[#FFFFFF] flex justify-center items-center relative max-w-screen-2xl  mx-auto">
        <div className="flex justify-center items-center">
            <h3 className="text-xs sm:text-sm">Sign Up And Get 20% Off On Your First Order</h3>
            <button className="ml-3 text-xs sm:text-sm underline">Sign Up Now</button>
            
        </div>
        <RxCross2 className="absolute right-[50px] hidden sm:block"/>
    </main>
  );
}
