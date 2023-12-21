import { Outlet } from "react-router-dom";
import Navber from "../Shere/Navber";


const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Main;