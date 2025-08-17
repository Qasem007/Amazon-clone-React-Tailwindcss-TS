import { accounts, lists } from "../Data/Data"

export const Login =()=>{

    return(

        <div className="bg-white text-black  items-center rounded-xl  ">
        <div className=" flex flex-col  items-center p-5">
         <button className="bg-amber-400 w-25 h-10 rounded-xl mb-4 cursor-pointer">Sign in</button>
         <p className="font-bold text-sm ">New Customer ? <a href="#" className="underline text-blue-700">Start here</a></p>
        </div>
        <div className="flex p-2 m-3 ">
            <div className=" w-1/2 items-center pr-7">
                <h2 className=" font-bold mb-4 ">Your Lists</h2>
               {lists.map((list)=>(
                <div key={list.id} 
                className="  underline text-blue-700  ">
                <a href={list.onClick} onClick={()=>list.onClick} className="">{list.name}</a>
                </div>
               ))}
            </div>
            <div className=" w-50% items-center">
            <h2 className="pl-5 font-bold mb-4">Your Account</h2>
             {accounts.map((account)=>(
                <div key={account.id} className="border-l-1 pl-5 underline text-blue-700 ">
                    <a href={account.onClick} onClick={()=>account.onClick}>{account.name}</a>
                </div>
             ))}
            </div>
        </div>
        </div>
    )
}
