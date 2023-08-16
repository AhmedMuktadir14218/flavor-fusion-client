import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import MenuBanner from "../../assets/menu/banner3.jpg";
import 

const Menu = () => {
    return (
        <div>
            <Helmet><title>FlavourFusion | Menu </title></Helmet>
            <Cover img={MenuBanner} title={"Our Menu"}></Cover>   
            <PopularMenu></PopularMenu>        
        </div>
    );
};

export default Menu;