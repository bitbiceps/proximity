import React from "react";

const ConsultationForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="relative bg-white border border-gray-200 shadow-xl rounded-lg p-10 w-full max-w-6xl">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Consult For One-To-One Help
        </h1>
        <form>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ backgroundColor: "#F9F9F9" }}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 mb-6">
            <input
              type="email"
              placeholder="Email*"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ backgroundColor: "#F9F9F9" }}
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ backgroundColor: "#F9F9F9" }}
            />
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-3 font-medium">PR Required For*</p>
            <div className="flex flex-col  flex-wrap gap-6">
              {["Personal", "PR For Immigration", "Company", "Others"].map(
                (label, idx) => (
                  <label key={idx} className="flex  items-center space-x-3">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{label}</span>
                  </label>
                )
              )}
            </div>
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Your PR Objectives*"
              rows="4"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ backgroundColor: "#F9F9F9" }}
            />
          </div>
          <div className="mb-8">
            <textarea
              placeholder="Additional Information"
              rows="4"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ backgroundColor: "#F9F9F9" }}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-400 hover:bg-blue-500 text-black font-semibold text-lg py-3 px-12 rounded-full shadow-md transition duration-200"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
