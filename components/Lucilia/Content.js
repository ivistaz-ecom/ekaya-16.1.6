"use client";
import React, { useState } from "react";
import Contact from "../HomePage/Contact";
import Image from "next/image";
import Carousel from "./Carousel";
import Features from "./Features";
function Content() {
  return (
    <div>
      <div className="mt-10 lg:mt-[100px] lg:w-[80%] mx-auto lg:p-0 p-5 container">
        <h1 className="text-2xl text-e-green font-light tracking-[0.2em] lg:pb-12 pb-3">
          ABOUT THE PROJECT
        </h1>
        <h4 className="text-4xl text-black poppins-light pb-6 lg:w-[60%] leading-normal">
          Light. Air. Space. A home designed to breathe. A life designed to
          flow.
        </h4>
        <p className="poppins-light text-[18px] text-start pb-5">
          Nestled in the evolving premium enclave of Taleigao, Lucilia is a
          boutique residential development by Ekaya Spaces, offering exclusive
          3BHK residences designed around the essentials of calm living:
          abundant light, clean air, and an atmosphere shaped by greenery on all
          sides.
        </p>

        <p className="poppins-light  text-[18px] text-start pb-5">
          Spread across a 1,400 sqm plot with unobstructed greens both within
          and beyond the site, Lucilia redefines low-density luxury in Goa. Two
          residences per floor, across five levels, ensure space, privacy, and a
          home that feels personal in every sense. Crafted with Ekaya’s quiet
          design philosophy, Lucilia is a living experience defined not by
          scale, but by stillness and thoughtful flow.
        </p>
        <p className="poppins-light  text-[18px] text-start">
          Each residence offers expansive layouts of nearly 3,000 sq. ft.,
          seamless cross-ventilation, and dual green views, an internal
          landscaped courtyard and pool on one side, and the gentle expanse of
          the greenery on the other. With its premium specifications, high-end
          materials, and understated architectural elegance, Lucilia becomes a
          place where everyday living feels effortless and deeply grounding.
        </p>
      </div>

      <div className="">
        <Carousel />
      </div>

      <div className="h-[700px] lg:relative mx-auto py-12 z-10">
                <Image
            src="/lucilia/design.webp"
            alt="Banner"
            width={1920}
            height={1080}
            className="w-full h-full object-cover hidden md:block"
            priority
          />

          {/* Mobile Image */}
          <Image
            src="/lucilia/design-mobile.webp"
            alt="Mobile Banner"
            width={768}
            height={1200}
            className="w-full h-full object-cover block md:hidden"
            priority
          />

        

        <div className=" bg-white lg:border absolute lg:-mt-40 lg:ml-[50%] lg:mr-[10%] p-10 z-10">
          <h3 className="text-2xl text-e-green font-light tracking-[0.2em] pb-3">
            DESIGN & PLANNING HIGHLIGHTS
          </h3>

          <p className="poppins-light text-[18px] text-start">
            At Lucilia, design is shaped by nature. Every detail from the
            orientation of the residences to the flow of air across rooms is
            crafted to enhance light, openness, and calm.
          </p>
          {/* <Features /> */}
        </div>
      </div>
      <div className="lg:py-10">
        <Features />
      </div>
      <div className="w-[80%] mx-auto pt-6 z-10 lg:mt-0 mt-10 ">
        <h3 className="text-4xl text-black poppins-light pb-6">
          Location Highlights
        </h3>
        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 py-4">
          <div className="text-2xl lg:py-0 py-6 ">
            <p className="text-black poppins-light relative bg-[#ABD2D3] w-[300px] lg:h-[180px] py-6 flex justify-center items-center">
              Connectivity
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="col-span-2">
            <ul className="poppins-light list-image-[url(/right-icon.svg)]">
              <li className="text-[18px]">5 mins to Miramar Beach</li>
              <li className="text-[18px]">10 mins to Dona Paula</li>
              <li className="text-[18px]">5 mins to Panaji CBD</li>
              <li className="text-[18px]">30 mins to Dabolim Airport</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 py-4">
          <div className="text-2xl lg:py-0 py-6 ">
            <p className="text-black poppins-light relative bg-[#ABD2D3] w-[300px] lg:h-[200px] py-6 flex justify-center items-center">
              Neighbourhood <br /> Conveniences
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="col-span-2">
            <div className="grid lg:grid-cols-2 grid-col-1">
              <ul className="poppins-light list-image-[url(/right-icon.svg)] pt-5">
                <li className="text-[18px]">
                  Schools, cafés, and daily essentials within minute
                </li>
                <li className="text-[18px]">
                  Calm, green-side positioning with quick access to the city
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
}

export default Content;
