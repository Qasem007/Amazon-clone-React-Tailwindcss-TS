
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {MoviesAndTVData} from '../Data/Data'
export const MoviesAndTV=()=>{
    return(
        <div className="px-10 bg-white m-5 shadow-xl items-center justify-center relative">
         <div className="shadow-xl mb-5 border-gray-300">
          <div className="">
            <h1 className="font-bold text-xl mb-4 pt-5 ml-5">Most wished for in Movies & TV</h1>
          </div>
          <div className="flex overflow-x-auto whitespace-nowrap gap-2 items-center justify-center">
            <ChevronLeft size={50} className='absolute items-center text-black cursor-pointer left-0 mt-5'/>
          {MoviesAndTVData.map((movie =>(
            <div key={movie.id} className='min-w-[140px]'>
                <img title='movies' src={movie.src} alt={movie.name} className='h-40 rounded w-full' />
            </div>
          )))}
          <ChevronRight size={50 } className='absolute items-center text-black cursor-pointer right-0 mt-5'/>
          </div>
         </div>
        </div>
    )
}