import React from 'react';
import ReactStars from "react-star-ratings";

const SingleReview = ({re}) => {
    const rating = {
        size: 10,
        value: `${re?.rating}`,
        edit: true,
        color: "primary",
        activeColor: "accent",
      };
    return (
        <div class="card w-90 mx-auto bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl font-bold text-center">{re?.name}</h2>
          <p>{re?.review}</p>
          <div>
            <p>Rating: {re?.rating}</p>
          <ReactStars {...rating} />
          </div>
        </div>
      </div>
    );
};

export default SingleReview;