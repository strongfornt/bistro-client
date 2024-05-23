import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from './../../../assets/assets/home/featured.jpg'
export default function Featured() {
  return (
    <>
        <section style={{ backgroundImage: `url(${featuredImg})` }} className="my-20 bg-fixed"  >
                <SectionTitle 
                    subHeading="check it out"
                    heading="Featured Item"

                />

                <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36" >
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10" >
                        <p>Aug 20,2029</p>
                        <p>Where i get some ?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam eligendi asperiores nesciunt, reprehenderit praesentium. Eveniet, cum optio, sed ratione dicta pariatur inventore commodi ipsa enim ab, nihil ullam provident.</p>
                        <button className="btn btn-outline border-0 border-b mt-4" >Order now</button>
                    </div>
                </div>

        </section>
    </>
  )
}
