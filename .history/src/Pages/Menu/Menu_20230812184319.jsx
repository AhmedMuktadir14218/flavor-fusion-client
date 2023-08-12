import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import MenuBanner from "../../"


const Menu = () => {
    return (
        <div>
            <Helmet><title>FlavourFusion | Menu </title></Helmet>
            <Cover  ></Cover>           
        </div>
    );
};

export default Menu;