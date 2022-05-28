import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../assets/images/404.jpg";

const NotFound = () => {
    return (
        <div className="bg-white">
            <div>
                <img alt="" src={NotFoundImg} className="mx-auto" />
                <div className="mb-20 text-center">
                    <Link
                        to="/"
                        className="w-full text-white mb-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Back to Home page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
