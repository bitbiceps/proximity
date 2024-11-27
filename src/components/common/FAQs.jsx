import { useState } from "react";
import upArrow from "../../assets/up-arrow-faq.svg";
import downArrow from "../../assets/down-arrow-faq.svg";

const faqData = [
  {
    head: "How can Proximity help my startup gain media exposure?",
    content: "Proximity leverages its network and expertise to craft compelling narratives and pitch your startup to relevant media outlets, ensuring your story gets the attention it deserves.",
  },
  {
    head: "What services does Proximity offer?",
    content: "Proximity offers media outreach, branding consultation, and storytelling services to elevate your startup's presence in the market.",
  },
  {
    head: "Can Proximity help with social media campaigns?",
    content: "Yes, Proximity designs and executes social media strategies tailored to your startup's goals and target audience.",
  },
  {
    head: "How do I get started with Proximity?",
    content: "Contact us through our website or schedule a consultation to discuss your needs and how Proximity can assist you.",
  },
  {
    head: "How do I get started with Proximity?",
    content: "Contact us through our website or schedule a consultation to discuss your needs and how Proximity can assist you.",
  },
  {
    head: "How do I get started with Proximity?",
    content: "Contact us through our website or schedule a consultation to discuss your needs and how Proximity can assist you.",
  },
];

const FAQs = ({ inner }) => {
  const [openIndex, setOpenIndex] = useState(0); // Default to the first FAQ being open

  const handleToggle = (index) => {
    // If the clicked FAQ is already open, close it. Otherwise, open it.
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div>
      <div className={`flex justify-between ${!inner && 'md:m-[102px]'} flex-col md:flex-row items-center`}>
        <div className="w-full md:w-[30%] text-[52px] text-[#201446] font-semibold leading-[78px] flex justify-center items-center text-center ">
          Frequently Asked Questions
        </div>
        <div className="w-full md:w-[70%] flex flex-col  items-center">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="w-[95%] border-[1px] border-[#DFDFDF] rounded-[12px] px-[22px] py-[16px] mb-[22px]"
              onClick={() => handleToggle(index)}
            >
              {/* Head */}
              <div className="flex justify-between items-center">
                <div
                  className="text-app-gray-2 font-semibold text-[18px] font-sans cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  {item.head}
                </div>
                <div>
                  <img
                    src={openIndex === index ? upArrow : downArrow}
                    alt="Toggle arrow"
                    className="cursor-pointer"

                  />
                </div>
              </div>
              {/* Content */}
              {openIndex === index && (
                <div className="text-[#6C6C6C] text-[18px] font-sans font-normal mt-[18px]">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
