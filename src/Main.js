import React, { useState, useReducer } from "react";
import "./index.css"

import {Route, Routes, useNavigate} from "react-router-dom";
import Menu from "./Menu";
import Reservations from "./Reservations";
import Order from "./Order";
import About from "./About"
import Login from "./LogIn";
import Homepage from "./Homepage";
import {fetchAPI, submitAPI} from "./API"
import ConfirmedBooking from "./ConfirmedBooking";

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date))

    return(response.length !== 0) ? response: availableTimes
}

const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes, ...fetchAPI(new Date())

]

const Main = () => {

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes)

    const navigate = useNavigate();


    const submitForm = (reservation) => {

        console.log("Reservation From Data: ", reservation);
        const response = submitAPI(reservation);
        setIsFormSubmitted(true);

        if (response){
            navigate("/confirmed-booking")}
        else {alert("Submission failed. Try again")}

    }

    return(
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations availableTimes={availableTimes} dispatchTimes={dispatchTimes} submitForm={submitForm} isFormSubmitted={isFormSubmitted} />} />
                <Route path="/order-online" element={<Order />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    )
}

export default Main