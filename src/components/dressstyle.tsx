import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { IoIosArrowUp } from "react-icons/io";
  import { Button } from "./ui/button";

  
  export function DressStyle() {
    return (
        <div className="p-6">
            
                        <div className="flex justify-between items-center">
                        <h1 className="text-[20px] font-bold">Dress Style</h1>
                        <IoIosArrowUp />
                        </div>
        
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-gray-400 text-[16px] font-normal">Casual</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-gray-400 text-[16px] font-normal">Formal</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-gray-400 text-[16px] font-normal">Party</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-gray-400 text-[16px] font-normal">Gym</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex justify-center items-start"> 
        <Button className="bg-black text-white w-[100%] rounded-[62px]">Apply Filter</Button>
      </div>

      
      </div>
    )
  }
  
  