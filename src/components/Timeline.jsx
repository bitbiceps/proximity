const EligibilityCriteria = () => {
  return (
    <div className="mt-20 p-10 bg-white">
      <div className="text-center mb-8">
        <button className="bg-blue-700 text-white font-bold px-6 py-2 rounded-full uppercase tracking-wide mb-4">
          Visa Categories and Criteria
        </button>
        <h1 className="text-3xl font-extrabold text-gray-800">
          Explore Visa Options and Eligibility Criteria
        </h1>
        <p className="text-gray-600 mt-2">
          Find the right Visa Category for your needs
        </p>
      </div>

      <h1 className="flex text-2xl font-bold text-blue-600 mb-4 text-center ml-[70px]">
        Eligibility Criteria for USA
      </h1>
      <h2 className="flex text-lg  mb-8 text-center ml-[70px]">
        Employment-Based Immigration: First Preference EB-1
      </h2>

      <div className="overflow-x-auto">
        <table
          className="w-full border-collapse border border-blue-600 bg-white text-sm mx-auto"
          style={{ width: "90%" }}
        >
          <thead className="border-blue-600">
            <tr>
              <th
                className="border border-blue-600 px-4 py-6 text-black font-bold text-left align-middle"
                style={{ width: "33%" }}
              >
                Visa Categories Overview
              </th>
              <th
                className="border border-blue-600 px-4 py-6 text-black font-bold text-center align-middle"
                style={{ width: "33%" }}
              >
                Description
              </th>
              <th
                className="border border-blue-600 px-4 py-6 text-black font-bold text-center align-middle"
                style={{ width: "33%" }}
              >
                Evidence
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="border border-blue-600 px-4 py-6 text-left align-top font-medium">
                Extraordinary Ability
              </td>
              <td className="border border-blue-600 px-4 py-6 text-center align-top leading-relaxed">
                You must be able to
                <br />
                demonstrate extraordinary
                <br />
                ability in the sciences,
                <br />
                arts, education, business,
                <br />
                or athletics through
                <br />
                sustained acclaim.
              </td>
              <td className="border border-blue-600 px-4 py-6 text-center align-top leading-relaxed">
                You must meet at least
                <br />
                three of the ten criteria,
                <br />
                or provide evidence of
                <br />
                a one-time achievement
                <br />
                such as an Olympic medal.
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="border border-blue-600 px-4 py-6 text-left align-top font-medium">
                Outstanding Professors
                <br />
                and Researchers
              </td>
              <td className="border border-blue-600 px-4 py-6 text-center align-top leading-relaxed">
                You must demonstrate
                <br />
                international recognition
                <br />
                for your achievements
                <br />
                in a particular academic
                <br />
                field. Three years required.
              </td>
              <td className="border border-blue-600 px-4 py-6 text-center align-top leading-relaxed">
                You must meet at least
                <br />
                two of six criteria and
                <br />
                provide proof of a job
                <br />
                offer from a U.S.
                <br />
                employer. No certification.
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="border border-blue-600 px-4 py-6 text-left align-top font-medium">
                Certain Multinational
                <br />
                Manager or Executive
              </td>
              <td className="border border-blue-600 px-4 py-6 text-center align-top leading-relaxed">
                You must have worked
                <br />
                abroad for one year in
                <br />
                the last three years with
                <br />
                the U.S. petitioner.
                <br />
                Managerial role required.
              </td>
              <td className="border border-blue-600 px-4 py-6 text-center align-top leading-relaxed">
                Employer must prove
                <br />
                one year of U.S.
                <br />
                business. Managerial or
                <br />
                executive capacity is
                <br />
                required. No certification.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="ml-[70px] mt-8 text-2xl text-gray-500 ">
        For more details check out{" "}
        <a href="#" className="text-blue-600 underline">
          USCIS website
        </a>
      </p>
    </div>
  );
};

export default EligibilityCriteria;
