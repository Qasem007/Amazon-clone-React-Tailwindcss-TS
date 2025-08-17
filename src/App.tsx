import { Background } from "./component/Background"
import { BestSellersBook } from "./component/BestSellersBooks"
import { Footer } from "./component/Footer"
import { FunToysFitBeauty ,WireGamingPCDeals,
   LovedHomeGamingImage} from "./component/FunToysFitBeauty"
import Header from "./component/Header"
import { Main } from "./component/Main"
import { MoviesAndTV } from "./component/MoviesAndTV"
import { Personalized } from "./component/Personalized"
import { RelatedItem } from "./component/RelatedItems"
import { SecondHeader } from "./component/SecondHeader"
import { TopSellerBook } from "./component/TopSellersBooks"
import {BackgroundImages} from "./Data/Data"



function App() {


  return (
  <div >
    <Header/>
    <SecondHeader/>
    <Background images={BackgroundImages} interval={10000}/>
    <Main/>
    <RelatedItem/>
   <TopSellerBook/>
   <FunToysFitBeauty/>
    <MoviesAndTV/>
    <BestSellersBook/>
    <WireGamingPCDeals/>
    < LovedHomeGamingImage/>
    <Personalized/>
    <Footer/>
  </div>
  )
}

export default App
