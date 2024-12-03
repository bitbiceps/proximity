import React from "react";
import FeedBackCard from "./FeedBackCard";

const Feedback = () => {
  return (
    <div className="w-full md:w-[75vw] mx-auto mt-[100px]">
      <p className="text-5xl text-center">What Our Customers Are Saying</p>
      <div className="relative overflow-visible mt-[50px] group">
        <div className="flex gap-6 transition-transform duration-700 group-hover:translate-x-[-25%]">
          <FeedBackCard />
          <FeedBackCard />
          <FeedBackCard />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
