
import {FunWithFamily,ToysForAll,GearUpGetFit,BeautyRoutine,
  WirelessImages,GamingMerchandise,PCsImages,DealsTopImages,
  MostLovedImages,FindForHomeImages,ElectronicsImages,
  LevelUpGamingImages,
} from '../Data/Data'

export const FunToysFitBeauty=()=>{

    return(
        <div className=" py-5 items-center justify-center flex flex-wrap gap-5 lg:gap-8 bg-repeat-x bg-cover bg-gradient-to-t from-white/100 to-transparent ">
             <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
                    <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Have more fun with family</h1>
                    <div className="flex-wrap flex gap-5 items-center justify-center">
                    {FunWithFamily.map((image)=>(
                      <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                         <img src={image.src} alt={image.name} className=" w-30 flex flex-wrap rounded mb-2"/>
                         <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
                      </div>
                    ))}
                    <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
                    </div>
                    </div>
                     <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
                    <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Toys for all ages</h1>
                    <div className="flex-wrap flex gap-5 items-center justify-center">
                    {ToysForAll.map((image)=>(
                      <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                         <img src={image.src} alt={image.name} className="w-30 flex flex-wrap rounded mb-2"/>
                         <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
                      </div>
                    ))}
                    <a href="#" className="text-blue-500 text-xs mb-2">See more</a>
                    </div>
                    </div>
                     <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
                    <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Gear up to get fit</h1>
                    <div className="flex-wrap flex gap-5 items-center justify-center">
                    {GearUpGetFit.map((image)=>(
                      <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                         <img src={image.src} alt={image.name} className="w-30 flex flex-wrap rounded mb-2"/>
                         <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
                      </div>
                    ))}
                    <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
                    </div>
                    </div>
                     <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
                    <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Level up your beauty routine</h1>
                    <div className="flex-wrap flex gap-5 items-center justify-center">
                    {BeautyRoutine.map((image)=>(
                      <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                         <img src={image.src} alt={image.name} className="w-30  flex flex-wrap rounded mb-2"/>
                         <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
                      </div>
                    ))}
                    <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
                    </div>
                    </div>
        </div>
    )
}


export const WireGamingPCDeals=()=>{

    return(
        <div className=" py-5 items-center justify-center flex flex-wrap gap-5 lg:gap-8 bg-repeat-x bg-cover bg-gradient-to-t from-white/100 to-transparent ">
             <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
                    <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Wireless Tech</h1>
                    <div className="flex-wrap flex gap-5 items-center justify-center">
                    {WirelessImages.map((image)=>(
                      <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                         <img src={image.src} alt={image.name} className=" w-30 flex flex-wrap rounded mb-2"/>
                         <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
                      </div>
                    ))}
                    <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
                    </div>
                    </div>
                     <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
                    <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Gaming merchandise</h1>
                    <div className="flex-wrap flex gap-5 items-center justify-center">
                    {GamingMerchandise.map((image)=>(
                      <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                         <img src={image.src} alt={image.name} className="w-30 flex flex-wrap rounded mb-2"/>
                         <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
                      </div>
                    ))}
                    <a href="#" className="text-blue-500 text-xs mb-2">See more</a>
                    </div>
                    </div>
                     <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
                    <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Level up your PC here</h1>
                    <div className="flex-wrap flex gap-5 items-center justify-center">
                    {PCsImages.map((image)=>(
                      <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                         <img src={image.src} alt={image.name} className="w-30 flex flex-wrap rounded mb-2"/>
                         <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
                      </div>
                    ))}
                    <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
                    </div>
                    </div>
                     <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
                    <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Deals on top categories</h1>
                    <div className="flex-wrap flex gap-5 items-center justify-center">
                    {DealsTopImages.map((image)=>(
                      <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                         <img src={image.src} alt={image.name} className="w-30  flex flex-wrap rounded mb-2"/>
                         <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
                      </div>
                    ))}
                    <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
                    </div>
                    </div>
        </div>
    )
}


export const LovedHomeGamingImage=()=>{

    return(
        <div className=" py-5 items-center justify-center flex flex-wrap gap-5 lg:gap-8 bg-repeat-x bg-cover bg-gradient-to-t from-white/100 to-transparent ">
             <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
                    <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Wireless Tech</h1>
                    <div className="flex-wrap flex gap-5 items-center justify-center">
                    {MostLovedImages.map((image)=>(
                      <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                         <img src={image.src} alt={image.name} className=" w-30 flex flex-wrap rounded mb-2"/>
                         <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
                      </div>
                    ))}
                    <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
                    </div>
                    </div>
                     <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
                    <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Gaming merchandise</h1>
                    <div className="flex-wrap flex gap-5 items-center justify-center">
                    {FindForHomeImages.map((image)=>(
                      <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                         <img src={image.src} alt={image.name} className="w-30 flex flex-wrap rounded mb-2"/>
                         <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
                      </div>
                    ))}
                    <a href="#" className="text-blue-500 text-xs mb-2">See more</a>
                    </div>
                    </div>
                     <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
                    <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Level up your PC here</h1>
                    <div className="flex-wrap flex gap-5 items-center justify-center">
                    {ElectronicsImages.map((image)=>(
                      <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                         <img src={image.src} alt={image.name} className="w-30 flex flex-wrap rounded mb-2"/>
                         <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
                      </div>
                    ))}
                    <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
                    </div>
                    </div>
                     <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
                    <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Deals on top categories</h1>
                    <div className="flex-wrap flex gap-5 items-center justify-center">
                    {LevelUpGamingImages.map((image)=>(
                      <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                         <img src={image.src} alt={image.name} className="w-30  flex flex-wrap rounded mb-2"/>
                         <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
                      </div>
                    ))}
                    <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
                    </div>
                    </div>
        </div>
    )
}