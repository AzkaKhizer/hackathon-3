"use client"
import { MdMenu } from "react-icons/md";
import { Button } from "@/components/ui/button"

import Link from "next/link";
import {
  Sheet,
  
  SheetContent,
  
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenuDemo } from "./NavigationMenu";

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2 max-w-screen-2xl  mx-auto">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="lg:hidden">
            <Button><MdMenu /></Button>
          </SheetTrigger>
          <SheetContent side={side} className="bg-white text-black">
            <SheetHeader>
                <SheetTitle className="flex justify-center items-center">SHOP.CO</SheetTitle>
            </SheetHeader>
            
          <ul >
                <li className="text-[16px] grid grid-cols-1 gap-y-4  font-semibold">
                    <Link  href={"/"} className="text-black mr-[149px]  "><NavigationMenuDemo/></Link>
                    <Link className="ml-4 text-black"href={"/TopSelling"}>On Sale</Link>
                    <Link className="ml-4 text-black"href={""}>New Arrivals</Link>
                    <Link className="ml-4 text-black"href={""}>Brands</Link>
                </li>
            </ul>
            
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
