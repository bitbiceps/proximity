import React from 'react'
import devices from "../assets/devices.png"
import Button from './common/Button/Button'

const PRStrategy = () => {
    return (
        <div className='flex flex-col md:flex-row bg-app-purple-1 items-center justify-center'>
            <div className='w-full p-4 justify-center items-center md:w-1/3 flex flex-col gap-10 md:justify-start md:items-start md:translate-x-[140px]'>
                <p className='text-[52px] w-[100%] text-[#ffffff] font-medium'>
                    Ready to Elevate
                    Your PR Strategy?
                </p>
                <p className='text-[24px] text-[#ffffff] font-thin leading-[36px]'>
                    Contact us today to schedule a consultation and discover how Proximity can help you achieve your PR goals and stand out in
                    the crowded media landscape.
                </p>
                <Button/>
            </div>
            <div className='w-2/3'>
                <img src={devices} alt="Device" />
            </div>
        </div>
    )
}

export default PRStrategy

