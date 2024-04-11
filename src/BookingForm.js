import React, { useState } from "react";
import "./BookingForm.css"


function BookingForm (props) {

    const defaultTime = props.availableTimes[0];
  
    const [reservation, setFormValues] = useState({
      date: "",
      time: defaultTime,
      guests: "",
      occasion: "",
    });
    
    const handleInputChange = (e) => {
        if (e.target.name === 'date') {
          props.dispatchTimes(e.target.value);
        }
        setFormValues({
          ...reservation,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = (e,reservation) => {
        e.preventDefault()
        props.submitForm(reservation)
    }

/*     function validateReservation(reservation) {
        if (reservation.time !== '' &&
            reservation.date !== '' &&
            reservation.guests !== '' &&
            reservation.occasion !== '') {
          return ("true")
        }
        return ("false");
    } */


    return (
        <main>
            <form className="form" onSubmit={(e) => handleSubmit(e, reservation)}>
                <label htmlFor="date">Date:</label>
                <input type="date" name="date" id="date" onChange={handleInputChange}
                    className={props.isFormSubmitted && !reservation.date ? "error" : ""}/>

                <label htmlFor="time">Time:</label>
                <select name="time" id="time" value={reservation.time} onChange={handleInputChange}
                    className={props.isFormSubmitted && !reservation.time ? "error" : ""}>
                    {props.availableTimes.map(time =>
                        <option key={time}>
                            {time}
                        </option>
                    )}
                </select>

                <label htmlFor="guests">Number of guests:</label>
                <input type="number" name="guests" id="guests" min="1" max="10" onChange={handleInputChange}
                    className={props.isFormSubmitted && !reservation.guests ? "error" : ""} />

                <label htmlFor="occasion">Occasion:</label>
                <select name="occasion" id="occasion" onChange={handleInputChange}
                    className={props.isFormSubmitted && !reservation.occasion ? "error" : ""}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                <button className="button" name="button" id="button" type="submit" onSubmit={handleSubmit} /* disabled={validateReservation(reservation)} */>Make your Reservation</button>
            </form>

        </main>
    )
}

export default BookingForm