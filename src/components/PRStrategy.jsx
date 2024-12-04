import React from 'react'
import devices from "../assets/devices.png"
import ButtonVisa from './common/ButtonVisa/ButtonVisa'

const PRStrategy = () => {
    return (
        <div className='flex flex-col md:flex-row bg-app-purple-1 items-center justify-center overflow-hidden gap-10'>
            <div className='w-full p-4 justify-center items-center md:w-1/2 flex flex-col text-white gap-10 md:justify-start md:items-start md:translate-x-[140px]'>
                <p className='text-[56px] w-[90%] text-white font-extrabold'>
                    Ready to Elevate <br />
                    Your PR Strategy?
                </p>
                <p className="text-[28px] w-full max-w-[50ch] leading-snug">
                    Contact us today to schedule a consultation and discover how Proximity can help you achieve your PR goals and stand out in
                    the crowded media landscape.
                </p>

                <ButtonVisa width='180px' text={"Get Started"} />
            </div>
            <div className='w-1/2'>
                <img src={devices} className="w-[100%] object-contain" alt="Device" />
            </div>
        </div>
    )
}

export default PRStrategy

