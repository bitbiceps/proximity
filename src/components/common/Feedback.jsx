import React from "react";
import FeedBackCard from "./FeedBackCard";

const Feedback = () => {
  return (
    <div className='w-full md:w-[75vw] mx-auto mt-[100px]'>
      <p className='text-5xl text-center'>
        What Our Customers Are Saying
      </p>
      <div className=' flex flex-col  mt-[50px] lg:flex-row'>
        <FeedBackCard />
        <FeedBackCard />
        <FeedBackCard />
      </div>
    </div>
  );
};

export default Feedback;
