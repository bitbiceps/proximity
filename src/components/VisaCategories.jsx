import Liberty from "../assets/liberty.png";
import design from "../assets/design.svg";
import QueenTower from "../assets/tower.png";
import HighTower from "../assets/hightower.png";
import Europe from "../assets/europe.svg";
import Canada from "../assets/canada.svg";
import { Link } from "react-router-dom";
import { appRoutes } from "../utils";
import ButtonVisa from "./common/ButtonVisa/ButtonVisa";
const VisaCategories = () => {
  return (
    <div className="bg-indigo-50 pt-24 pb-52 overflow-x-hidden">
      <div className="text-center">
        <button
          className=" text-white font-bold px-6 py-2 rounded-lg uppercase tracking-wide mb-4"
          style={{ backgroundColor: "#2324FA" }}
        >
          Visa Solutions By Region
        </button>
        <h2
          className="text-[40px] font-bold  mb-4"
          style={{ color: "#201446" }}
        >
          Explore Visa Categories and Criteria by Region
        </h2>
        <p
          className="text-2xl italic text-indigo-700 font-albara"
          style={{ color: "#201446" }}
        >
          Discover Comprehensive Visa Solutions Tailored to Your Destination
        </p>
      </div>

      <Link to={appRoutes.inner_country.dynamic("usa")}>
        <div className="mt-32 relative container mx-auto max-w-5xl" >
          <img
            className="-ml-[300px] -mt-[70px] absolute inset-0 w-full h-[500px]  pointer-events-none"
            src={design}
          />
          <div
            className="relative bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center h-[300px]"
            style={{ borderRadius: "30px" }}
          >
            <div className="p-10 flex-1">
              <h3
                className="text-[32px]   mb-24 "
                style={{ color: "#2324FA", fontWeight: "900" }}
              >
                Visa Solutions for <br />
                the United States
              </h3>
              <div
                className="btn border-2 border-gray-400 bg-blue-500 flex items-center justify-center w-[190px] h-[60px] rounded-full transition-all duration-300 hover:border-0 hover:bg-transparent hover:shadow-none"
                style={{
                  marginTop:"-50px",
                  boxShadow:
                    "0px -4px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "none")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0px -4px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)")
                }
              >
                <ButtonVisa width="180px" text={"Get Started"} />
              </div>
            </div>

            <div className="absolute top-[-5.2rem] left-[45%] transform -translate-x-1/2">
              <img
                src={Liberty}
                alt="Statue of Liberty"
                className="w-56 md:w-72 h-96 object-contain"
                style={{ zIndex: 1 }}
              />
            </div>

            <div className="ml-24 p-32 flex-1 -mt-16">
              <h4
                className="text-lg font-semibold text-indigo-900 mb-4"
                style={{ color: "#3D3D3D" }}
              >
                Explore Visa Categories:
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {["EB1A", "EB-2", "EB-3", "O-1", "F-1", "etc"].map(
                  (category) => (
                    <button
                      key={category}
                      className="w-[90px] text-xl bg-cyan-200 hover:bg-cyan-300 font-sans font-semibold py-2 rounded-lg transition"
                      style={{ backgroundColor: "#56FEFE" }}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link to={appRoutes.inner_country.dynamic("europe")}>
        <div className="mt-96 relative container mx-auto max-w-5xl">
          <img
            className="ml-[400px] -mt-[200px] absolute inset-0 w-full h-[600px]  pointer-events-none"
            src={Europe}
          />
          <div
            className="relative bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center h-[300px]"
            style={{ borderRadius: "30px" }}
          >
            <div className="p-10 flex-1 ">
              <h3 className="text-[32px] font-bold text-blue-700 mb-24 ">
                Your Gateway <br />
                to Europe
              </h3>
              <div
                className="btn border-2 border-gray-400 bg-blue-500 flex items-center justify-center w-[190px] h-[60px] rounded-full transition-all duration-300 hover:border-0 hover:bg-transparent hover:shadow-none"
                style={{ marginTop:"-50px",
                  boxShadow:
                    "0px -4px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "none")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0px -4px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)")
                }
              >
                <ButtonVisa width="180px" text={"Get Started"} />
              </div>
            </div>

            <div className="absolute  top-[-5.9rem] left-[42%] transform -translate-x-1/2">
              <img
                src={QueenTower}
                alt="Statue of Liberty"
                style={{ zIndex: 1 }}
              />
            </div>

            <div className="ml-24 p-32 flex-1 -mt-16">
              <h4 className="text-lg font-semibold text-indigo-900 mb-4"  style={{ color: "#3D3D3D" }}>
                Explore Visa Categories:
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {["UK Global talent Visa", "Schengen Visa"].map((category) => (
                  <button
                    key={category}
                    className=" text-xl bg-cyan-200 hover:bg-cyan-300 font-sans font-semibold py-2 rounded-lg transition"
                    style={{ backgroundColor: "#56FEFE" }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link to={appRoutes.inner_country.dynamic("canada")}>
        <div className="mt-96 relative container mx-auto max-w-5xl " >
          <img
            className="-ml-[470px] -mt-[190px] absolute inset-0 w-full h-[600px]  pointer-events-none"
            src={Canada}
          />
          <div
            className="relative bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center h-[300px]"
            style={{ borderRadius: "30px",height:"330px" }}
          >
            <div className="p-10 flex-1">
              <h3 className="text-[32px] font-extrabold text-blue-700 mb-14 ">
                Simplifying Visa <br />
                Applications for
                <br />
                Canada
              </h3>
              <div
                className="btn border-2 border-gray-400 bg-blue-500 flex items-center justify-center w-[190px] h-[60px] rounded-full transition-all duration-300 hover:border-0 hover:bg-transparent hover:shadow-none"
                style={{
                  marginTop:"-10px",
                  boxShadow:
                    "0px -4px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "none")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0px -4px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)")
                }
              >
                <ButtonVisa width="180px" text={"Get Started"} />
              </div>
            </div>

            <div className="absolute top-[-3.4rem] left-[45%] transform -translate-x-1/2">
              <img
                src={HighTower}
                alt="Statue of Liberty"
                className="w-96 md:w-72 object-contain"
                style={{ zIndex: 1 }}
              />
            </div>

            <div className="ml-24 p-32 flex-1">
              <h4 className="text-lg font-semibold text-indigo-900 mb-4"  style={{ color: "#3D3D3D" }}>
                Explore Visa Categories:
              </h4>
              <div className="grid grid-cols-1 gap-4" >
                {[
                  "Express Entry System",
                  "Provincial Nominee Programs(PMPs)",
                  "Family Sponsorship",
                ].map((category) => (
                  <button
                    key={category}
                    className=" text-xl bg-cyan-200 hover:bg-cyan-300 font-sans  font-semibold py-2 rounded-lg transition"
                    style={{ backgroundColor: "#56FEFE" }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VisaCategories;
