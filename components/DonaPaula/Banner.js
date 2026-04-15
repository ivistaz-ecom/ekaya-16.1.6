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
    <div className="lg:h-[70vh] h-[60vh] relative mx-auto" data-aos="fade-down">
      <Image
        src="/dona-paula/banner.webp"
        alt="Banner"
        width={1000} // Adjust width and height according to your image dimensions
        height={500}
        className="w-full h-full"
        priority // Preload the image
      />

      <div
        className="lg:w-[80%] w-full absolute bottom-0 py-12 lg:ml-40"
        data-aos="fade-down"
      >
        <h1 className="lg:text-8xl md:text-8xl text-3xl text-white poppins-light px-10 lg:px-0">
          About
          <br />
          Dona Paula
        </h1>
      </div>

      <VerticleLines />
    </div>
  );
}

export default Banner;
