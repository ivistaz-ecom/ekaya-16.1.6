import React from "react";

const blogs = [
  {
    id: "1",
    icon: "/icon-domar.svg",
    title: "Gym",
    desc: "Pursue your fitness goals in our fully-equipped gymnasium, available at your convenience with reliable power backup.",
  },

  {
    id: "2",
    icon: "/icon-domar-1.svg",
    title: "Large Swimming Pool and Jacuzzi",
    desc: "Relax and rejuvenate in our expansive swimming pool and jacuzzi, offering uninterrupted hydrotherapy experiences.",
  },

  {
    id: "3",
    icon: "/icon-domar-2.svg",
    title: "Separate Steam and Sauna Rooms",
    desc: "Unwind in our steam and sauna rooms, accessible round the clock for your relaxation needs.",
  },
  {
    id: "4",
    icon: "/icon-domar-3.svg",
    title: "Rooftop Lounge with Barbecue",
    desc: "Host unforgettable gatherings in our rooftop lounge, boasting panoramic ocean views and barbecue facilities.",
  },
  {
    id: "5",
    icon: "/icon-domar-4.svg",
    title: "100% Power Backup System",
    desc: "Rest assured with our robust backup system, ensuring uninterrupted electricity supply throughout the complex.",
  },
  {
    id: "6",
    icon: "/icon-domar-5.svg",
    title: "Water Treatment Plant",
    desc: "Enjoy the luxury of soft water throughout the complex, enhancing your comfort and well-being.",
  },
  {
    id: "7",
    icon: "/icon-domar-6.svg",
    title: "Centralised Water Heating",
    desc: "Offering centralised water heating as an amenity provides residents with consistent hot water, cost efficiency, and space-saving benefits. This amenity enhances the overall living experience for residents while streamlining operations for property management.",
  },
  {
    id: "8",
    icon: "/icon-domar-7.svg",
    title: "Pressure Pumps",
    desc: "Experience invigorating showers with optimal water pressure maintained by our pressure pumps.",
  },

  {
    id: "9",
    icon: "/icon-domar-8.svg",
    title: "Spacious Car Parking",
    desc: "Residents enjoy ample parking space in the basement, while designated parking on the ground floor caters to guests.",
  },
  {
    id: "10",
    icon: "/icon-domar-9.svg",
    title: "Beautifully Landscaped Ground Floor",
    desc: "Immerse yourself in lush greenery and tranquil surroundings on our meticulously landscaped ground floor.",
  },

  {
    id: "11",
    icon: "/icon-domar-10.svg",
    title: "Round-the-Clock Security",
    desc: "Your safety is our top priority. Our premises are guarded by vigilant security personnel, supplemented by CCTV surveillance to ensure comprehensive coverage. Access to the complex is strictly controlled through biometric locks, providing unparalleled security for residents and their belongings.",
  },
];

function ApproachContent() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 py-12 lg:w-[80%] mx-auto w-full">
      {blogs.map((items, index) => (
        <div class="p-6 bg-white border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
          <img src={items.icon} className="py-6" alt="ekaya-spaces" />
          <h5 className="mb-2 h-[90px] text-2xl poppins-light tracking-tight text-gray-900 dark:text-white text-start">
            {items.title}
          </h5>
          <p className="mb-3 poppins-light text-[18px] text-gray-500 dark:text-gray-400 text-start">
            {items.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ApproachContent;
