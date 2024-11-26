import React from 'react';
import arrowDown from "../assets/arrow_down.png";
import arrowDownWhite from "../assets/arrow_down-white.png"
import article1 from "../assets/articles/article1.png";
import article2 from "../assets/articles/article2.png";
import article3 from "../assets/articles/article3.png";
import article4 from "../assets/articles/article4.png";

const Journals = ({ inner }) => {
    const slides = [
        article1,
        article2,
        article3,
        article4,
    ];

    return (
        <>
            <div className={`w-full h-[500px]  ${inner ? 'bg-app-purple-1' : 'bg-app-aqua-1'} font-medium flex items-center py-12 ${inner && 'text-white'}`}>
                <div className='px-4 md:px-0 flex flex-col justify-center gap-20 h-fit md:ml-28'>
                    <div className='w-full lg:w-[70%] xl:w-[40%]'>
                        <p className='text-[32px] lg:text-[52px] font-semibold'>Our Placements dolor sit amet, cons ectetur adipiscing elit. Maecenas sed dolor sapien.</p>
                    </div>
                    <div className='text-2xl w-fit flex items-center justify-center gap-4'>
                        <p>Enjoy Our Journey</p>
                        <img src={inner ? arrowDownWhite : arrowDown} alt="Arrow Down" />
                    </div>
                </div>
            </div>

            <div className="w-full h-[500px] overflow-hidden">
                <div className="h-40 bg-app-aqua-1 relative">
                    <div className="w-full h-fit absolute px-4 top-0 left-0">
                        <div className="flex animate-loop-scroll gap-4">
                            {[...slides, ...slides].map((slide, idx) => (
                                <div
                                    key={`${slide}-${idx}`}
                                    className="flex-shrink-0 bg-white h-[320px] w-[400px]"
                                >
                                    <img
                                        src={slide}
                                        alt={`Article ${idx + 1}`}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Journals;
