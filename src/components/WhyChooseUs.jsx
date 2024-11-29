import extensive from "../assets/extensive-media-reach.svg";
import check from "../assets/check-mark.svg"
import tailoredApproch from "../assets/tailored-approach.svg"
import visa from "../assets/visa.svg"
import inovativeSolution from "../assets/innovative-solutions.svg"
import tag from "../assets/affordable-pricing.svg"
import PageHeader from "./common/PageHeader";
const WhyChooseUsData1 = [
  {
    image: extensive,
    head: "Extensive Media Reach",
    content: "With connections to 100+ media outlets, we ensure your message reaches the right audience & generates buzz across diverse platforms.",
  },
  {
    image: check,
    head: "Proven Success",
    content: "With over 1000 articles published and numerous successful PR campaigns under our belt, we have a proven track record of delivering tangible results for our clients.",
  },
  {
    image: tailoredApproch,
    head: "Tailored Approach",
    content: "We believe in personalized PR strategies tailored to each client's unique goals, ensuring maximum impact and ROI.",
  },
];
const WhyChooseUsData2 = [
  {
    image: visa,
    head: "Designed for Visa Applicants",
    content: "Our articles don't just help demonstrate extraordinary ability, either. They help your online visibility as a whole.",
  },
  {
    image: inovativeSolution,
    head: "Innovative Solutions",
    content: "With connections to 100+ media outlets, we ensure your message reaches the right audience & generates buzz across diverse platforms.",
  },
  {
    image: tag,
    head: "Affordable Pricing",
    content: "Starting at just £3500 per campaign, you can transform your online presence in dramatic new ways, getting link placements with the best sites online.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full md:w-[80vw] mx-auto flex flex-col justify-center items-center">
      <PageHeader label={"Why Choose Us"} />
      {/* content  */}
      <div className="mt-[60px] flex flex-wrap justify-center md:justify-between w-full">

        {WhyChooseUsData1.map((item, index) => {
          return (
            <div key={index} className="w-[310px] h-auto flex flex-col items-center">
              <img className="w-[40px] h-[40px]" src={item.image} alt="icon" />
              <div className="font-medium  text-[24px]  text-center mt-[12px]">
                {item.head}
              </div>
              <div className="font-normal font-sans  text-[16px] text-[#444444] leading-[24px] text-center mt-[12px]">
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-[60px] flex flex-wrap justify-center md:justify-between w-full">

        {WhyChooseUsData2.map((item, index) => {
          return (
            <div key={index} className="w-[310px] h-auto flex flex-col items-center">
              <img className="w-[40px] h-[40px]" src={item.image} alt="icon" />
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
