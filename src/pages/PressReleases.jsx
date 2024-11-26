import React, { useState } from 'react'
import RootLayout from '../layout/RootLayout'
import Hero from '../components/Hero'
import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from '../components/DropDown';
import { RxCross2 } from "react-icons/rx";
import Article from '../components/Article';
import article1 from "../assets/articles/article1.png"
import article2 from "../assets/articles/article2.png"
import article3 from "../assets/articles/article3.png"



const PressReleases = () => {
    const [isChannelOpen, setIsChannelOpen] = useState(false);
    const [isYearOpen, setIsYearOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [search, setSearch] = useState("Search for video/audio")
    const [chips, setChips] = useState(["Newest to Oldest", "ABP News"])

    const currentYear = new Date().getFullYear();

    const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

    return (
        <RootLayout>
            <Hero label1={"Comprehensive Resources for"} label2={"Your Immigration Journey"} />

            <div className='mt-[100px] w-[65vw] mx-auto'>
                <div className=' flex items-center h-[65px] justify-between flex-wrap gap-6'>
                    <div className='bg-app-blue-blend flex  h-full items-center justify-center w-fit rounded-full px-10 text-black gap-1'>
                        <AiOutlineSearch className='text-2xl' />
                        <input type="text" className='outline-none ring-0 w-screen lg:w-[600px] p-4 text-2xl font-medium  bg-transparent h-full' value={search} />
                    </div>
                    <div className='bg-app-blue-blend flex items-center justify-center w-fit rounded-full px-10 text-black  h-full gap-2'>
                        <Dropdown isOpen={isChannelOpen} setIsOpen={setIsChannelOpen} options={["ABP News", "Zee News", "BBC", "India tv"]} label={"Channel"} />
                        <div className="w-[30px] rotate-90 bg-gray-400  h-[2px]"></div>
                        <Dropdown isOpen={isYearOpen} setIsOpen={setIsYearOpen} options={years} label={"Year"} />
                    </div>
                    <div className='w-fit flex justify-center items-center bg-app-blue-blend rounded-full px-10 h-full'>
                        <Dropdown isOpen={isSortOpen} setIsOpen={setIsSortOpen} options={["Ascending a-Z", "Decending Z-a", "Latest first"]} label={"Sort"} />
                    </div>
                </div>

                <div className='flex justify-start h-[45px] gap-4 mt-[40px]'>
                    {chips.map(chip => (
                        <>
                            <div className=' flex w-fit h-full items-center justify-center gap-4 text-white rounded-full bg-app-purple-2 px-4'>
                                <p className='text-sm font-bold'>{chip}</p>
                                <RxCross2 className='text-xl cursor-pointer' />
                            </div>
                        </>
                    ))}
                </div>

                <div className='mt-[50px]'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Article
                            img={article1}
                            label={"LABEL • ZEE NEWS"}
                            text={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article2}
                            label={"LABEL • ZEE NEWS"}
                            text={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article2}
                            label={"LABEL • ZEE NEWS"}
                            text={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article1}
                            label={"LABEL • ZEE NEWS"}
                            text={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article2}
                            label={"LABEL • ZEE NEWS"}
                            text={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article3}
                            label={"LABEL • ZEE NEWS"}
                            text={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article1}
                            label={"LABEL • ZEE NEWS"}
                            text={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article2}
                            label={"LABEL • ZEE NEWS"}
                            text={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article3}
                            label={"LABEL • ZEE NEWS"}
                            text={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}

export default PressReleases