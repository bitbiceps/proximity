import logo from "../assets/footer-logo.svg";
import linkedin from "../assets/linkedIn.svg"
import insta from "../assets/insta.svg"
import x from "../assets/x.svg"
import c from "../assets/copy-right.svg"
import arrow from "../assets/right-arrow.svg"
const Footer = () => {
  return (
    <div className="bg-[#000000] w-full  py-[52px] mt-[92px]">
      <div className="mx-[182px] flex justify-between pb-[24px]  border-b-gray-600 border-b-[1px] ">
        <div>
          <img src={logo}></img>
          <div className="mt-[32px] font-medium text-[#FFFFFF] text-[16px]">
            +91 9999999999
          </div>
          <div className="mt-[6px] font-medium text-[#FFFFFF] text-[16px]">
            loremipsum@gmail.com
          </div>
        </div>
        <div>
          <div className="text-[18px] font-semibold text-[#FFFFFF]">
            Quick Links
          </div>
          <div className="text-gray-500 font-medium text-[16px] mt-[14px]">
            Home
          </div>
          <div className="text-gray-500 font-medium text-[16px] mt-[6px]">
            Products & Pricing
          </div>
          <div className="text-gray-500 font-medium text-[16px] mt-[6px]">
            Press Releases
          </div>
          <div className="text-gray-500 font-medium text-[16px] mt-[6px]">
            FAQs
          </div>
        </div>
        <div className="flex flex-col justify-start w-[248px]">
          <div className="text-[18px] font-semibold text-[#FFFFFF]">
            Sign Up for Free Trial
          </div>
          <div className="w-[246px] h-[50px] flex mt-[24px]">
            {/* Email input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-full px-[19px] border border-gray-300 rounded-l-[6px] text-sm outline-none placeholder:text-[#2324FA] placeholder:text-[10px]"
            />

            {/* Submit button */}
            <button className="w-[50px] h-full bg-[#8A62F6] text-[#D6D6D6] text-[16px] font-bold rounded-r-md flex justify-center items-centerk">
              <img src={arrow} ></img>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-[182px] mt-[24px] ">
        <div className="flex gap-[10px]">
          <div className=" h-[35px] w-[35px] rounded-full border-[#FFFFFF33] border-[1.5px] flex justify-center items-center">
            <img src={linkedin}></img>
          </div>
          <div className=" h-[35px] w-[35px] rounded-full border-[#FFFFFF33] border-[1.5px] flex justify-center items-center">
            <img src={insta}></img>
          </div>
          <div className=" h-[35px] w-[35px] rounded-full border-[#FFFFFF33] border-[1.5px] flex justify-center items-center">
            <img src={x}></img>
          </div>
        </div>
        <div className="flex gap-[5px]">
          <div className="w-[24px] h-[24px]"><img className="w-[24px] h-[24px] object-contain" src={c} ></img></div>
          <div className="text-[#FFFFFF] font-normal text-[16px]">2024 All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
