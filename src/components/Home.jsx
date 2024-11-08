import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Sideber from "./Sideber";



const Home = () => {
    return (
        <div className="">
           
           <Banner></Banner>
           <div className="flex ml-20 gap-5">

           <div className="">
            <Sideber></Sideber>
           </div>

           <div className="">
            <Outlet></Outlet>
           </div>

           </div>
            
        </div>
    );
};

export default Home;