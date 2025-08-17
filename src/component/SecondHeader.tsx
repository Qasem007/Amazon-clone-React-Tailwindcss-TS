import { Navbar } from "../Data/Data"
import { SidebarMenu } from "./SidebarMenu"

export const SecondHeader =()=>{
  

    return(
        <header className=" flex flex-wrap space-x-1 font-semibold ">
       <SidebarMenu/>
           <nav className=" hidden sm:flex items-center p-3 sm:text-sm text-xs font-medium">
           {Navbar.map((nav)=>(
            <div key={nav.id}
            className=" flex items-center " 
            onClick={()=> nav.onClick}>
             <a href={nav.onClick} className="pr-5 hover:text-gray-700">{nav.name}</a>
            </div>
           ))}
           </nav>
        </header>
    )
}