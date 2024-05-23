import Banner from "./Banner";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testmonials from "./Testmonial/Testmonials";
import Category from "./category/Category";


export default function Home() {
  return (
   <>
        <div>
            <Banner/>
        </div>
        <div>
            <Category/>
        </div>
        <div>
            <PopularMenu/>
        </div>
        <div>
            <Featured/>
        </div>
        <div>
            <Testmonials/>
        </div>
   </>
  )
}

