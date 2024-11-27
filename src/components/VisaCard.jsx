import VisaType from "../assets/visa-type.png";

const VisaCard = () => {
  return (
    <div
      className="mt-20 flex flex-col md:flex-row items-center md:items-start p-6 md:p-10 mx-auto"
      style={{ width: "90%" }}
    >
      <div className="flex-1 md:w-1/2 md:pr-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          O-1 Visa: Individuals with Extraordinary Ability or Achievement
        </h2>
        <p className="text-gray-600 font leading-relaxed text-2xl">
          The O–1 nonimmigrant visa is for the individual who possesses
          extraordinary ability in the sciences, arts, education, business, or
          athletics, or who has a demonstrated record of extraordinary
          achievement in the motion picture or television industry and has been
          recognized nationally or internationally for those achievements.
        </p>
      </div>

      <div className="flex-1 md:w-1/2 mt-6 md:mt-0">
        <img
          src={VisaType}
          alt="Visa Type"
          className="w-full h-96 my-auto rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default VisaCard;
