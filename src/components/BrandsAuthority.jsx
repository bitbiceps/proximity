import React from 'react'
import PhoneCard from './PhoneCard'
import PageHeader from './common/PageHeader'

const BrandsAuthority = () => {
  return (
    <div className="mt-[142px] w-full h-fit">
      {/* Heading */}
      <PageHeader label={"Establishing Your Brand's Authority"} />
      <div className='flex flex-col md:flex-row justify-center md:gap-32 items-center  h-fit w-full mt-[54px] '>
        <div className='flex flex-col items-stretch justify-center h-fit w-fit gap-32'>
          <PhoneCard
            label={"Improved Google Ranking"}
            text={"Achieve higher visibility on Google search results by leveraging high domain authority links. Once your articles are published, Google indexes the backlinks, boosting your SEO ranking and positioning your brand on the coveted first page of search results."}
          />
          <PhoneCard
            label={"Improved Google Ranking"}
            text={"Achieve higher visibility on Google search results by leveraging high domain authority links. Once your articles are published, Google indexes the backlinks, boosting your SEO ranking and positioning your brand on the coveted first page of search results."}
          />
        </div>
        <div className='flex flex-col items-stretch justify-center h-fit w-fit gap-32 '>
          <PhoneCard
            label={"Improved Google Ranking"}
            text={"Achieve higher visibility on Google search results by leveraging high domain authority links. Once your articles are published, Google indexes the backlinks, boosting your SEO ranking and positioning your brand on the coveted first page of search results."}
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