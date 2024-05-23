import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export default function AllUsers() {
  const axiosSecure = useAxiosSecure();
  const { data: users = [],refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/users/${user._id}`).then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              refetch()
            } 
          });
        }
      });
  }


  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user?._id}`)
    .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount) {
            refetch()
            toast.success(`${user?.name} is an Admin Now!`)
        }
    })
  }


  return (
    <>
      <div>
        <div className="flex justify-evenly my-4 items-center">
          <h2>All User</h2>
          <h2>Total User {users?.length}</h2>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, idx) => (
                <tr key={idx}>
                  <th>{idx+1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {
                        user?.role === 'admin' ? "Admin" :   <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn  bg-orange-600 btn-sm"
                      >
                        <FaUser className="text-white text-xl" />
                      </button>
                    }
                  </td>
                  <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className="text-red-800" />
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
