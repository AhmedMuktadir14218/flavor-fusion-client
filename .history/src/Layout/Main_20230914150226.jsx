import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/footer";
import NavBar from "../Pages/Shared/NavBar";


const Main = () => {
    const location= useLocation();
    const noFootNav =location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>

            {noFootNav <NavBar></NavBar>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;