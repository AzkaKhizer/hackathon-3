import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { FiSliders } from "react-icons/fi"

  
  export function AccordionDemo() {
    return (
        <div className="p-6">
            
                        <div className="flex justify-between items-center">
                        <h1 className="text-[20px] font-bold">Filters</h1>
                        <FiSliders />
                        </div>
        
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it available?</AccordionTrigger>
          <AccordionContent>
            Yes. It is available.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Are colors available?</AccordionTrigger>
          <AccordionContent>
            Yes.Many Colors are available.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can it be customized?</AccordionTrigger>
          <AccordionContent>
            Yes. It can be customized.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is cash on delivery available?</AccordionTrigger>
          <AccordionContent>
            Yes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      
      </div>
    )
  }
  
  
