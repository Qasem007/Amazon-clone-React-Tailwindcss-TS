
import { BestSellersBooks } from './../Data/Data';
import { ChevronLeft ,ChevronRight } from 'lucide-react';
export const BestSellersBook=()=>{
return(
    
   <div className='px-10 bg-white m-5 shadow-xl items-center justify-center relative '>
    <div className='shadow-xl mb-5 border-gray-300'>

      <div className='' >
      <h1 className='font-bold text-xl mb-4 pt-5 ml-5 '>Best sellers in books </h1>
         </div>
  
         <div className='flex overflow-x-auto whitespace-nowrap gap-2 items-center justify-center '>
          <ChevronLeft  size={50} className='absolute items-center left-0 mt-5 cursor-pointer text-black  '/>
             {BestSellersBooks.map((book =>(
            <div key={book.id} className=" min-w-[140px] ">
            <img title='Books' src={book.src} className='h-40 rounded w-full '/>
            </div>
          )))}
            <ChevronRight size={50} className='absolute items-center cursor-pointer text-black right-0 mt-5  '/>
         </div>
         
    </div>
             </div>
       
)
}