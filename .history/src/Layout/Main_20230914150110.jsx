import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/footer";
import NavBar from "../Pages/Shared/NavBar";


const Main = () => {
    const location= useLocation();
    const noFootNav =location
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;