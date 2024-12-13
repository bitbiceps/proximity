import { useState } from "react";
import extensive from "../assets/extensive-media-reach.svg";
import check from "../assets/check-mark.svg"
import tailoredApproch from "../assets/tailored-approach.svg"
import visa from "../assets/visa.svg"
import inovativeSolution from "../assets/innovative-solutions.svg"
import tag from "../assets/affordable-pricing.svg"
import PageHeader from "./common/PageHeader";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoPricetags } from "react-icons/io5";
import { PiShareNetworkDuotone } from "react-icons/pi";
import { PiShareNetworkFill } from "react-icons/pi";
import { PiSealCheckFill } from "react-icons/pi";
import { PiSealCheckLight } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa6";
import { LiaCcVisa } from "react-icons/lia";
import { TfiDropbox } from "react-icons/tfi";
import { TfiDropboxAlt } from "react-icons/tfi";




const WhyChooseUsData1 = [
  {
    image: extensive,
    hovericon: <PiShareNetworkDuotone className="text-[#2324FA] h-[40px] w-[40px] "/>,
    icon: < PiShareNetworkFill className="text-[#2324FA] h-[40px] w-[40px] "/>,
    head: "Extensive Media Reach",
    content: "With connections to 100+ media outlets, we ensure your message reaches the right audience & generates buzz across diverse platforms.",
  },
  {
    image: check,
    hovericon: <PiSealCheckLight className="text-[#2324FA] h-[40px] w-[40px] "/>,
    icon: < PiSealCheckFill className="text-[#2324FA] h-[40px] w-[40px] "/>,
    head: "Proven Success",
    content: "With over 1000 articles published and numerous successful PR campaigns under our belt, we have a proven track record of delivering tangible results for our clients.",
  },
  {
    image: tailoredApproch,
    hovericon: <FaRegUser className="text-[#2324FA] h-[40px] w-[40px] "/>,
    icon: < FaUser className="text-[#2324FA] h-[40px] w-[40px] "/>,
    head: "Tailored Approach",
    content: "We believe in personalized PR strategies tailored to each client's unique goals, ensuring maximum impact and ROI.",
  },
];
const WhyChooseUsData2 = [
  {
    image: visa,
    hovericon: <LiaCcVisa className="text-[#2324FA] h-[40px] w-[40px] "/>,
    icon: < FaCcVisa className="text-[#2324FA] h-[40px] w-[40px] "/>,
    head: "Designed for Visa Applicants",
    content: "Our articles don't just help demonstrate extraordinary ability, either. They help your online visibility as a whole.",
  },
  {
    image: inovativeSolution,
    hovericon: <TfiDropbox className="text-[#2324FA] h-[40px] w-[40px] "/>,
    icon: < TfiDropboxAlt className="text-[#2324FA] h-[40px] w-[40px] "/>,
    head: "Innovative Solutions",
    content: "With connections to 100+ media outlets, we ensure your message reaches the right audience & generates buzz across diverse platforms.",
  },
  { image: tag,
    hovericon: <IoPricetagsOutline className="text-[#2324FA] h-[40px] w-[40px] "/>,
    icon: < IoPricetags className="text-[#2324FA] h-[40px] w-[40px] "/>,
    head: "Affordable Pricing",
    content: "Starting at just £3500 per campaign, you can transform your online presence in dramatic new ways, getting link placements with the best sites online.",
  },
];

const WhyChooseUs = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <div className="mt-[152px] mb-[80px] w-full md:w-[80vw] mx-auto flex flex-col justify-center items-center">
      <PageHeader label={"Why Choose Us"} />
      {/* content  */}
      <div className="mt-[60px] flex flex-wrap justify-center md:justify-between w-full">

      {WhyChooseUsData1.map((item, index) => {
          return (
            <div onMouseEnter={() => setHoverIndex(index)}  onMouseLeave={() => setHoverIndex(null)} key={index} className="w-[310px] h-auto flex flex-col items-center">
              {/* <img className="w-[40px] h-[40px]" src={item.image} alt="icon" /> */}
              {hoverIndex === index ? item.hovericon : item.icon}
              <div className="font-medium text-[24px] text-[#161616] mt-[12px] text-center">
                {item.head}
              </div>
              <div className="font-normal font-sans text-[16px] text-[#444444] leading-[24px] mt-[12px] text-center">
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-[60px] flex flex-wrap justify-center md:justify-between w-full">

        {WhyChooseUsData2.map((item, index) => {
          return (
            <div onMouseEnter={() => setHoverIndex(index + 3)}  onMouseLeave={() => setHoverIndex(null)} key={index} className="w-[310px] h-auto flex flex-col items-center">
              {/* <img className="w-[40px] h-[40px]" src={item.image} alt="icon" /> */}
              {hoverIndex === index + 3 ? item.hovericon : item.icon}
              <div className="font-medium text-[24px] text-[#161616] mt-[12px] text-center">
                {item.head}
              </div>
              <div className="font-normal font-sans text-[16px] text-[#444444] leading-[24px] mt-[12px] text-center">
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
