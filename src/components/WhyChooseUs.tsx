import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='mx-[121px] flex flex-col justify-center items-center'>
        <div className='text-[#201446] text-[52px] font-medium font-serif'>Why Choose Us</div>
        {/* content  */}
        <div className='mt-[60px] w-full'>
            {/* line 1  */}
            <div className='flex justify-between'>
                <div className='w-[290px] h-[189px] flex flex-col items-center'>
                    <img className='w-[40px] h-[40px] ' src='./extensive-media-reach.svg'></img>
                    <div className='font-medium text-[24px] text-[#161616] text-center '>Extensive Media Reach</div>
                    <div className='font-normal text-[16px] text-[#444444] leading-[24px] text-center '>With connections to 100+ media outlets, we ensure your message reaches the right audience & generates buzz across diverse platforms.</div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs