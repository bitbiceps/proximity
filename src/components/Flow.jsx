import timeline from "../assets/flow.png";
const Flow = () => {
  return (
    <div className=" justify-center items-center py-12">
      <div className="flex  flex-col justify-center items-center py-24">
        <h1 className="text-center text-2xl md:text-4xl font-albara[0] font-semibold text-gray-900">
          Unlock the Power of{" "}
          <span className="text-blue-600 italic">Public Relations</span> for
        </h1>
        <h1
          className=" text-center text-3xl md:text-4xl font-albara[0] font-semibold text-gray-900"
          style={{ fontWeight: 600 }}
        >
          Your Journey
        </h1>
      </div>
      <div className="-mt-24">
        <img src={timeline} />
      </div>
    </div>
  );
};

export default Flow;
