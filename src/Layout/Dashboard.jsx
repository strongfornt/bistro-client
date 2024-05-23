import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

export default function Dashboard() {

  //Todo: get is admin value from the database
  const {isAdmin} = useAdmin();
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="p-4 space-y-3">
        {
          isAdmin ? <>
            <li className="flex items-center">
            <FaHome />
            <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
          </li>
          <li className="flex items-center">
            <FaUtensils />
            <NavLink to="/dashboard/addItems">Add Items</NavLink>
          </li>
          <li className="flex items-center">
            <FaList />
            <NavLink to="/dashboard/manageItems">Manage Items</NavLink>
          </li>
          <li className="flex items-center">
            <FaBook />
            <NavLink to="/dashboard/bookings">Manage Bookings</NavLink>
          </li>
          <li className="flex items-center">
            <FaUser />
            <NavLink to="/dashboard/users">All Users</NavLink>
          </li>
          </>   :     <>   
          <li className="flex items-center">
            <FaHome />
            <NavLink to="/dashboard/userHome">User Home</NavLink>
          </li>
          <li className="flex items-center">
            <FaCalendar />
            <NavLink to="/dashboard/reservation">Reservation</NavLink>
          </li>
          <li className="flex items-center">
            <FaShoppingCart />
            <NavLink to="/dashboard/cart">My Cart</NavLink>
          </li>
          <li className="flex items-center">
            <FaAd />
            <NavLink to="/dashboard/review">Add a Review</NavLink>
          </li>
          <li className="flex items-center">
            <FaList />
            <NavLink to="/dashboard/bookings">My Bookings</NavLink>
          </li>
          
          </>
        }
           {/* shared nav */}
           <div className="divider"></div> 
          <li className="flex items-center">
            <FaHome />
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="flex items-center">
            <FaSearch />
            <NavLink to="/order/salad">Menu</NavLink>
          </li>
          <li className="flex items-center">
            <FaEnvelope/>
            <NavLink to="/order/salad">Contact</NavLink>
          </li>
     
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}
