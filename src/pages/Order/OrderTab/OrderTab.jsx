import FoodCard from "../../../Components/FoodCard/FoodCard";


export default function OrderTab({items}) {
  return (
    <>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2' >
      {
            items?.map((item,idx)=><FoodCard key={idx} item={item} /> )
        }
      </div> 
    </>
  )
}
