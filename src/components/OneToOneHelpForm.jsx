import React from 'react';
import PageHeader from "../components/PageHeader"

const OneToOneHelpForm = () => {
  return (
    <div className='w-[90vw] mx-auto shadow-2xl rounded-2xl py-14 px-20 text-xl'>
      <p className='text-4xl text-center mb-12'>
        Consult For One - To - One Help
      </p>
      <form className="w-full bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name*"
              className="mt-1 block w-full px-6 py-3  bg-gray-50 border-[#E0E0E0] outline-none rounded-lg shadow-sm focus:bg-white border  focus:border-app-blue-2"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name*"
              className="mt-1 block w-full px-6 py-3 rounded-lg bg-gray-50 border-[#E0E0E0] outline-none  shadow-sm focus:bg-white border   focus:border-app-blue-2"
              required
            />
          </div>
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            className="mt-8 block w-full px-6 py-3 rounded-lg bg-gray-50 border-[#E0E0E0] outline-none  shadow-sm focus:bg-white border  focus:border-app-blue-2"
            required
          />
        </div>

        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number*"
            className="mt-8 block w-full px-6 py-3 rounded-lg bg-gray-50 border-[#E0E0E0] outline-none  shadow-sm focus:bg-white border  focus:border-app-blue-2"
          />
        </div>

        <div className='mt-12'>
          <label
            htmlFor="prRequiredFor"
            className="block font-medium text-gray-700"
          >
            PR Required For*
          </label>
          <div className="mt-4 space-y-2">
            {['Personal', 'PR for immigration', 'Company', 'Others'].map((option) => (
              <div key={option} className="flex items-center text-lg">
                <input
                  type="checkbox"
                  id={option}
                  name="prRequiredFor"
                  value={option}
                  className="h-6 w-6 text-blue-600 border-gray-300 rounded focus:ring-0 focus:border focus:border-app-blue-2"
                />
                <label
                  htmlFor={option}
                  className="ml-2  font-medium text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>


        <div>
          <textarea
            id="prObjectives"
            name="prObjectives"
            rows={4}
            placeholder="Your PR Objectives*"
            className="mt-8 block w-full px-6 py-3 rounded-lg bg-gray-50 border-[#E0E0E0] outline-none shadow-sm focus:bg-white border  focus:border-app-blue-2"
          ></textarea>
        </div>

        <div>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows={4}
            placeholder="Additional Information"
            className="mt-8 block w-full px-6 py-3 rounded-lg bg-gray-50 border-[#E0E0E0] outline-none  shadow-sm focus:bg-white border  focus:border-app-blue-2"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full mt-8 bg-app-aqua-3  px-4 py-6 rounded-full shadow  border-none outline-none text-3xl font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OneToOneHelpForm;
