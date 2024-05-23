
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";
import menuImage from "./../../../assets/assets/menu/banner3.jpg"
import dessertImage from "./../../../assets/assets/menu/dessert-bg.jpeg"
import pizzaImage from "./../../../assets/assets/menu/pizza-bg.jpg"
import saladImage from "./../../../assets/assets/menu/salad-bg.jpg"
import soupImage from "./../../../assets/assets/menu/soup-bg.jpg"

export default function Menu() {
    const [menu] = useMenu()
    const  offered = menu.filter(item => item.category ==="offered")
    const  desserts = menu.filter(item => item.category ==="dessert")
    const  soup = menu.filter(item => item.category ==="soup")
    const  salad = menu.filter(item => item.category ==="salad")
    const  pizza = menu.filter(item => item.category ==="pizza")
    const  drinks = menu.filter(item => item.category ==="drinks")
    return (
    <>
        <div>
            <Cover img={menuImage} title={"our menu"} />
        </div>

        {/* main cover ======================== */}
        <SectionTitle subHeading="Don't miss" heading="Today's offer" />
            {/* offered menu items =================*/}
            <MenuCategory items={offered} />

            {/* dessert menu items ============ */}
            <MenuCategory items={desserts} title={"dessert"} img={dessertImage}   />

            {/* for pizza section =========== */}
            <section>
                <MenuCategory items={pizza} title={"pizza"} img={pizzaImage} />
            </section>

             {/* for pizza section =========== */}
             <section>
                <MenuCategory items={salad} title={"salad"} img={saladImage} />
            </section>
             {/* for pizza section =========== */}
             <section>
                <MenuCategory items={soup} title={"soup"} img={soupImage} />
            </section>
            <section>
                <MenuCategory items={drinks} title={"drinks"} img={soupImage} />
            </section>
    </>
  )
}
