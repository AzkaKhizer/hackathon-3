import {Playfair_Display,Cinzel,Bodoni_Moda,Prata,Montserrat} from "next/font/google";
const Playfair = Playfair_Display({subsets:["latin"]});
const Cinze = Cinzel({subsets:["latin"]});
const Bodoni = Bodoni_Moda({subsets:["latin"]});
const Prat = Prata({subsets:["latin"],weight:"400"});
const Montserratt = Montserrat({subsets:["latin"]});

export default function Fonts(){
    return(
        <div className="bg-black w-full h-[122px] flex justify-center space-x-3 md:justify-evenly items-center flex-wrap max-w-screen-2xl  mx-auto">
            <h1 className={`${Playfair.className} text-white text-2xl md:text-4xl` }>VERSACE</h1>
            <h1 className={`${Cinze.className} text-white text-2xl md:text-4xl`}>ZARA</h1>
            <h1 className={`${Bodoni.className} text-white text-2xl md:text-4xl`}>GUCCI</h1>
            <h1 className={`${Prat.className} text-white text-2xl md:text-4xl`}>PRADA</h1>
            <h1 className={`${Montserratt.className} text-white text-2xl md:text-4xl`}>Calvin Klein</h1>
            
            </div>
    )
}