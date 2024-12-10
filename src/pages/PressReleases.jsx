import React, { useState } from 'react';
import RootLayout from '../layout/RootLayout';
import HomeHero from "../components/HomeHero";
import { AiOutlineSearch } from "react-icons/ai";
import Dropdown from '../components/common/DropDown';
import { RxCross2 } from "react-icons/rx";
import Article from '../components/Article';
import article1 from "../assets/articles/article1.png";
import article2 from "../assets/articles/article2.png";
import article3 from "../assets/articles/article3.png";
import map1 from "../assets/testing/map1.mp4";
import { LampDemo } from '../ui/Lamp';

const PressReleases = () => {
    const [isChannelOpen, setIsChannelOpen] = useState(false);
    const [isYearOpen, setIsYearOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [search, setSearch] = useState("Search for video/audio")
    const [chips, setChips] = useState(["Newest to Oldest", "XYZ"])

    const currentYear = new Date().getFullYear();

    const years = Array.from({ length: 10 }, (_, i) => currentYear - i);


    const removeChip = (indexToRemove) => {
        setChips((prevChips) => prevChips.filter((_, idx) => idx !== indexToRemove));
    };


    return (
        <RootLayout>
            {/* <HomeHero vdo={map1} label1={"Comprehensive Resources for"} label2={"Your Immigration Journey"} /> */}
            <LampDemo/>
            <div className='mt-[100px] w-full  md:w-[80vw] mx-auto'>
                <div className=' flex items-center h-fit justify-between gap-6'>
                    <div className='bg-app-blue-blend flex  h-[65px] items-center justify-center md:w-fit rounded-full px-10 text-black gap-1 w-screen'>
                        <AiOutlineSearch className='text-2xl' />
                        <input onChange={e => setSearch(e.target.value)} type="text" className='outline-none ring-0 w-screen lg:w-[600px] p-4 text-2xl font-medium  bg-transparent h-full' value={search} />
                    </div>
                    <div className='bg-app-blue-blend h-[65px] flex items-center justify-center w-fit rounded-full px-10 text-black  gap-2'>
                        <Dropdown state={chips} setState={setChips} isOpen={isChannelOpen} setIsOpen={setIsChannelOpen} options={["ABP News", "Zee News", "BBC", "India tv"]} label={"Channel"} />
                        <div className="w-[30px] rotate-90 bg-gray-400  h-[2px]"></div>
                        <Dropdown state={chips} setState={setChips} isOpen={isYearOpen} setIsOpen={setIsYearOpen} options={years} label={"Year"} />
                    </div>
                    <div className='w-fit h-[65px] flex justify-center items-center bg-app-blue-blend rounded-full px-10'>
                        <Dropdown state={chips} setState={setChips} isOpen={isSortOpen} setIsOpen={setIsSortOpen} options={["Newest to Oldest", "Oldest to Newest", "Latest first"]} label={"Sort"} />
                    </div>
                </div>

                {chips.length > 0 && (
                    <div className='flex flex-wrap justify-start h-auto gap-4 mt-[40px]'>
                        {chips.map((chip, idx) => (
                             <div
                             key={`${chip}-${idx}`}
                             className='flex w-auto my-[8px] py-[8px] px-[16px] h-[40px] items-center justify-around gap-4 text-white text-[14px] font-semibold rounded-full bg-app-purple-2'
                         >
                             <p className='text-sm font-bold'>{chip}</p>
                             <RxCross2 className='text-xl cursor-pointer' onClick={() => removeChip(idx)} />
                         </div> 
                        ))}
                    </div>
                )}

                <div className='mt-[50px]'>
                    <div className="grid grid-cols-3 items-center justify-evenly gap-[32px]">
                    <Article
                            img={article1}
                            text={"orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius sagittis metus. Nunc molestie gravida ipsum. Aliquam elementum libero ac tortor tincidunt elementum. Nam condimentum id sapien id convallis."}
                            label={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article1}
                            text={"orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius sagittis metus. Nunc molestie gravida ipsum. Aliquam elementum libero ac tortor tincidunt elementum. Nam condimentum id sapien id convallis."}
                            label={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article1}
                            text={"orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius sagittis metus. Nunc molestie gravida ipsum. Aliquam elementum libero ac tortor tincidunt elementum. Nam condimentum id sapien id convallis."}
                            label={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article1}
                            text={"orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius sagittis metus. Nunc molestie gravida ipsum. Aliquam elementum libero ac tortor tincidunt elementum. Nam condimentum id sapien id convallis."}
                            label={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article1}
                            text={"orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius sagittis metus. Nunc molestie gravida ipsum. Aliquam elementum libero ac tortor tincidunt elementum. Nam condimentum id sapien id convallis."}
                            label={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article1}
                            text={"orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius sagittis metus. Nunc molestie gravida ipsum. Aliquam elementum libero ac tortor tincidunt elementum. Nam condimentum id sapien id convallis."}
                            label={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article1}
                            text={"orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius sagittis metus. Nunc molestie gravida ipsum. Aliquam elementum libero ac tortor tincidunt elementum. Nam condimentum id sapien id convallis."}
                            label={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article2}
                            text={"orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius sagittis metus. Nunc molestie gravida ipsum. Aliquam elementum libero ac tortor tincidunt elementum. Nam condimentum id sapien id convallis."}
                            label={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                        <Article
                            img={article3}
                            text={"orem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius sagittis metus. Nunc molestie gravida ipsum. Aliquam elementum libero ac tortor tincidunt elementum. Nam condimentum id sapien id convallis."}
                            label={"7 Ayurvedic Herbs You Should Know About | A slice of Healthy Living"}
                        />
                    </div>
                </div>
            </div>
        </RootLayout>
    );
};

export default PressReleases;


