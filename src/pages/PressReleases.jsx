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

const PressReleases = () => {
    const [openDropdown, setOpenDropdown] = useState(null); 
    const [search, setSearch] = useState("");
    const [chips, setChips] = useState(["Newest to Oldest", "XYZ"]);
    const [sort, setSort] = useState([]);
    const [channel, setChannel ] = useState([]);
    const [year, setYear ] = useState([]);

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => currentYear - i);
    const removeSort = (indexToRemove) => {
        setSort((prevChips) => prevChips.filter((_, idx) => idx !== indexToRemove));
    };
    const removeChannel = (indexToRemove) => {
        setChannel((prevChips) => prevChips.filter((_, idx) => idx !== indexToRemove));
    };
    const removeYear = (indexToRemove) => {
        setYear((prevChips) => prevChips.filter((_, idx) => idx !== indexToRemove));
    };
    const removeChip = (indexToRemove) => {
        setChips((prevChips) => prevChips.filter((_, idx) => idx !== indexToRemove));
    };

    const handleDropdownToggle = (dropdown) => {
        setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
    };

    return (
        <RootLayout>
            <HomeHero vdo={map1} label1={"Comprehensive Resources for"} label2={"Your Immigration Journey"} />
            <div className='mt-[100px] w-full lg:w-[85vw] mx-auto'>
                <div className='flex items-center  justify-between gap-6'>
                    <div className='bg-app-blue-blend flex h-[60px] items-center justify-center md:w-fit rounded-full px-10 text-black gap-1 w-fit'>
                        <AiOutlineSearch className='text-[20px]' />
                        <input
                            onChange={e => setSearch(e.target.value)}
                            type="text"
                            placeholder='Search for video/audio'
                            className='placeholder:text-[20px] text-[20px] placeholder:text-[#000000] outline-none ring-0 w-screen lg:w-[600px] p-4  font-medium bg-transparent h-full'
                            value={search}
                        />
                    </div>
                    
                        <div className='w-fit bg-app-blue-blend h-[60px] flex items-center justify-center  rounded-full px-10 text-[18px] gap-2'>
                            <Dropdown
                                state={channel}
                                setState={setChannel}
                                isOpen={openDropdown === "channel"}
                                setIsOpen={() => handleDropdownToggle("channel")}
                                options={["ABP News", "Zee News", "BBC", "India tv"]}
                                label={"Channel"}
                            />
                            <div className="w-[30px] rotate-90 bg-gray-400 h-[2px]"></div>
                            <Dropdown
                                state={year}
                                setState={setYear}
                                isOpen={openDropdown === "year"}
                                setIsOpen={() => handleDropdownToggle("year")}
                                options={years}
                                label={"Year"}
                            />
                        </div>
                    
                   
                    <div className=' w-fit h-[60px] flex justify-center items-center bg-app-blue-blend rounded-full px-10'>
                        <Dropdown
                            state={sort}
                            setState={setSort}
                            isOpen={openDropdown === "sort"}
                            setIsOpen={() => handleDropdownToggle("sort")}
                            options={["Newest to Oldest", "Oldest to Newest", "Latest first"]}
                            label={"Sort"}
                        />
                    </div>
                    
                   
                </div>

                <div className='w-full gap-[16px] flex h-auto'>
                    <div className='w-[55%] '>
                    
                    </div>
                    <div className='w-[30%] gap-[16px] flex flex-row '>
                        <div className='w-[50%] flex flex-col '>
                        {channel.map((channel, id) => (
                            <div
                                key={`${channel}-${id}`}
                                className='flex w-full my-[8px] py-[8px] px-[16px] h-[40px] items-center justify-around gap-4 text-white text-[14px] font-semibold rounded-full bg-app-purple-2'
                            >
                                <p className='text-sm font-bold'>{channel}</p>
                                <RxCross2 className='text-xl cursor-pointer' onClick={() => removeChannel(id)} />
                            </div>
                        ))}
                        </div>

                        {/* year  */}
                        <div className='w-[50%] flex-col'>
                        {year.map((year, id) => (
                            <div
                                key={`${year}-${id}`}
                                className='flex w-full my-[8px] py-[8px] px-[16px] h-[40px] items-center justify-around gap-4 text-white text-[14px] font-semibold rounded-full bg-app-purple-2 '
                            >
                                <p className='text-sm font-bold'>{year}</p>
                                <RxCross2 className='text-xl cursor-pointer' onClick={() => removeYear(id)} />
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='w-[15%] flex flex-col'>
                    {sort.map((sort, id) => (
                            <div
                                key={`${sort}-${id}`}
                                className='flex w-full my-[8px] py-[8px] px-[16px] h-[40px] items-center justify-around gap-4 text-white text-[14px] font-semibold rounded-full bg-app-purple-2 '
                            >
                                <p className='text-sm font-bold'>{sort}</p>
                                <RxCross2 className='text-xl cursor-pointer' onClick={() => removeChip(id)} />
                            </div>
                        ))}
                    </div>

                </div>

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
