import React from "react";

import About from "./About"

import {Route, Routes} from "react-router-dom";
import Menu from "./Menu";
import Reservations from "./Reservations";
import Order from "./Order";
import Login from "./LogIn";
import Homepage from "./Homepage";

const Main = () => {

    return(
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/order-online" element={<Order />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    )
}

export default Main