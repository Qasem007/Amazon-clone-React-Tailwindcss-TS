import { useEffect, useState } from "react";
import {BackgroundImages} from '../Data/Data';





interface BackgroundImage{
    images:string[];
    interval?:number;
  }


export const Background:React.FC<BackgroundImage>=(
    images,
    interval=10000,
    )=>{

    const [currentIndex,setCurrentIndex] =useState<number>(0);

    useEffect(()=>{

    const slider=setInterval(()=>{
        setCurrentIndex((prevIndex)=>(prevIndex + 1) % BackgroundImages.length);
    },interval);

    return ()=> clearInterval(slider);
    },[BackgroundImages.length ,interval]);

    return(
        <div className="absolute w-full h-full overflow-hidden -z-30 ">
         {BackgroundImages.map((image ,index)=>(
            <img src={image} key={index} alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-2000 ease-in-out
                ${index===currentIndex ? "translate-x-0 opacity-100 z-10000" : "translate-x-full opacity-0 z-0"}`} />
         ))}
         
        </div>
    )
}