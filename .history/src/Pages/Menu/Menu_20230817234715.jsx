import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import MenuBanner from "../../assets/menu/banner3.jpg";
// import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
    const [menu]
    return (
        <div>
            <Helmet><title>FlavourFusion | Menu </title></Helmet>
            <Cover img={MenuBanner} title={"Our Menu"}></Cover>   
                 
        </div>
    );
};

export default Menu;