import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const GSAP1 = () => {

    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
    const containerRef = useRef();

    // The useGSAP hook is used to run the GSAP animation
    useGSAP(() => {
        gsap.from(containerRef.current, {
            width: '60%',  // Animate width from 40% to 100%
            fontSize: 0,  // Animate font size from 0 to the final size
            borderRadius: "60px",  // Set the border radius
            scrollTrigger: {
                trigger: containerRef.current,  // Use the container reference
                start: "top 90%",  // Start when the top of the container is 10% visible from the top
                end: "top 10%",    // End when the top of the container reaches 20% of the viewport height
                scrub: true,       // Smooth scroll-linked animation
                ease: "power3.inOut", // Ease for quick start, slow middle, and quick end
            }
        });

        return () => ScrollTrigger.killAll()
    }, []); // The second argument ensures the hook runs once, similar to componentDidMount

    return (
        <div className='w-full  h-screen mt-0 flex justify-center'>
            <div
                ref={containerRef}
                className="h-screen   bg-gradient-bg rounded-none w-full bg-no-repeat overflow-hidden  bg-cover text-white font-bold flex justify-center items-center"
            >
                <div className='w-fit  h-[50%] text-center flex flex-col items-center justify-center gap-12'>
                    <p className='text-[52px] leading-[71.29px]'>
                        We are dolor sit amet, cons <br /> ectetur adipiscing elit. Maecenas <br /> sed dolor sapien.
                    </p>
                    <p className='text-[24px] w-[80ch]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel arcu volutpat odio pellentesque egestas. Vivamus dictum, sem rutrum sodales egestas, eros metus porta tellus, sed ullamcorper leo nisi a mauris. Vestibulum aliquam rhoncus eleifend. Donec tincidunt lorem eget purus posuere, ut tincidunt dolor bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default GSAP1