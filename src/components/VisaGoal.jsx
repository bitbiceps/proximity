import VisaGoals from "../assets/visagoal.png";
import Visa2 from "../assets/visagoal3.svg";
import Visa3 from "../assets/visagoal4.svg";
import Visa4 from "../assets/visagoal5.svg";
import Button from "./common/Button/Button";

const VisaGoal = () => {
  return (
    <div className="-mt-20">
      <div className="mb-10 text-center text-4xl font-semibold">
        Solutions We Provide
      </div>
      <div
        className=" w-[83%] mx-auto text-white px-8 pt-12 rounded-lg flex flex-col md:flex-row items-center shadow-lg pb-12"
        style={{ backgroundColor: "#8A62F6" }}
      >
        <div className="flex-1 text-left">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">
              Discover How We Can Help You Achieve Your Visa Goals
            </h1>
            <hr className="border-white w-full border-[3px] rounded-lg mx-auto md:mx-0 mb-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <img
                    src={Visa3}
                    alt="Icon"
                    className="w-14 h-14 p-2 rounded-full mx-auto"
                    style={{ backgroundColor: "#8A62F6" }}
                  />
                ),
                title: <>Personalized PR Strategies</>,
              },
              {
                icon: (
                  <img
                    src={Visa2}
                    alt="Icon"
                    className="w-14 h-14 p-2  rounded-full mx-auto"
                    style={{ backgroundColor: "#8A62F6" }}
                  />
                ),
                title: "Application Assistance",
              },
              {
                icon: (
                  <img
                    src={Visa4}
                    alt="Icon"
                    className="w-14 h-14 p-2 rounded-full mx-auto"
                    style={{ backgroundColor: "#8A62F6" }}
                  />
                ),
                title: (
                  <div className="flex flex-col px-10 ">
                    <span>Ongoing</span>
                    <span>Support</span>
                  </div>
                ),
              },
              {
                icon: (
                  <img
                    src={Visa3}
                    alt="Icon"
                    className="w-14 h-14 p-2  rounded-full mx-auto"
                    style={{ backgroundColor: "#8A62F6" }}
                  />
                ),
                title: "Ongoing Guidance",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex justify-evenly bg-white text-purple-500 p-4 rounded-lg shadow-md text-center"
              >
                <div
                  className="w-18 h-18 p-2 flex justify-center items-center border-2  rounded-full mx-auto"
                  style={{ borderColor: "#8A62F6" }}
                >
                  <div
                    className="w-16 h-16 p-2 flex justify-center items-center rounded-full"
                    style={{ backgroundColor: "#8A62F6" }}
                  >
                    {feature.icon}
                  </div>
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#8A62F6" }}
                >
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center md:text-left mt-8">
            <Button width="180px" text={"Explore in detail"}/>
          </div>
        </div>

        <div className="flex-1 text-center  md:text-right mt-12 md:mt-0 h-full">
          <img
            src={VisaGoals}
            alt="Person with flags"
            className="h-full w-full object-cover mx-auto md:mx-0 -mb-[69px]"
          />
        </div>
      </div>
    </div>
  );
};

export default VisaGoal;
