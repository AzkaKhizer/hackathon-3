import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='bg-[#F2F0F1] flex flex-col max-w-screen-2xl  mx-auto  w-full h-full md:mt-2   '>
      
    <div className='md:absolute flex flex-col p-4  md:pl-10 h-full justify-start pt-4 items-start w-full  md:max-w-[50%] '>
      <h1 className='text-black md:text-[64px] font-bold md:font-extrabold text-[36px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p className='text-[#655B5B] md:text-[16px]  pt-2 text-[14px]'>Browse Through Our Diverse Range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
      <button className='bg-black text-white w-full rounded-full px-3 py-3 mt-3  md:w-[210px] md:h-[52px] transform transition-transform duration-300 hover:scale-110 hover:shadow-lg '>Shop Now</button>


      <div className='w-[80%] md:w-[596px]  h-full flex flex-wrap space-x-2 mt-2  pl-8 md:pl-0  ml-4 md:ml-0  md:mr-4 justify-center md:justify-start items-center '>
        <div className='flex-1 text-center md:text-left h-full mr-20 md:mr-0'>
          <h2 className='font-bold text-[24px] md:text-[40px]'>200+</h2>
          <p className='text-[12px] md:text-[16px] text-[#655B5B]'>International Brands</p>
        </div>
          
        <div className='flex-1 text-center md:text-left h-full'>
          <h2 className='font-bold text-[24px] md:text-[40px]'>2000+</h2>
          <p className='text-[12px] md:text-[16px] text-[#655B5B]'>High Quality Products</p> 
        </div>
          
        
        <div className='flex-1 text-center md:text-left h-full'>
          <h2 className='font-bold text-[24px] md:text-[40px]'>3000+</h2>
          <p className='text-[12px] md:text-[16px] text-[#655B5B]'>Happy Customers</p>
          
        </div>

        </div>
       
    </div>
<div>
    <div className='h-screen md:h-full   bg-[#F2F0F1] w-full hidden md:block '>
   
   <Image src="/Rectangle.png" className=' w-full h-full object-cover' width={1440} height={700} alt="Clothing" />
     </div>
     <div className='block md:hidden h-full bg-[#F2F0F1] w-full max-w-full object-cover'>
      <Image src="/Rectangle2.png" className=' w-full h-full object-cover' alt="clothing" width={390} height={448}  />
      </div>

     <div className='max-w-screen object-cover  mx-auto overflow-x-hidden '>
      <Image src="/Vector-3.png" className=' absolute  top-[600px] right-[35px] md:top-[150px] md:right-[50px] w-[66px] h-[66px] md:w-[104px] md:h-[104px] ' alt="star" width={104} height={104}/>
     </div>
     <div>
      <Image src="/Vector-4.png" className='absolute top-[750px] left-[25px]  md:top-[330px] md:left-[700px] w-[34px] h-[34px] md:w-[56px] md:h-[56px] ' alt="star" width={56} height={56}/>
     </div>
     </div>
     </div>
     )}
