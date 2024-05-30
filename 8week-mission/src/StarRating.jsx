import React from "react";
import "./App.css";


const StarRating = ({ rating }) => {
  const filledStars = Math.min(Math.floor(rating / 0.5) / 2, 5);
  const emptyStars = 5 - filledStars; // 비어있는 별의 개수

  console.log('hihi');
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        if (index < filledStars) {
          return <span key={index} className="star filled"></span>;
        } else if (index < filledStars + 0.5) {
          return <span key={index} className="star half-filled"></span>;
        } else {
          return <span key={index} className="star"></span>;
        }
      })}
    </div>
  );
};

export default StarRating;
