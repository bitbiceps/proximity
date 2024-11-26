const Feedback = () => {
  const testimonials = [
    {
      name: "Max Will",
      rating: 4,
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We’ve received numerous compliments on the new site, and it’s easier for customers to navigate.",
    },
    {
      name: "Max Will",
      rating: 4,
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We’ve received numerous compliments on the new site, and it’s easier for customers to navigate.",
    },
    {
      name: "Max Will",
      rating: 4,
      text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We’ve received numerous compliments on the new site, and it’s easier for customers to navigate.",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col items-center py-16 px-8">
      <h1 className="text-3xl font-bold text-center mb-12">
        What Our Customers Are Saying
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-t-lg overflow-hidden max-w-xs"
          >
            <div className="p-6">
              <div className="flex items-center space-x-2">
                {/* <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                  {testimonial.name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')}
                </div> */}
              </div>
              <div className="mt-4 flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12.146l-3.146 1.654L5 8.62 2 5.754l4.146-.366L8 1l1.854 4.388L14 5.754l-3 2.866 1.146 5.18L8 12.146z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  {testimonial.rating}/5
                </span>
              </div>
              <p className="mt-4 text-gray-700">{testimonial.text}</p>
            </div>

            <div className="bg-blue-500 rounded-b-lg p-4 rounded-l-lg flex items-center justify-center">
              <span className="text-white font-semibold">
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
