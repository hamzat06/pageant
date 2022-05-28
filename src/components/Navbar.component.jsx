import React from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        {
            name: "Home",
            path: "",
        },
        {
            name: "Contestants",
            path: "/contestants",
        },
        {
            name: "FAQs",
            path: "/faqs",
        },
        {
            name: "News",
            path: "/news",
        },
        {
            name: "About",
            path: "/about",
        },
    ];

    return (
        <nav className="bg-secondary-50">
            <div className="container max-w-7xl text-white flex justify-between py-5 px-3 items-center">
                <Link
                    to="/"
                    className="flex items-center text-2xl font-semibold space-x-2"
                >
                    <img alt="" src={Logo} /> <span>Pageant</span>
                </Link>
                <ul className="flex md:space-x-5 text-gray-400 items-center">
                    {navLinks.map(({ name, path }, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    to={`${path}`}
                                    className={`${
                                        location.pathname === `/${path}` &&
                                        "text-blue-700 border-b-2 border-blue-700"
                                    } hover:text-white hover:border-b-2 hover:border-white p-2`}
                                >
                                    {name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <ul className="flex text-gray-400">
                    <li>
                        <Link
                            to="/auth"
                            className="text-base text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Sign in
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
