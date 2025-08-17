import { useState } from "react"
import { currencies, languages } from "../Data/Data"

export const LanguageSelector=()=>{
    const [selected ,setSelected]=useState<string>("EN")
    const [selectedCurrency ,setSelectedCurrency]=useState<string>("USD")

    return(
        <div className="bg-white p-4 rounded shadow-md w-60 text-black">
            <h6 className="text-sm font-semibold mb-3">Change language <a href="#" className="text-xs underline">Learn more</a></h6>
            <div className="mb-5 mt-5">
                {languages.map((lang)=>(
                    <label  key={lang.code}
                    className="flex items-center space-x-2 mb-2 cursor-pointer">
                        <input 
                        type="radio"
                        name="language"
                        value={lang.code}
                        onChange={()=> setSelected(lang.code)}
                         />
                         <span>{lang.name} - {lang.code}</span>
                    </label>
                ))}
            </div>
            <hr />
            <h6 className="text-sm font-semibold mb-3 mt-5">Change Currency <a href="#" className="text-sx underline">Learn more</a></h6>
            <div>
                {currencies.map((curr)=>(
                    <label  key={curr.code}
                    className="flex items-center space-x-2 mb-3 cursor-pointer">
                        <input 
                        type="radio"
                        name="currency"
                        value={curr.code}
                        onChange={()=> setSelectedCurrency(curr.code)}
                         />
                         <span>{curr.symbol} - {curr.code} - {curr.name}</span>
                    </label>
                ))}
            </div>
            <hr />

            <div className="mt-2 text-sm  text-center justify-center">
                <p className="font-semibold mb-5"> You are Shopping on Amazon.com</p>
                <a href="#" className="text-blue-600 "> Change your country/region</a>
            </div>

        </div>
    )
}