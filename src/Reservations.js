import React from "react";
import "./Reservations.css"
import BookingForm from "./BookingForm";

function Reservations(props) {
    return (
        <main className="reservations">
            <h1 className="reservation_h1">Reservation:</h1>
            <BookingForm availableTimes={props.availableTimes} dispatchTimes={props.dispatchTimes} submitForm={props.submitForm} isFormSubmitted={props.isFormSubmitted} />
        </main>
    )
}

export default Reservations