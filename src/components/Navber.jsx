import { Link, NavLink , useLocation} from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import './Navbar.css';
import { Helmet } from 'react-helmet';
import { useState } from "react";



const Navber = () => {
    const location = useLocation();

    const getLinkClass = (path) => {
      return location.pathname === path ? 'active-link' : 'link';
    };

    const links = <>
        <li onClick={() => setPageTitle("Home")}> <NavLink to="/" >Home</NavLink></li>
        <li onClick={() => setPageTitle("statistics")}> <NavLink  to="/statistics">Statistics </NavLink></li>
        <li onClick={() => setPageTitle("dashboard")}> <NavLink to="/dashboard"> Dashboard</NavLink></li>
    </>

    const sidelinks = <>
        <Link to="/cart"><span className="text-2xl"><MdOutlineShoppingCart /></span>
        </Link>
        <Link to="/wishlist"><span className="text-2xl"><CiHeart /></span>
        </Link>
    </>
     const [pageTitle, setPageTitle] = useState("Home");
    return (
        <div className="mx-6">
             <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
            <div className={getLinkClass('/')}>
                <div className="navbar mt-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-2xl font-bold">Gadget Heaven</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-2">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end space-x-4">
                        {sidelinks}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navber;