import React from "react";
import "./Testimonials.css"
import { AiFillStar } from 'react-icons/ai';


const reviews = [
    {image: require("./user1.png"), name: "Client 1", review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {image: require("./user2.png"), name: "Client 2", review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"},
    {image: require("./user3.png"), name: "Client 3", review: "Vitae aliquet nec ullamcorper sit. Sed elementum tempus egestas sed sed risus pretium quam"},
    {image: require("./user4.png"), name: "Client 4", review: "Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Velit aliquet sagittis id consectetur purus"},
]

const ReviewCard = ({props}) => {
    return (
         <div className="review lilscaler">
           <div className="stars">
                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
           </div>
           <div className="name-image">
            <img className="review-image" src={props.image} alt={props.name} />
             <h6 className="review-name">{props.name}</h6>
           </div>
           <p className="review-text">{props.review}</p>
         </div>
        );
}

const Testimonials = () => {
    return (
        <main className="testimonials">
            <div className="testimonials-content">
                <h1 className="testimonals-title">Testimonials</h1>
                <div className="review-card">
                    {reviews.map((review) => {
                        return (
                            <ReviewCard props={review} />
                        );
                    })}
                </div>
            </div>
        </main>
    )
}

export default Testimonials