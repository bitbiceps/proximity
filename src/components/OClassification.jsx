import React from "react";

const OClassification = () => {
  return (
    <div className="mt-20 min-h-screen bg-white flex flex-col items-center py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        The O nonimmigrant classification are commonly referred to as:
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl">
        {/* O-1A */}
        <div className="flex flex-col items-center text-center">
          <div className="hover:bg-cyan-500 w-32 h-32 flex items-center justify-center border-2 border-cyan-500 rounded-full mb-4">
            <p className="text-xl font-bold text-gray-800">O-1A</p>
          </div>
          <p className="text-gray-700">
            Individuals with an extraordinary ability in the sciences,
            education, business, or athletics (not including the arts, motion
            pictures or television industry)
          </p>
        </div>

        {/* O-1B */}
        <div className="flex flex-col items-center text-center">
          <div className="hover:bg-cyan-500 w-32 h-32 flex items-center justify-center border-2 border-cyan-500 rounded-full mb-4">
            <p className="text-xl font-bold text-gray-800">O-1B</p>
          </div>
          <p className="text-gray-700">
            Individuals with an extraordinary ability in the arts or
            extraordinary achievement in motion picture or television industry;
          </p>
        </div>

        {/* O-2 */}
        <div className="flex flex-col items-center text-center">
          <div className="hover:bg-cyan-500 w-32 h-32 flex items-center justify-center border-2 border-cyan-500 rounded-full mb-4">
            <p className="text-xl font-bold text-gray-800">O-2</p>
          </div>
          <p className="text-gray-700">
            Individuals who will accompany an O–1 artist or athlete to assist in
            a specific event or performance;
          </p>
        </div>

        {/* O-3 */}
        <div className="flex flex-col items-center text-center">
          <div className="hover:bg-cyan-500 w-32 h-32 flex items-center justify-center border-2 border-cyan-500 rounded-full mb-4">
            <p className="text-xl font-bold text-gray-800">O-3</p>
          </div>
          <p className="text-gray-700">
            Individuals who are the spouse or children of O–1 and O–2 visa
            holders.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="-ml-[800px] mt-16 text-left">
        <p className="text-gray-700 text-2xl">
          For more details check out{" "}
          <a
            href="https://www.uscis.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 underline hover:text-cyan-600"
          >
            USCIS website
          </a>
        </p>
      </div>
    </div>
  );
};

export default OClassification;
