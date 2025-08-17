import {  useEffect, useRef, useState } from "react";
import { Categories } from "../Data/Data";
import { LanguageSelector } from "./LanguageSelector";
import { ChevronDown, MapPin, Search, ShoppingCart } from "lucide-react";
import {Login} from './Login'
import { SignInToOrder } from "./SignInToOrder";





export default function Header() {

  const [open ,setOpen]=useState(false);
  const menuRef=useRef<HTMLDivElement>(null);

  const [SignIn ,setSignIn]=useState(false);
  const signRef=useRef<HTMLDivElement>(null);

  const [Return ,setReturn] =useState(false);
  const ReturnMenu=useRef<HTMLDivElement>(null)

// This is the Categories useEffect
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


  // this is the sign in useEffect 
  useEffect(()=>{

    const handleSignIn=(event:MouseEvent)=>{

      if(signRef.current && !signRef.current.contains(event.target as Node)){
        setSignIn(false);
      }
    }
    document.addEventListener("mousedown" ,handleSignIn)
    return ()=>{
      document.removeEventListener("mousedown" ,handleSignIn)
    }
  },[]);

  // this is the Return and order UseEffect
  useEffect(()=>{
    const handleReturn=(event:MouseEvent)=>{

      if(ReturnMenu.current && !ReturnMenu.current.contains(event.target as Node)){
        setReturn(false);
      }
    }
    document.addEventListener("mousedown",handleReturn);

    return ()=> {
      document.removeEventListener("mousedown",handleReturn)
    }
  },[]);
    
  return (
    <header className="flex  gap-2 p-2 justify-between items-center bg-black text-white">
      <div className="flex items-center gap-1 flex-shrink-0  ">

        {/* Logo and map  section */}
        <img src="../../images/amazon-logo-white.png" className="h-6 object-contain "/>
            <div className=" hidden sm:block leading-tight">
              <h6 className="font-bold text-sm  text-gray-400">Deliver to </h6>
              <h6 className="font-bold text-sm flex items-center gap-1"><MapPin className="w-4 h-4"></MapPin>Afghanistan</h6>
            </div>
      
      </div>
      {/* the Catagories sections */}
     <div className="text-black flex w-full sm:w-auto flex-grow border-2 rounded-xl overflow-hidden ">
        <select  title="Header"className="text-black px-2 w-16 text-sm  bg-gray-100 h-10 rounded-xl rounded-r-none hidden sm:block" >
         {Categories.map((catagor)=>(
          <option key={catagor.id} 
          onClick={()=> catagor.OnClick}>
            {catagor.name}
          </option>
         ))}
        </select>

        {/* the serach box section */}
     <div className="flex items-center justify-center w-full">
         < input type="text" placeholder="search Amazon " className="flex-grow bg-white  h-10 px-3 border-none outline-none text-xs md:text-sm "/>
        <button title="button" className=" bg-amber-400 h-10 w-16 px-3 items-center justify-center rounded-xl rounded-l-none cursor-pointer"><Search size={20}/></button>
     </div>
        
    </div>
    
 
{/* The languages and Currency section */}

<div className="relative flex-shrink-0 hidden lg:block">

   <button onClick={()=>setOpen(prev => !prev)} className=" items-center gap-1 text-white rounded flex"> EN <ChevronDown size={16} /> </button>
  {open && (
    <div ref={menuRef} className="absolute top-10 right-0 z-50 bg-white text-black rounded shadow-lg">
   <LanguageSelector></LanguageSelector>
    </div>
  )}

</div>

{/* The Sign in and account section */}
      <div className="relative flex-shrink-0 hidden md:block" >
            <span className=" hidden sm:inline font-bold text-sm text-gray-400">Hello, sign in</span>
            <button onClick={()=> setSignIn(prev => !prev)} className="text-white rounded flex">
             
               Account & Lists{" "}<ChevronDown size={16}/>
            </button>
            {SignIn && (
              <div ref={signRef} className="absolute top-10 right-0 z-50 rounded-xl border-2 border-gray-300 bg-white text-black">
               <Login/>
              </div>
            )}
          
      </div>

      {/* the Return and order sections */}
      <div>
       
        <div className="relative flex-shrink-0 hidden lg:block">
          <button onClick={()=> setReturn(prev => !prev)} className="text-white text-xs sm:text-sm items-center gap-x-1 flex">
            Return & <br className="hidden sm:block" />Orders <ChevronDown size={16}/>
          </button>
          {Return && (
            <div ref={ReturnMenu} className="absolute top-10 right-0 z-50 rounded-xl border-2 border-gray-300 bg-white text-black">
              <SignInToOrder/>
            </div>
          )}

        </div>
        
      </div>
      <div className="flex relative gap-1 items-center  cursor-pointer text-white bg-black">
        <ShoppingCart size={30} className=""/>
        <span className="absolute -top-3 -right-1 lg:right-2 bg-black text-amber-400 px-1 rounded-full text-xs ">0</span>
        <span className="text-xs hidden sm:inline">Cart</span>
      </div>
    </header>
  )
}
