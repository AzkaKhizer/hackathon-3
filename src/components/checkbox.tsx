"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const checkboxColors = [
  "bg-[#00C12B]",
  "bg-[#F50606]",
  "bg-[#F5DD06] ",
  "bg-[#F57906] ",
  "bg-[#06CAF5] ",
  "bg-blue-800",
  "bg-[#7D06F5] ",
  "bg-[#F506A4] ",
  "bg-[#FFFFFF] ",
  "bg-black",
];

export function CheckboxDemo() {
  return (
   <div className="p-6">
    <h1 className="text-[20px] font-bold mb-2 mt-2">Colors</h1>
     <div className="flex flex-wrap space-y-2 w-[250px]">
        
        {checkboxColors.map((color, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox
              id={`checkbox-${index}`}
              className={`h-[34px] w-[34px] rounded-full ${color}`}
            />
            <label
              htmlFor={`checkbox-${index}`}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
          
            </label>
          </div>
        ))}
      </div>
   </div>
  );
}