import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            Foo
        </div>
    );
};

export default Main;