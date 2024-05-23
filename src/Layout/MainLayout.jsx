import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import NavBar from "../pages/shared/NavBar/NavBar";


export default function MainLayout() {
  const location = useLocation()
  console.log(location);
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
  console.log(noHeaderFooter);
  return (
    <>
        {
          noHeaderFooter ||    <header>
          <NavBar/>
      </header>
        }
        <main className="max-w-screen-xl mx-auto" >
            <Outlet/>
        </main>
        {
          noHeaderFooter || <footer>
          <Footer/>
      </footer>
        }
    </>
  )
}
