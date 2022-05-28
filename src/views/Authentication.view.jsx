import React from "react";
import { Outlet } from "react-router-dom";
import Img1 from "../assets/images/img1.png";

const Authentication = () => {
    return (
        <div>
            <div className="container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-32 items-center py-10">
                <div className="hidden md:block">
                    <img alt="" src={Img1} className="w-100" />
                </div>
                <div>
                    <div className="container">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authentication;
