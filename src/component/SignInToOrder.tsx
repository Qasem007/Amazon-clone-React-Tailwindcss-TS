
import { ChevronDown } from "lucide-react"


export const SignInToOrder=()=>{

    return(
        <div>
        <div className="bg-white  text-black  block items-center justify-center m-8">
         <div className="w-full m-5 items-center justify-center pl-20 " >
            <img src="../../images/amazon-logo.png" alt="Amazon" className="h-8 
            object-contain  " />
         </div>
       <div className="border-2 h-70 items-center justify-center w-70 block p-10 rounded-xl">
       
         <div className="block items-center justify-center">
            <h2 className="font-bold text-center text-xl mb-4">Sign in</h2>
            <label htmlFor="">
                <h6 className="font-bold text-xs">Email or mobile phone number</h6>
                <input type="text"  className="border-2 rounded border-gray-500 w-full" />
                <button className="w-full h-7 bg-amber-300 rounded-2xl mt-2 cursor-pointer">
                    Continue
                </button>
            </label>
            <p className="text-xs m-2">By continuing ,you agree to Amazon`s <a href="#" className="underline text-blue-700">Conditions of Use </a> and <a href="#" className="underline text-blue-700">Privacy Notice.</a></p>

         </div>
         <div className="flex items-center ">
            <a href="#" className="text-sm text-blue-800">Need help ? </a>
            <ChevronDown/>
         </div>
         
       </div>
       <div className="w-full m-5 items-center justify-center pl-20 ">
        <p className="text-xs text-gray-700 underline cursor-pointer">New to Amazon ?</p>
       </div>
        <button className="border-1 border-gray-600  rounded-xl mb-5 items-center justify-center p-2 text-sm ml-10 cursor-pointer">Create your Amazon account</button>
      
        </div>
    
        <div className=" mb-3 items-center text-blue-800 text-xs justify-center flex gap-5 ">
          <a href="#" >Conditions of Use</a>
          <a href="#"> Privacy Notice</a>
          <a href="#"> Help </a>
        </div>
        <div className="flex items-center justify-center text-xs mb-5">
          <span className="text-black">&#169;</span>
          <span className=" text-gray-600">1996 - 2026 ,Amazon ,Inc ,or its affilates</span>
        </div>
       </div>
    )
}