

import Hero from "@/components/Hero";
import Fonts from "@/components/fonts";
import Products from "./products/page";
import TopSelling from "./products/sell/page";
import Dress from "@/components/dress";
import CustomerCarousel from "@/components/carousel";




export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto  " >
      
      <Hero/>
      <Fonts/>
      <Products/>
      <TopSelling/>
      <Dress/>
      <CustomerCarousel/>
      
      
    </div>
  );
}

