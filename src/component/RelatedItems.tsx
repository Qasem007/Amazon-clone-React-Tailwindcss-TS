import  { ChevronLeft, ChevronRight } from "lucide-react"
import { RelatedItemsData } from "../Data/Data"


export const RelatedItem=()=>{
    return(
        <div className="px-10 bg-white m-5 shadow-xl items-center justify-center relative">
          <div className="shadow-xl mb-5 border-gray-300">
            <div className="">
              <h1 className="font-bold text-xl ml-5 pt-5 mb-4">Related to items you`ve viewed</h1>
            </div>
            <div className="flex overflow-x-auto whitespace-nowrap gap-2 items-center justify-center">
                <ChevronLeft size={50} className="absolute left-0 mt-5 items-center text-black cursor-pointer"/>
             {RelatedItemsData.map((item =>(
                <div key={item.id} className="min-w-[140px]">
                    <img src={item.src} alt={item.name}  className="h-40 rounded w-full"/>
                </div>
             )))}
             <ChevronRight size={50} className="absolute items-center text-black cursor-pointer mt-5 right-0"/>
            </div>
          </div>
        </div>
    )
}