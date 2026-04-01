"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { initFlowbite } from "flowbite";

function WhyEkaya() {
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    initFlowbite();
  }, []);

  const images = {
    profile: "/home/why-ekaya/nature.png",
    dashboard: "/home/why-ekaya/elite.png",
    settings: "/home/why-ekaya/elegance.png",
  };

  return (
    <div className="lg:w-[80%] mx-auto flex flex-col-reverse lg:flex-row lg:pt-32 pb-20 text-center pt-12">
      
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
      <h2 className="lg:text-6xl text-4xl font-light py-4 text-gray-700 hidden lg:block">
          Why Ekaya
        </h2>
        <Image
          src={images[activeTab]}
          alt="Why Ekaya Visual"
          className="lg:w-[524px] w-full"
          width={530}
          height={600}
          sizes="(min-width: 1280px) 524px, (min-width: 1024px) 45vw, 100vw"
          quality={65}
        />
      </div>
      <div className="w-full">
      <h2 className="lg:text-6xl text-4xl font-light py-4 text-gray-700 lg:hidden">
          Why Ekaya
        </h2>
        <div className="mb-4 border-b-2 border-gray-200 dark:border-gray-700 mt-[0px]">
          <ul className="flex flex-wrap" role="tablist">
            <li className="me-2" role="presentation">
              <button
                className={`text-xl text-start inline-block p-4 border-b-4 rounded-t-lg ${
                  activeTab === "profile"
                    ? "text-e-green border-e-green"
                    : "text-gray-500 border-transparent"
                }`}
                onClick={() => setActiveTab("profile")}
                type="button"
              >
                Nature’s Embrace
                <br />
                in Every Corner
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`text-xl text-start inline-block p-4 border-b-4 rounded-t-lg ${
                  activeTab === "dashboard"
                    ? "text-e-green border-e-green"
                    : "text-gray-500 border-transparent"
                }`}
                onClick={() => setActiveTab("dashboard")}
                type="button"
              >
                Elite
                <br />
                Sanctuaries
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`text-xl text-start inline-block p-4 border-b-4 rounded-t-lg ${
                  activeTab === "settings"
                    ? "text-e-green border-e-green"
                    : "text-gray-500 border-transparent"
                }`}
                onClick={() => setActiveTab("settings")}
                type="button"
              >
                Personalized
                <br />
                Elegance
              </button>
            </li>
          </ul>
        </div>

        <div>
          {activeTab === "profile" && (
            <div className="p-4 lg:h-[350px] content-center poppins-regular">
              <p className="text-[18px] font-light text-gray-600 lg:ml-20 text-start">
                Discover the essence of tranquil living where nature seamlessly
                intertwines with luxury. At Ekaya, every property is a testament
                to the harmonious relationship between architecture and the
                natural world. From lush gardens to panoramic views, immerse
                yourself in a sanctuary where every corner is a celebration of
                nature's beauty. Let the symphony of birdsong and rustling
                leaves be your soundtrack as you embrace the serenity
                surrounding you.
              </p>
            </div>
          )}
          {activeTab === "dashboard" && (
            <div className="p-4 lg:h-[350px] content-center poppins-regular">
              <p className="text-[18px] font-light text-gray-600 lg:ml-20 text-start">
                Step into a realm of unparalleled exclusivity where luxury knows
                no bounds. Ekaya presents elite sanctuaries that redefine luxury
                and sophistication. Each property is a masterpiece, meticulously
                crafted to cater to the most discerning tastes. From lavish
                amenities to bespoke finishes, experience the epitome of luxury
                living.
              </p>
            </div>
          )}
          {activeTab === "settings" && (
            <div className="p-4 lg:h-[350px] content-center poppins-regular">
              <p className="text-[18px] font-light text-gray-600 lg:ml-20 text-start">
                Elevate your living experience with Ekaya's signature blend of
                personalised elegance. We understand that true luxury lies in
                the details, so every aspect of our properties is tailored to
                reflect your unique style and preferences. From custom-designed
                interiors to exclusive amenities, immerse yourself in a world
                where luxury is curated especially for you. Experience the joy
                of living in a home that resonates with your personality, where
                every corner exudes sophistication and charm.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WhyEkaya;
