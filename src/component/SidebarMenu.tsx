import { useState } from "react"
import {  ChevronRight,  Menu, User2Icon ,X } from "lucide-react";
import { DigitalMenuData, HelpAndSettings, ProgramAndFeatures, ShopByDepartemnts } from "../Data/Data";

export const SidebarMenu=()=>{
     const [isOpen ,setIsOpen]=useState(false);

    return(
   <div className=" bg-white rounded relative text-black p-3">
    
   <button onClick={()=> setIsOpen(true)}
    className="flex items-center bg-white px-3 rounded border text-black hover:bg-gray-100">
   <Menu size={20} className=" cursor-pointer"/>
   <span className="font-semibold cursor-pointer">All</span>
   </button>
      
   {isOpen && (
    
     <div className="absolute bg-white w-70">
           
   <div className="flex items-end justify-end p-1">
    <button onClick={()=> setIsOpen(false)} className=" bg-red-700 rounded text-white">
        <X size={24} className="cursor-pointer"/>
    </button>
   </div>

     <div className="flex items-center justify-between p-4 ">
     <User2Icon  size={40} className="bg-black rounded-full text-white cursor-pointer object-contain"/>
     <h2 className="text-md font-bold">Hello ,Sign in</h2>
   </div>

    <div className="block pt-5 inset-0  z-40  " >
    <h2 className="font-bold text-x p-1">Digital Content & Devices</h2>
     {DigitalMenuData.map((data)=>(
        <div key={data.id} className=" flex m-2 text-sm  justify-between ">
          <a href="#" className="text-sm">{data.name}</a>
          <ChevronRight/>
        </div>
     ))}
    </div>
    <div className="block pt-5 inset-0 z-40 ">
        <h2 className="font-bold text-x p-1 ">Shop by Department</h2>
        {ShopByDepartemnts.map((Shop)=>(
            <div key={Shop.id} className="flex m-2 text-sm justify-between">
              <a href="#" className="text-sm">{Shop.name}</a>
              <ChevronRight/>
            </div>
        ))

        }
    </div>
   <div className="block pt-5 inset-0  z-40  " onClick={()=> setIsOpen(false)}>
    <h2 className="font-bold text-x p-1">Digital Content & Devices</h2>
     {ProgramAndFeatures.map((pro)=>(
        <div key={pro.id} className=" flex m-2 text-sm  justify-between ">
          <a href="#" className="text-sm">{pro.name}</a>
          <ChevronRight/>
        </div>
     ))}
    </div>
     <div className="block pt-5 inset-0  z-40  " onClick={()=> setIsOpen(false)}>
    <h2 className="font-bold text-x p-1">Help & Setting</h2>
     {HelpAndSettings.map((Sett)=>(
        <div key={Sett.id} className=" flex m-2 text-sm  justify-between ">
          <a href="#" className="text-sm">{Sett.name}</a>
          <ChevronRight/>
        </div>
     ))}
    </div>
  <div className="flex items-center justify-center">
     <button className="bg-amber-300 m-5 w-1/2 p-1 cursor-pointer rounded-xl hover:border-amber-200">Sign in</button>

  </div>
  
    </div>
   )}

   </div>
   
       
    )
}