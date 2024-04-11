import React from "react";
import "./Testimonials.css"
import { AiFillStar } from 'react-icons/ai';


const reviews = [
    {image: require("./logo.png"), name: "Client1", reviewText: "Review lorem ipsum dolor sit amet"},
    {image: require("./logo.png"), name: "Client2", reviewText: "Review lorem ipsum dolor sit amet"},
    {image: require("./logo.png"), name: "Client3", reviewText: "Review lorem ipsum dolor sit amet"},
    {image: require("./logo.png"), name: "Client4", reviewText: "Review lorem ipsum dolor sit amet"},
]

const ReviewCard = ({props}) => {
    return (
         <div className="testimonials-review">
           <div className="testimonials-stars">
                <AiFillStar className="testimonials-review-stars-icon"/>
                <AiFillStar className="testimonials-review-stars-icon"/>
                <AiFillStar className="testimonials-review-stars-icon"/>
                <AiFillStar className="testimonials-review-stars-icon"/>
                <AiFillStar className="testimonials-review-stars-icon"/>
           </div>
           <div className="testimonials-name-image">
            <img className="testimonial-review-image" src={props.image} alt={props.name} />
             <h6 className="testimonials-review-name">{props.name}</h6>
           </div>
           <p className="testimonials-review-text">{props.reviewText}</p>
         </div>
        );
}

const Testimonials = () => {
    return (
        <main>
            <div className="testimonials-content">
                <h1 className="testimonals-title">Testimonials</h1>
                {/*   <ReviewCard /> */}
                <div className="testimonials-review-card">
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