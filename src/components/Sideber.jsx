import { NavLink } from "react-router-dom";

const Sideber = () => {
   
    return (
        <div className="flex flex-col space-y-3 bg-white">
            <div>
                <button className="border-2 w-48 bg-gray-200 rounded-xl">
                    <NavLink to="/">All Products</NavLink>
                </button>
            </div>
            <div>
                <button className="w-48 bg-gray-200 rounded-xl">
                    <NavLink to="/laptop">Laptops</NavLink>
                </button>
            </div>
            <div>
                <button className="w-48 bg-gray-200 rounded-xl">
                    <NavLink to="/phones">Phones</NavLink>
                </button>
            </div>
            <div>
                <button className="w-48 bg-gray-200 rounded-xl">
                    <NavLink to="/accessories">Accessories</NavLink>
                </button>
            </div>
            <div>
                <button className="w-48 bg-gray-200 rounded-xl">
                    <NavLink to="/smartwatch">Smart Watches</NavLink>
                </button>
            </div>
            <div>
                <button className="w-48 bg-gray-200 rounded-xl">
                    <NavLink to="/macbook">MacBook</NavLink>
                </button>
            </div>
            <div>
                <button className="w-48 bg-gray-200 rounded-xl">
                    <NavLink to="/iphone">iPhone</NavLink>
                </button>
            </div>



        </div>
    );
};

export default Sideber;