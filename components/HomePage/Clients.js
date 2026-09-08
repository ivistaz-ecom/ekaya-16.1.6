import React from "react";
import Image from "next/image";

function Clients() {
  return (
    <>
      <div className="text-center mt-[100px] lg:w-[80%] mx-auto z-50">
        <h1 className="text-2xl text-e-green font-light tracking-[0.2em]">
          LET’S HEAR FROM OUR CLIENTS
        </h1>
        <p className="poppins-light text-[18px] lg:py-14 py-4">
          “Discovering Ekaya was like finding a hidden gem. The attention to
          detail and personal touch they bring to every aspect of the
          home-buying experience is truly unparalleled.”
        </p>
        <hr className="border-dashed border-t-2 border-gray-300" />
      </div>

      <figcaption className="lg:flex items-center justify-center pt-8 center">
        <Image
          className="rounded-full w-14 h-14"
          src="/richard.png"
          alt="profile picture"
          width={100}
          height={100}
        />
        <div className="lg:flex items-center space-y-0.5 font-medium dark:text-white lg:text-left rtl:text-right ms-3 text-center">
          <div className="text-xl poppins-medium">Richard M</div>
          <div className="ml-2 text-xl text-gray-700 dark:text-gray-400 poppins-light">
            President and CEO l Vilas Arch Pvt. Ltd.
          </div>
        </div>
      </figcaption>
    </>
  );
}

export default Clients;
