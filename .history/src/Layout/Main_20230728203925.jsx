import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/footer";


const Main = () => {
    return (
        <div>
            <N
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;