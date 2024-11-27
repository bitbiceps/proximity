const EligibilityCriteria = () => {
  return (
    <div className="mt-20 p-10 bg-white">
      <div className="text-center mb-8">
        <button
          className=" text-white font-bold px-6 py-2 rounded-lg uppercase tracking-wide mb-4"
          style={{ backgroundColor: "#2324FA" }}
        >
          Visa Categories and Criteria
        </button>
        <h1 className="text-3xl font-extrabold text-gray-800">
          Explore Visa Options and Eligibility Criteria
        </h1>
        <p className="text-gray-600 mt-2 italic text-lg">
          Find the right Visa Category for your needs
        </p>
      </div>

      <h1
        style={{ color: "#2324FA" }}
        className="flex text-2xl font-bold  mb-4 text-center ml-[70px]"
      >
        Eligibility Criteria for USA
      </h1>
      <h2 className="flex text-xl  mb-8 text-center ml-[70px] font-albara">
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
                className="text-xl border border-blue-600 px-4 py-6 text-black font-bold text-left align-middle"
                style={{ width: "33%", color: "#201446" }}
              >
                Visa Categories Overview
              </th>
              <th
                className="text-xl border border-blue-600 px-4 py-6 text-black font-bold text-center align-middle"
                style={{ width: "33%", color: "#201446" }}
              >
                Description
              </th>
              <th
                className=" text-xl border border-blue-600 px-4 py-6 text-black font-bold text-center align-middle"
                style={{ width: "33%", color: "#201446" }}
              >
                Evidence
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="font-albara text-xl border border-blue-600 px-4 py-6 text-left align-top font-medium">
                Extraordinary Ability
              </td>
              <td className="text-xl font-sans border border-blue-600 px-4 py-6 text-center align-top leading-relaxed">
                You must be able to demonstrate extraordinary ability in the
                sciences, arts, education, business, or athletics through
                sustained acclaim.
              </td>
              <td className="text-xl font-sans border border-blue-600 px-4 py-6 text-center align-top leading-relaxed">
                You must meet at least 3 of the 10 criteria* below, or provide
                evidence of a one-time achievement (i.e., Pulitzer, Oscar,
                Olympic Medal) as well as evidence showing that you will be
                continuing to work in the area of your expertise. No offer of
                employment or labor certification is required.
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="font-albara text-xl border border-blue-600 px-4 py-6 text-left align-top font-medium">
                Outstanding Professors
                <br />
                and Researchers
              </td>
              <td className="text-xl font-sans border border-blue-600 px-4 py-6 text-center align-top leading-relaxed">
                You must demonstrate international recognition for your
                outstanding achievements in a particular academic field. You
                must have at least 3 years experience in teaching or research in
                that academic area. You must be entering the United States in
                order to pursue tenure or tenure track teaching or a comparable
                research position at a university, institution of higher
                education, or private employer. 
              </td>
              <td className="text-xl border border-blue-600 px-4 py-6 text-center align-top leading-relaxed">
                You must meet at least 2 of the 6 criteria listed below** and
                provide an offer of employment from the prospective U.S.
                employer. The private employer must show documented
                accomplishments and that it employs at least 3 full-time
                researchers. No labor certification is required.
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="font-albara text-xl border border-blue-600 px-4 py-6 text-left align-top font-medium">
                Certain Multinational
                <br />
                Manager or Executive
              </td>
              <td className="text-xl border border-blue-600 px-4 py-6 text-center align-top leading-relaxed">
                You must have been employed outside the United States for at
                least 1 year in the 3 years preceding the petition or the most
                recent lawful nonimmigrant admission if you are already working
                for the U.S. petitioning employer. The U.S. petitioner must have
                been doing business for at least 1 year, have a qualifying
                relationship to the entity you worked for outside the U.S., and
                intend to employ you in a managerial or executive capacity. 
              </td>
              <td className="text-xl border border-blue-600 px-4 py-6 text-center align-top leading-relaxed">
                Your petitioning employer must be a U.S. employer and intend to
                employ you in a managerial or executive capacity. The petitioner
                must have been doing business in the U.S. for at least 1 year,
                as a legal entity with a qualifying relationship to the entity
                that employed you abroad in a managerial or executive capacity.
                No labor certification is required.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="ml-[70px] mt-8 text-2xl  ">
        For more details check out{" "}
        <a href="#" className="text-cyan-500 underline">
          USCIS website
        </a>
      </p>
    </div>
  );
};

export default EligibilityCriteria;
