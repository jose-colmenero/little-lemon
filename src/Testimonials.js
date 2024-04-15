import React from "react";
import "./Testimonials.css"
import { AiFillStar } from 'react-icons/ai';


const reviews = [
    {image: require("./user1.png"), name: "Marina C.", review:  "Best bruchetta ever!! Got them for a coworkers party and they were a hit! Definitely going back for more!"},
    {image: require("./user2.png"), name: "Peter J.", review: "Everyone went crazy over them. They also couldn't believe how beautiful they were. Totally impressed!"},
    {image: require("./user3.png"), name: "Karl M.", review: "Such a delightful little restaurant! You can never go wrong ordering from them."},
    {image: require("./user4.png"), name: "Jasmin S.", review: "Wonderful, beautiful, super tasty and all natural ingredients. Highly recommend Little Lemon and will dine again!!"}
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