import React from 'react'
import FeedBackCard from './FeedBackCard'

const Feedback = () => {
  return (
    <div className='w-full md:w-[75vw] mx-auto mt-[100px]'>
      <p className='text-5xl text-center'>
        What Our Customers Are Saying
      </p>
      <div className=' flex justify-evenly items-center gap-6 mt-[50px]'>
        <FeedBackCard />
        <FeedBackCard />
        <FeedBackCard />
      </div>
    </div>
  )
}

export default Feedback