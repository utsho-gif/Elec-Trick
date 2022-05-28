import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import SingleReview from "./SingleReview";

const ReviewSec = () => {
  const { data: reviews, isLoading } = useQuery("customrev", () =>
    fetch("https://hidden-reef-48781.herokuapp.com/review").then((res) => res.json())
  );
  if(isLoading){
    return <div className='mb-14'><Loading></Loading></div>
}
  return (
    <div class="hero my-12 rounded">
      <div class="hero-content text-center">
        <div class="max-w">
          <h1 class="text-5xl font-bold">Reviews</h1>
          <p class="py-6">
          <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                {
                    reviews?.map(re => <SingleReview key={re._id} re={re}></SingleReview>)
                }
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSec;
