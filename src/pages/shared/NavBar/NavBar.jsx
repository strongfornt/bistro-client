import { Link } from "react-router-dom"
import useProvider from "../../../ContextProvider/useProvider"
import { IoMdCart } from "react-icons/io"
import useCart from "../../../hooks/useCart"


export default function NavBar() {
  const {user,logOut} = useProvider()
  const {data:cart =[]} = useCart()
  const handleLogout = () => {
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
  }
    const navOption = <>
    <li><Link to='/' >Home</Link></li>
     <li><Link to='/menu' >Our Menu</Link></li>
     <li><Link to='/order/salad' >Order Food</Link></li>
     {/* <li><Link to='/login' >Login</Link></li> */}
     <li><Link to='/dashboard' className="">
     <IoMdCart className="" />
  <div className="badge badge-secondary">+{cart?.length}</div>
</Link></li>

     {
      user? <li> <button onClick={handleLogout} className="" >Log out</button></li>:  <li><Link to='/login' >Login</Link></li>
     }

      
    </>
  return (
    <>
<div className="navbar bg-black bg-opacity-30 text-white     z-30 fixed">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOption}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BistroBoss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navOption}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>

    </>
  )
}
