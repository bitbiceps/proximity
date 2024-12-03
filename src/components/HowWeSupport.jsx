import React from 'react'
import SupportCard from './SupportCard'

const HowWeSupport = () => {
    return (
        <div className='w-full md:w-[70vw] mx-auto mt-[100px] text-center h-full'>
            <p className='text-5xl'>
                How we Support Your Claim of "Extraordinary Ability"
            </p>
            <div className="flex items-center justify-evenly  gap-6 mt-[54px] h-fit">
                <SupportCard
                    bgClass={"bg-support1"}
                    title={"Publication in Professional or Major Media Outlets"}
                    text={"We ensure your work is featured in recognized professional or trade publications, as well as other major media outlets pertinent to your field."}
                />
                <SupportCard
                    bgClass={"bg-support3"}
                    title={"Emphasis on Your Contributions"}
                    text={"Our focus remains on showcasing your individual achievements, contributions, and expertise within your field, steering clear of generic marketing or promotional content."}
                />

                <SupportCard
                    bgClass={"bg-support2"}
                    title={"Evidence of Reach and Engagement"}
                    text={"We provide documented evidence of the publication's circulation, both online and in print, along with insights into the intended audience, affirming its significant and relevant readership."}
                />
            </div>
        </div>
    )
}

export default HowWeSupport