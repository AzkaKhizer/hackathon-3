"use client";

import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./NavigationMenu";
import { useCart } from "../context/CartContext";
import { FiUser } from "react-icons/fi";

export default function Header() {
  const { cart } = useCart();

  return (
    <div className="max-w-screen-2xl flex justify-center items-center w-full  mx-auto">
      <header className="w-full h-[60px] flex justify-between items-center  md:mt-2 relative z-50">
        {/* Left Side: Logo & Sidebar */}
        <div className="flex justify-center items-center">
          <SheetSide />
          <h1 className="font-bold text-[25px] sm:text-[32px] pl-2 pr-7">
            SHOP.CO
          </h1>
        </div>

        {/* Center: Navigation Menu */}
        <nav className="hidden lg:block relative">
          <ul className="flex items-center space-x-10 text-[16px] md:text-[18px] font-semibold">
            <NavigationMenuDemo />
            <Link
              href="/products/sell"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            >
              On Sale
            </Link>
            <Link
              href="/products"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            >
              New Arrivals
            </Link>
            <Link
              href="/casual"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Casual
            </Link>
          </ul>
        </nav>

        {/* Right Side: Icons */}
        <div className="flex items-center mr-16 space-x-3 text-xl font-bold">
          <IoIosSearch className="lg:hidden" />
          <Link
            href="/cart"
            className="relative transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <IoCartOutline className="text-2xl text-gray-800" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cart.length}
              </span>
            )}
          </Link>
          <FiUser className="text-2xl cursor-pointer" />
          <VscAccount />
        </div>
      </header>
    </div>
  );
}
