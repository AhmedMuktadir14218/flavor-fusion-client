import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import MenuBanner from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle";
// import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
    const [menu] = useMenu();
    return (
        <div>
            <Helmet><title>FlavourFusion | Menu </title></Helmet>
            <Cover img={MenuBanner} title={"Our Menu"}></Cover>   


               <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </section>  
        </div>
    );
};

export default Menu;