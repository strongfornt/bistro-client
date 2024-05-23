import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItemCard/MenuItem";


export default function MenuCategory({items,title,img}) {
  return (
    <div className=" my-16 space-y-10">
          {
            title &&    <Cover img={img} title={title} />
          }
           <div className="grid md:grid-cols-2 gap-10" >
                        {
                            items?.map((item,idx)=> <MenuItem key={idx} item={item} />)
                        }
                    </div>
                    <Link to={`/order/${title}`} >
                    <button className="btn btn-outline border-0 border-b mt-4" >Order now</button>
                    </Link>
    </div>
  )
}
