import React, {useEffect} from "react";
import "./ConfirmedBooking.css"
import { useNavigate } from "react-router-dom";


const ConfirmedBooking = () => {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        },  2000)
    })

    return (
        <div className="ConfirmedBooking">
            <img className="check lilscaler" src={require("./check.png")} alt="check"/>
            <h1>Your reservation is Confirmed</h1>
            <h2>See you soon!</h2>
        </div>
    );
}

export default ConfirmedBooking;