
import { Check, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import {FooterKnowUs,MakeMoney,AmazonPayment,HelpYou} from '../Data/Data'
import {LanguageSelector} from '../component/LanguageSelector';
import { useState,useEffect ,useRef } from 'react';
export const Personalized=()=>{

 const [open ,setOpen]=useState(false);
  const menuRef=useRef<HTMLDivElement>(null);
      useEffect(()=>{
    
        const handleClickOutside=(event:MouseEvent)=>{
          if(menuRef.current && !menuRef.current.contains(event.target as Node)){
            setOpen(false);
          }
        }
    
        document.addEventListener("mousedown",handleClickOutside)
        return()=>{
          document.removeEventListener("mousedown",handleClickOutside)
        }
      },[]);

    return(
   <div className=" items-center mt-10 justify-center  bg-white  text-black">
    <div className="items-center justify-center py-15 text-center border-1 m-2  border-gray-200 ">
        <h1 className="font-bold text-xl font-stretch-50% mb-5">See Personalized recommendations</h1>
    <button className="w-50 h-8 bg-amber-300 hover:bg-amber-400 rounded-2xl cursor-pointer ">Sign in</button>
    <p className="font-sans text-xs pt-1 ">New customer ? <a href="#" className="text-blue-700 font-sans text-xs underline">Start here</a></p>
    </div>
    <div className="items-center justify-center text-center bg-gray-600 h-10 mt-5 text-gray-100">
        <button className="items-center justify-center w-full text-center h-10 cursor-pointer hover:bg-gray-700">Back top</button>
    </div>
    <div className=" flex flex-wrap text-base pb-10 gap-2 justify-around bg-gray-800">

   <div className="text-base pt-5 text-center items-center text-white justify-center h-fit">
    <h1 className='font-bold text-base  mb-5 '>Get to Know US</h1>
   {FooterKnowUs.map((item =>(
  <div key={item.id} className='text-gray-200 m-2'>
      <a href={item.href} className='hover:text-gray-400' >{item.name}</a>
  </div>
   )))}
   </div>
   <div className=" pt-5 md:text-sm text-center items-center text-white justify-center">
    <h1 className='font-bold text-base mb-5'>Make Money with US</h1>
   {MakeMoney.map((item =>(
  <div key={item.id} className='text-gray-200 m-2'>
      <a href={item.href} className='hover:text-gray-400' >{item.name}</a>
  </div>
   )))}
   </div>
    <div className="  text-center  pt-5 md:text-sm items-center text-white justify-center">
    <h1 className='font-bold text-base mb-5'>Amazon Payment Products</h1>
   {AmazonPayment.map((item =>(
  <div key={item.id} className='text-gray-200 m-2'>
      <a href={item.href} className='hover:text-gray-400' >{item.name}</a>
  </div>
   )))}
   </div>
    <div className=" pt-5 text-center items-center text-white justify-center">
    <h1 className='font-bold text-base mb-5'>Let US Help  You</h1>
   {HelpYou.map((item =>(
  <div key={item.id} className='text-gray-200 m-2'>
      <a href={item.href} className='hover:text-gray-400' >{item.name}</a>
  </div>
   )))}
   </div>
   
    </div>
    <div className='flex flex-wrap items-center justify-center text-white bg-gray-800 h-60 border-t-1 border-gray-400 gap-5 pb-10'>
     <img  src="../../images/amazon-logo-white.png" alt="Amazon" className='object-contain size-25 cursor-pointer' />
      <div className='flex flex-wrap w-full  items-center justify-center gap-3'>
         
    <div className="relative flex-shrink-0 ">
   <button onClick={()=>setOpen(prev => !prev)} className=" items-center gap-1 justify-center text-white rounded flex w-40 h-10 border-1 border-gray-400 cursor-pointer hover:border-gray-500 "> <span><Globe size={20}></Globe></span>English <span className='justify-center items- ml-5'><ChevronUp size={12}/><ChevronDown size={12} /></span> </button>
  {open && (
    <div ref={menuRef} className="absolute top-10 right-0 z-50 bg-white text-black rounded shadow-lg">
   <LanguageSelector></LanguageSelector>
    </div>
  )}
    </div>
         <button  className='w-40 h-10 border-1 border-gray-400 cursor-pointer hover:border-gray-500 rounded '>$ USD - U.S.Dollar</button>
         <button  className='w-40 h-10 border-1 border-gray-400 cursor-pointer hidden sm:block hover:border-gray-500 rounded'>United State</button>
      </div>
    
    </div>
   </div>
    )
}