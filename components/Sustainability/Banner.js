"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import VerticleLines from "../../components/common/VerticalLines";

function Banner() {
  useEffect(() => {
    AOS.init({
      // Initialize AOS with your desired configuration options
      //   duration: 800, // Duration of the animation
      //   easing: "ease-in-out", // Easing option
      once: false, // Whether animation should only happen once
    });
  }, []);

  return (
    <div className="lg:h-[70vh] h-[50vh] relative mx-auto" data-aos="fade-down">
      <Image
        src="/sustainability/sus-banner.webp"
        alt="Banner"
        width={1000} // Adjust width and height according to your image dimensions
        height={500}
        className="w-full h-full"
        priority // Preload the image
      />
      <div
        className="w-[80%] absolute lg:bottom-10 sm:bottom-40 bottom-10 lg:py-12 lg:ml-40 ml-7"
        data-aos="fade-down"
      >
        <h1 className="lg:text-7xl md:text-5xl text-3xl text-white poppins-light">
          Sustainability
        </h1>
      </div>
      <VerticleLines />
    </div>
  );
}

export default Banner;
