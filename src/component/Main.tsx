import 
{HomeImages,GameImages,TrendsImages, NewHomeArrivals,
    CategoriesInKitchen,SchoolAssentials,RefreshImages
    ,GradeImage,
} from "../Data/Data"

export const  Main=()=>{

    return(
        <div className=" mt-70 m-2 items-center justify-center flex flex-wrap gap-1 lg:gap-5 bg-repeat-x bg-cover bg-gradient-to-t from-white/100 to-transparent border-b-gray-300">

       <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
          <h1 className="font-bold text-x mb-4 pt-5 ml-5">Shop for your home essentails</h1>
         <div className="flex-wrap flex gap-5 items-center justify-center ">
           {HomeImages.map((image)=>(
            <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                <img src={image.src} alt={image.name} className="w-30 flex-wrap rounded mb-2" />
                <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
            </div>
            
           ))}
           <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
         </div>
       </div>

          <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
          <h1 className="font-bold text-x mb-4 pt-5 ml-5">Get your Game on</h1>
         <div className="flex-wrap flex gap-5 items-center justify-center">
           {GameImages.map((image)=>(
            <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                <img src={image.src} alt={image.name} className="w-full h-50 flex-wrap rounded mb-2" />
                <p className="text-xs font-sans mb-2 ">{image.name}</p>
            </div>
           ))}
           <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
         </div>
       </div>

       <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
          <h1 className="font-bold text-x mb-4 pt-5 ml-5">Fashion Trends you like</h1>
         <div className="flex-wrap flex gap-5 items-center justify-center ">
           {TrendsImages.map((image)=>(
            <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                <img src={image.src} alt={image.name} className="w-30 flex-wrap rounded mb-2" />
                <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
            </div>
            
           ))}
           <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
         </div>
       </div>

          <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
          <h1 className="font-bold text-x mb-4 pt-5 ml-5">New home arrivals under $50</h1>
         <div className="flex-wrap flex gap-5 items-center justify-center ">
           {NewHomeArrivals.map((image)=>(
            <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
                <img src={image.src} alt={image.name} className="w-30 flex-wrap rounded mb-2" />
                <p className="text-xs font-sans mb-2 ml-3">{image.name}</p>
            </div>
            
           ))}
           <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
         </div>
       </div>

       <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
        <h1 className="font-bold text-x mb-4 pt-5 ml-5">Top categories in kitchen appliances</h1>
        <div  className="flex-wrap flex gap-5 items-center justify-center">
            {CategoriesInKitchen.map((categore)=>(
               <div key={categore.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
               <img src={categore.src} alt={categore.name}  className="w-30 flex-wrap rounded mb-2"/>
               <p className="text-xs font-sans mb-2 ml-3">{categore.name}</p>
               </div>
            ))}
             <a href="#" className="text-blue-500 text-sm mb-2">see more</a>
        </div>
       </div>

       <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
        <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Save big on school essentails</h1>
         <div className="flex flex-wrap gap-5 items-center justify-center">
         {SchoolAssentials.map((image)=>(
          <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
            <img src={image.src} alt={image.name} className="w-30 h-22 flex flex-wrap rounded mb-2"/>
            <p className="text-sm font-sans mb-2 ml-3">{image.name}</p>
          </div>
         ))}
         <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
         </div>
       </div>
        
        <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
        <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Refresh your space</h1>
        <div className="flex-wrap flex gap-5 items-center justify-center">
        {RefreshImages.map((image)=>(
          <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
             <img src={image.src} alt={image.name} className="w-30 h-auto flex flex-wrap rounded mb-2"/>
             <p className="text-sm font-sans mb-2 ml-3">{image.name}</p>
          </div>
        ))}
        <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
        </div>
        </div>

          <div className="items-center justify-center w-70 lg:w-80 border-gray-200 bg-white rounded-xl border-2">
        <h1 className="font-bold text-x mb-4 pt-5 ml-5 ">Deals for every Grade</h1>
        <div className="flex-wrap flex gap-5 items-center justify-center">
        {GradeImage.map((image)=>(
          <div key={image.id} className="shadow-xl border-none rounded-lg items-center justify-center text-center">
             <img src={image.src} alt={image.name} className="w-full h-50 flex flex-wrap rounded mb-2"/>
             <p className="text-sm font-sans mb-2 ">{image.name}</p>
          </div>
        ))}
        <a href="#" className="text-blue-500 text-sm mb-2">See more</a>
        </div>
        </div>
        </div>
    )
}