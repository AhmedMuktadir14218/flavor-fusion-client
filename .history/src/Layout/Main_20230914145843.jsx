import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/footer";
import NavBar from "../Pages/Shared/NavBar";


const Main = () => {
    const location= use
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;