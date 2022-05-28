import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.component";
import Navbar from "./components/Navbar.component";

class App extends Component {
    render() {
        return (
            <div className="app min-h-screen flex flex-col justify-between">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        );
    }
}

export default App;
