import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import MenuBanner from "../../assets/menu/banner3.jpg";


const Menu = () => {
    return (
        <div>
            <Helmet><title>FlavourFusion | Menu </title></Helmet>
            <Cover img={MenuBanner} ></Cover>           
        </div>
    );
};

export default Menu;