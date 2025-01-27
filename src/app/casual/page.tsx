import { AccordionDemo } from "@/components/accordion";
import CasualShirts from "@/app/casual/casualShirts";
import { CheckboxDemo } from "@/components/checkbox";
import { DressStyle } from "@/components/dressstyle";
import Size from "@/components/size";
import { SliderDemo } from "@/components/slider";


export default function Casual(){
    return(
        <main className="flex flex-col md:flex-row items-center justify-center ">
        <div className="w-[295px] h-full md:h-[1280px] p-6 border border-gray-300 rounded-[20px] ">
        <AccordionDemo/>
        <SliderDemo/>
        <CheckboxDemo/>
        <Size/>
        <DressStyle/>
        </div>
        <div className="w-full h-full md:h-[1220px] md:mb-36 ">
     <CasualShirts/>
</div>
       
        </main>
    )
}