import image1 from "../../assets/tailorpr-1.png";
import image2 from "../../assets/tailorpr-2.png";
import image3 from "../../assets/tailorpr-4.png";
import "../../custom.css"
const TailorPRData = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image3 },
];

export const TailorPR = () => {
  return (
    <div className="mt-[136px] w-full overflow-hidden">
      {/* Heading */}
      <div className="text-center text-[52px] text-[#201446] font-albara font-medium">
        Tailored PR Solutions for Every Need
      </div>

      {/* Image Section */}
      <div className="mt-[60px] ">
        <div className="flex gap-[47px] overflow-x-auto scrollbar-hide pl-[121px]">
          {TailorPRData.map((item, index) => (
            <div key={index} className="w-[431px] h-[444px] rounded-[16px] flex-shrink-0">
              <img
                className="w-full h-full object-cover rounded-[16px]"
                src={item.image}
                alt={`PR Solution ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
