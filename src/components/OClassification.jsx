import React from "react";

const OClassification = () => {
  return (
    <div className="mt-20 min-h-screen bg-white flex flex-col items-center py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        The O nonimmigrant classification are commonly referred to as:
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 flex items-center font-sans justify-center border-2 rounded-full mb-4 transition-colors duration-300 hover:bg-[#56FEFE] border-[#56FEFE]">
            {" "}
            <p className="text-2xl font-bold text-gray-800">0-1A</p>
          </div>
          <p className="text-gray-700">
            Individuals with an extraordinary ability in the sciences,
            education, business, or athletics (not including the arts, motion
            pictures or television industry)
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="hover:bg-[#56FEFE] border-[#56FEFE] w-32 h-32 flex items-center font-sans justify-center border-2  rounded-full mb-4">
            <p className="text-2xl font-bold text-gray-800">0-1B</p>
          </div>
          <p className="text-gray-700">
            Individuals with an extraordinary ability in the arts or
            extraordinary achievement in motion picture or television industry;
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className=" w-32 h-32 flex font-sans items-center justify-center border-2 hover:bg-[#56FEFE] border-[#56FEFE] rounded-full mb-4">
            <p className="text-2xl font-bold text-gray-800">0-2</p>
          </div>
          <p className="text-gray-700">
            Individuals who will accompany an O–1 artist or athlete to assist in
            a specific event or performance;
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className=" w-32 h-32 flex font-sans items-center justify-center border-2 hover:bg-[#56FEFE] border-[#56FEFE] rounded-full mb-4">
            <p className="text-2xl font-bold text-gray-800">0-3</p>
          </div>
          <p className="text-gray-700">
            Individuals who are the spouse or children of O–1 and O–2 visa
            holders.
          </p>
        </div>
      </div>

      <div className="-ml-[800px] mt-16 text-left">
        <p className=" text-2xl">
          For more details check out{" "}
          <a
            href="https://www.uscis.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#56FEFE] underline"
          >
            USCIS website
          </a>
        </p>
      </div>
    </div>
  );
};

export default OClassification;
