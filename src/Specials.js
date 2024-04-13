import React from "react";
import "./Specials.css"
import { Link, useNavigate } from "react-router-dom"
import { MdDeliveryDining } from 'react-icons/md';
import Button  from "./Button.js"

const foodItems = [
    {
        name: 'Greek Salad',
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        image: require("./greek salad.jpg")
    },
    {
        name: "Bruchetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: require("./bruchetta.png")
    },
    {
        name: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image : require("./lemon dessert.jpg")
    },
    {
        name: "New Recipe",
        price: "$10.00",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image : require("./lemon dessert.jpg")
    },

]


const FoodCard = ({props}) => {

    const navigate = useNavigate()

    function handleClick() {
        navigate("/order-online")
    }

    return (

        <div className="item lilscaler">

            <img className="image" src={props.image} alt={props.name} />

            <div className="details">
                <div className="name-price">
                    <h3 className="name">{props.name}</h3>
                    <p className="price">{props.price}</p>
                </div>
                <p className="description">{props.description}</p>
                <div className="delivery">
                    <Link to="/order-online" className="anchor">Order a delivery</Link>
                    <Button title={<MdDeliveryDining />} onClick={handleClick} styler={"bike_button"} valid={true} />
                </div>
            </div>
        </div>
    );
}

const Specials = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/order-online");
    };

    return (

        <main className="specials">
            <div className="title-and-btn">
                <h1 className="title">This week's specials!</h1>
                <Button title={"Online Menu"} onClick={handleClick} styler={"button"} valid={true}/>
            </div>
            <div className="food-card-holder">
                <div className="food">{
                    foodItems.map((item) => {
                        return (
                            <FoodCard props={item} />
                        );
                    })}
                </div>
            </div>
        </main>
    )
}

export default Specials