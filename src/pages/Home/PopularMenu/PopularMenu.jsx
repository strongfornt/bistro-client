
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItemCard/MenuItem";
import useMenu from "../../../hooks/useMenu";


export default function PopularMenu() {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category ==='popular')
  
  return (
    <>
        <section className="px-4 my-10" >
                    <SectionTitle

                        heading={"From Our Menu"}
                        subHeading={"Popular Items"}
                    />

                    <div className="grid md:grid-cols-2 gap-10" >
                        {
                            popular?.map((item,idx)=> <MenuItem key={idx} item={item} />)
                        }
                    </div>
                    <button className="btn btn-outline " >View full menu</button>
        </section>
    </>
  )
}
