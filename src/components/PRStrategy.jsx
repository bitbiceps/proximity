import React from 'react'
import devices from "../assets/devices.png"
import ButtonVisa from './common/ButtonVisa/ButtonVisa'

const PRStrategy = () => {
    return (
        <div className='flex flex-col md:flex-row bg-app-purple-1 items-center justify-center overflow-hidden'>
            <div className='w-full p-4 justify-center items-center md:w-1/3 flex flex-col text-white gap-10 md:justify-start md:items-start md:translate-x-[140px]'>
                <p className='text-[52px] w-[90%] text-white'>
                    Ready to Elevate
                    Your PR Strategy?
                </p>
                <p className='text-[24px] leading-snug'>
                    Contact us today to schedule a consultation and discover how Proximity can help you achieve your PR goals and stand out in
                    the crowded media landscape.
                </p>
                <ButtonVisa  text={"Get Started"} />
            </div>
            <div className='w-2/3'>
                <img src={devices} alt="Device" />
            </div>
        </div>
    )
}

export default PRStrategy

