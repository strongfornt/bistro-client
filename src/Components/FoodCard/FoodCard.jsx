import Swal from 'sweetalert2';
import useProvider from './../../ContextProvider/useProvider'
import { useLocation, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

export default function FoodCard({item}) {
    const {image,price,name,recipe,_id} = item || {}
    const {user} = useProvider()
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const axiosSecure = useAxiosSecure()
    const {refetch} = useCart()
    const handleFoodCart = () => {
        if(user && user?.email){
          
           const cartItem = {
            menuId:_id,
            email:user?.email,
            name,
            image,
            price
           }
           axiosSecure.post('/carts',cartItem)
           .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
              toast.success(`${name} added to your card`)
            }
            //refetch the cart 
            refetch()
           })
        }
        else{
          Swal.fire({
            title: "You are not logged in",
            text: "Please login to add to the cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Login!"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login',{state:{pathname}})
            }
          });
        }
    }
   
  return (
    <>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-slate-900 text-center text-white absolute mr-4 mt-4 right-0 px-2" >{price}</p>
  <div className="card-body flex flex-col items-center ">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button
        onClick={handleFoodCart}
      className="btn btn-outline bg-slate-300 border-0 border-b mt-4">Add to cart</button>
    </div>
  </div>
</div>
    </>
  )
}
