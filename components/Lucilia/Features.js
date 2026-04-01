import React from "react";

const blogs = [
  {
    id: "1",
    title: "Dual Green Views ",
    desc: "Internal courtyard + the adjoining public park",
  },

  {
    id: "2",
    title: "Low-Density Living ",
    desc: "Only 10 exclusive residences",
  },

  {
    id: "3",
    title: "Modern Amenities",
    desc: "Multipurpose hall, gym, sauna, landscaped pool",
  },
  {
    id: "4",
    title: "Rooftop Lounge with Barbecue",
    desc: "Host unforgettable gatherings in our rooftop lounge, boasting panoramic ocean views and barbecue facilities.",
  },
  {
    id: "5",
    title: "Premium Specifications ",
    desc: "Engineered wood flooring, Creanza tiles, Kohler fittings, Schindler elevators, Yale digital locks",
  },
  {
    id: "6",
    title: "Thoughtful Architecture ",
    desc: "Seamless indoor-outdoor transitions",
  },
  {
    id: "7",
    title: "Effortless Access",
    desc: "8-metre-wide approach road",
  },
  {
    id: "8",
    title: "Quiet-Side Positioning ",
    desc: "Close to Panaji CBD but nestled away from its bustle",
  },
];

function Features() {
  return (
    <div>
      <div className="grid lg:grid-cols-4 grid-cols-1 mx-auto w-[80%] lg:mt-0 mt-[320px]">
        {blogs.map((items) => (
          <div key={items.id} className="p-6 pt-5 bg-white border border-gray-200 py-3">
            <h5 className="mb-2 lg:h-[55px] lg:text-xl text-base poppins-light tracking-tight text-e-green dark:text-white text-start">
              {items.title}
            </h5>
            <p className="mb-3 poppins-light lg:text-[18px] text-base text-gray-500 dark:text-gray-400 text-start">
              {items.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="text-xl text-[#4D4D4D] poppins-light pt-5 leading-normal">
          Lucilia is shaped for those who value clarity, openness, and the
          luxury of space that breathes.
        </h3>
      </div>
    </div>
  );
}

export default Features;
