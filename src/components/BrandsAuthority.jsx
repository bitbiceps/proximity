import React from 'react'
import PhoneCard from './PhoneCard'
import PageHeader from './PageHeader'

const BrandsAuthority = () => {
  return (
    <div className="mt-[136px] w-full h-fit overflow-x-hidden">
      {/* Heading */}
      <PageHeader label={"Establishing Your Brand's Authority"} />
      <div className='flex flex-col md:flex-row justify-center md:gap-16 items-center  h-fit w-full mt-[80px]'>
        <div className='flex flex-col items-stretch justify-center h-fit w-fit gap-32'>
          <PhoneCard
            label={"Enhanced Digital Presence"}
            text={"Take control of your online reputation and shape the narrative surrounding your brand on Google. Our articles showcase your brand's prominence and garner attention from prospective clients, helping to seal the deal and solidify your reputation as a notable player in your industry."}
          />
          <PhoneCard
            label={"Enhanced Trust & Credibility"}
            text={"Featuring on reputable platforms like Marshall, CNBC, The Hindu, Associated Press, Business Insider, Forbes, Entrepreneur.com, MSN etc and enhances your brand's credibility. It signals to potential customers that your product or service is noteworthy and trusted, increasing the likelihood of converting prospects into sales."}
          />
        </div>
        <div className='flex flex-col items-stretch justify-center h-fit w-fit gap-32 translate-y-20'>
          <PhoneCard
            label={"Established Thought Leadership"}
            text={"Position your brand as an authority in your industry by sharing valuable insights, expertise, and success stories through our published articles. Establishing thought leadership enhances your brand's credibility and trustworthiness, positioning you as a go-to resource for industry knowledge."}
          />
          <PhoneCard
            label={"Improved Google Ranking"}
            text={"Achieve higher visibility on Google search results by leveraging high domain authority links. Once your articles are published, Google indexes the backlinks, boosting your SEO ranking and positioning your brand on the coveted first page of search results."}
          />
        </div>

      </div>
    </div>
  )
}

export default BrandsAuthority