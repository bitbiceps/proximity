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
  const [openIndex, setOpenIndex] = useState(null); // Default: No FAQ is open

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index); // Toggle open/close state
  };

  return (
    <div>
      <div
        className={`flex flex-col md:flex-row ${
          !inner && "md:m-[102px]"
        } items-start`}
      >
        {/* Fixed Header */}
        <div className="mt-48 w-full md:w-[30%] text-[52px] text-[#201446] font-semibold leading-[78px] flex justify-center items-center text-center">
          Frequently Asked Questions
        </div>

        {/* FAQ Accordion */}
        <div className="w-full md:w-[70%] flex flex-col items-center">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="w-[95%] border-[1px] border-[#DFDFDF] rounded-[12px] px-[22px] py-[16px] mb-[22px] transition-all duration-300"
            >
              {/* Question */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="text-app-gray-2 font-semibold text-[18px] font-sans">
                  {item.head}
                </div>
                <div>
                  <img
                    src={openIndex === index ? upArrow : downArrow}
                    alt="Toggle arrow"
                  />
                </div>
              </div>

              {/* Answer */}
              <div
                className={`text-[#6C6C6C] text-[18px] font-sans font-normal mt-[18px] transition-max-height duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;




