"use client";
import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Contact from "../HomePage/Contact";
import Image from "next/image";
import Link from "next/link";

function Content() {
  const sliderRef = useRef(null);

  const NextArrow = ({ onClick }) => (
    <div className="arrow next-arrow" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <g
          id="Group_49400"
          data-name="Group 49400"
          transform="translate(-1167 -1988)"
        >
          <circle
            id="Ellipse_133"
            data-name="Ellipse 133"
            cx="24"
            cy="24"
            r="24"
            transform="translate(1167 1988)"
            fill="#1d1d1d"
          />
          <g
            id="Group_13142"
            data-name="Group 13142"
            transform="translate(-69.769 -3315.449)"
          >
            <g
              id="Group_158"
              data-name="Group 158"
              transform="translate(1248.88 5318.561)"
            >
              <path
                id="Path_96"
                data-name="Path 96"
                d="M0,0H12.534V12.605"
                transform="translate(8.913 0) rotate(45)"
                fill="none"
                stroke="#fff"
                stroke-width="2"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev-arrow" onClick={onClick}>
      <svg
        id="Group_49401"
        data-name="Group 49401"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <circle
          id="Ellipse_133"
          data-name="Ellipse 133"
          cx="24"
          cy="24"
          r="24"
          fill="#1d1d1d"
        />
        <g
          id="Group_13142"
          data-name="Group 13142"
          transform="translate(18.112 15.112)"
        >
          <g id="Group_158" data-name="Group 158" transform="translate(0)">
            <path
              id="Path_96"
              data-name="Path 96"
              d="M0,12.605H12.534V0"
              transform="translate(17.776 8.913) rotate(135)"
              fill="none"
              stroke="#fff"
              stroke-width="2"
            />
          </g>
        </g>
      </svg>
    </div>
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow onClick={() => sliderRef.current.slickPrev()} />, // Pass onClick handler to prev arrow
    nextArrow: <NextArrow onClick={() => sliderRef.current.slickNext()} />, // Pass onClick handler to next arrow

    responsive: [
      {
        breakpoint: 1024, // Adjust this value based on your design breakpoints
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Adjust this value based on your design breakpoints
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can add more breakpoints and adjust settings as needed
    ],
  };

  return (
    <div>
      <div className="mt-10 lg:mt-[100px] lg:w-[80%] mx-auto lg:p-0 p-5">
        <h1 className="text-2xl text-e-green font-light tracking-[0.2em] lg:pb-12 pb-3">
          ABOUT THE PROJECT
        </h1>
        <h4 className="text-4xl text-black poppins-light pb-6">Amora Villas</h4>
        <p className="poppins-light text-[18px] text-start pb-5">
          Located in the serene coastal town of Moira, nestled amidst the
          verdant landscapes and tranquil ambience, lies the prestigious Amora
          Villas project developed by Ekaya Spaces LLP. Spanning across a
          sprawling expanse of 1250 square meters of prime land, Amora Villas
          epitomises luxury vacation living at its finest. With meticulous
          attention to detail and an unwavering commitment to excellence, this
          project redefines opulence in the heart of Goa.
        </p>

        <p className="poppins-light  text-[18px] text-start pb-5">
          The name “Amora” itself is derived from the Portuguese and Spanish
          word for love, reflecting the essence of affection and warmth that
          permeates every aspect of this luxurious retreat.
        </p>
        <p className="poppins-light  text-[18px] text-start">
          Comprising four exquisite villas, each meticulously designed to offer
          the epitome of comfort and sophistication, Amora Villas presents a
          haven of tranquility and elegance for vacationers. Each villa boasts
          four spacious bedrooms, meticulously crafted to ensure utmost comfort
          and privacy, making them perfect retreats for families and friends
          seeking a luxurious getaway. What sets these bedrooms apart is the
          inclusion of individual gardens or terraces, allowing guests to bask
          in the natural beauty of their surroundings right from the comfort of
          their private quarters.
        </p>
      </div>
      <div className="w-[80%] mx-auto pt-12">
        <p className="bg-[#DFF3F4] p-4 poppins-light w-[337px] text-center">
          Project Gallery
        </p>
      </div>

      <div className="w-[80%] mx-auto">
        <Slider ref={sliderRef} {...settings} className="z-10">
          <div className="p-2 z-10">
            <img src="/amora/Image-1.jpg" className="" alt="ekaya-spaces" />
          </div>
          <div className="p-2">
            <img src="/amora/Image-2.jpg" className="" alt="ekaya-spaces" />
          </div>
          <div className="p-2">
            <img src="/amora/Image-3.jpg" className="" alt="ekaya-spaces" />
          </div>
          <div className="p-2">
            <img src="/amora/Image-4.jpg" className="" alt="ekaya-spaces" />
          </div>
          <div className="p-2">
            <img src="/amora/Image-5.jpg" className="" alt="ekaya-spaces" />
          </div>
          <div className="p-2">
            <img src="/amora/Image-6.jpg" className="" alt="ekaya-spaces" />
          </div>
          <div className="p-2">
            <img src="/amora/Image-7.jpg" className="" alt="ekaya-spaces" />
          </div>
        
        </Slider>
        <div className="text-[18px] poppins-light border border-e-green lg:w-[490px] p-6 my-12 mx-auto">
          <Link
            href="#contact-amora"
            className="text-black dark:text-black underline hover:underline"
          >
            Click here
          </Link>{" "}
          to fill the form for the project brochure
        </div>

        <p className="poppins-light  text-[18px] text-start pb-5">
          The spacious bathrooms, adorned with luxurious fittings and fixtures,
          evoke a sense of indulgence and relaxation, adding to the overall
          vacation experience. Stepping outside, vacationers are greeted by lush
          green gardens that provide a serene backdrop for leisurely strolls and
          moments of relaxation. The private pool beckons guests to unwind and
          rejuvenate amidst the tranquil surroundings, offering a perfect
          retreat from the hustle and bustle of everyday life.
        </p>
        <p className="poppins-light  text-[18px] text-start">
          For those seeking moments of conviviality and entertainment, the
          rooftop bar offers a chic setting to unwind with friends and family
          while enjoying panoramic views of the surrounding landscape. Whether
          savouring sundowners or hosting intimate gatherings, the rooftop bar
          serves as the perfect venue for creating cherished vacation memories.
        </p>
      </div>

      <div className="justify-between z-50 mt-16 mx-auto w-[80%] lg:w-full">
        <div class="lg:flex flex-col items-center bg-white md:flex-row mx-auto">
          <Image
            class="object-cover lg:w-[30em] mr-10 sm:w-[20em]"
            src="/amora-blog.png"
            alt="moira"
            width={500}
            height={700}
          />
          <div class="flex flex-col justify-between leading-normal lg:pt-0 pt-6">
            <p class="mb-3 poppins-light text-[18px] text-start pb-5">
              The commitment to ensuring utmost convenience and comfort extends
              to the practical aspects of vacation living as well. Each villa is
              fully air-conditioned, providing a respite from the tropical heat,
              and comes equipped with two spacious car parks, providing guests
              with ample parking space for their vehicles during their stay.
              Moreover, with 100% power backup, guests can rest assured of
              uninterrupted enjoyment of their vacation, enhancing their peace
              of mind.
            </p>
          </div>
        </div>

        <div class="flex lg:flex-row flex-col-reverse lg:items-center items-end bg-white md:flex-col-reverse  justify-items-end">
          <div class="flex flex-col justify-between leading-normal">
            <p class="mb-3 poppins-light text-[18px] text-start pb-5 lg:ml-36">
              One of the most remarkable features of Amora Villas is the
              emphasis on privacy. Each villa is thoughtfully designed to ensure
              seclusion and exclusivity, allowing vacationers to enjoy their
              holiday retreat without any intrusion. Whether lounging by the
              poolside or unwinding in the tranquil confines of their bedrooms,
              guests can revel in the luxury of privacy afforded by this
              exceptional vacation home.
            </p>
          </div>
          <Image
            class="object-cover lg:w-[30em] ml-10 sm:w-[20em]"
            src="/amora-blog-1.png"
            alt="moira"
            width={500}
            height={700}
          />
        </div>

        <div class="lg:flex flex-col items-center bg-white md:flex-row mx-auto">
          <Image
            class="object-cover lg:w-[30em] mr-10 sm:w-[20em]"
            src="/amora-blog-2.png"
            alt="moira"
            width={500}
            height={700}
          />
          <div class="flex flex-col justify-between leading-normal">
            <p class="mb-3 poppins-light text-[18px] text-start pb-5">
              Moreover, the strategic location of Amora Villas further enhances
              its allure. Surrounded by some of the finest residential projects
              in Moira, guests benefit from a vibrant community atmosphere while
              enjoying the tranquility and exclusivity of their vacation abode.
            </p>
          </div>
        </div>
      </div>

      <div className="h-[600px] relative mx-auto py-12">
        <Image
          src="/amora-bt.png"
          alt="Banner"
          width={1000} // Adjust width and height according to your image dimensions
          height={500}
          className="w-full h-full "
          priority // Preload the image
        />

        <div className=" bg-white border absolute -mt-40 lg:ml-[50%] lg:mr-[10%] p-10">
          <p class="mb-3 poppins-light text-[18px] text-start pb-5">
            In essence, Amora Villas stands as a testament to unparalleled
            luxury and sophistication, offering discerning vacationers a rare
            opportunity to experience the epitome of coastal living in the
            idyllic setting of Moira, Goa. With its impeccable craftsmanship,
            exquisite amenities, and unparalleled attention to detail, Amora
            Villas sets a new benchmark for luxury vacation living in the heart
            of Goa’s coastal paradise.
          </p>
        </div>
      </div>
      <div className="h-[20vh]"></div>
      <div className="w-[80%] mx-auto pt-6">
        <h3 className="text-4xl text-black poppins-light pb-6">
          Location Highlights
        </h3>
        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 py-4">
          <div className="text-2xl lg:py-0 py-6 ">
            <p className="text-black poppins-light relative bg-[#ABD2D3] w-[300px] lg:h-[280px] py-6 flex justify-center items-center">
              Hotels & Resorts
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="col-span-2">
            <ul className="poppins-light list-image-[url(/right-icon.svg)]">
              <li className="text-[18px]">Storii by ITC Hotels : 1.9 Km</li>
              <li className="text-[18px]">The Westin Anjuna: 13Km</li>
              <li className="text-[18px]">Le Meridian Calangute: 13 Km</li>
              <li className="text-[18px]">W Hotel, Vegivore: 14km</li>
              <li className="text-[18px]">Hilton, Candolim: 15 km</li>
              <li className="text-[18px]">Taj Fort Aguada: 17 Km</li>
              <li className="text-[18px]">Taj Holiday Village: 17 Km</li>
              <li className="text-[18px]">Amritara Aura, Mandrim: 21 Km</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 py-4">
          <div className="text-2xl lg:py-0 py-6 ">
            <p className="text-black poppins-light relative bg-[#ABD2D3] w-[300px] lg:h-[200px] py-6 flex justify-center items-center">
              Beaches &<br /> Popular Areas
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="col-span-2">
            <div className="grid lg:grid-cols-2 grid-col-1">
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">Mapusa: 4.6 Km</li>
                <li className="text-[18px]">Assagao: 8Km</li>
                <li className="text-[18px]">Arpora: 12 Km</li>
                <li className="text-[18px]">Calangute: 13 Km</li>
                <li className="text-[18px]">Baga: 14 Km</li>
                <li className="text-[18px]">Anjuna: 14 Km</li>
              </ul>
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">Vagator: 14 Km</li>
                <li className="text-[18px]">Candolim: 15 Km</li>
                <li className="text-[18px]">Panjim: 17Km</li>
                <li className="text-[18px]">Morjim: 19 Km</li>
                <li className="text-[18px]">Miramar: 20 Km</li>
                <li className="text-[18px]">Ashwem: 20 Km</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 py-4">
          <div className="text-2xl lg:py-0 py-6 ">
            <p className="text-black poppins-light relative bg-[#ABD2D3] w-[300px] lg:h-[100px] py-6 flex justify-center items-center">
              Hospitals
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="col-span-2">
            <ul className="poppins-light list-image-[url(/right-icon.svg)]">
              <li className="text-[18px]">Manipal Hospital: 25 Km</li>
              <li className="text-[18px]">
                Goa Medical College Hospital: 20 Km
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 py-4">
          <div className="text-2xl lg:py-0 py-6 ">
            <p className="text-black poppins-light relative bg-[#ABD2D3] w-[300px] lg:h-[100px] py-6 flex justify-center items-center">
              Schools
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="">
            <ul className="poppins-light list-image-[url(/right-icon.svg)]">
              <li className="text-[18px]">
                Sharada Mandir School, Miramar: 21 Km
              </li>
              <li className="text-[18px]">
                The Ardee School, Porvorim : 9.8 Km
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 py-4">
          <div className="text-2xl lg:py-0 py-6 ">
            <p className="text-black poppins-light relative bg-[#ABD2D3] w-[300px] lg:h-[100px] py-6 flex justify-center items-center">
              Airports
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="">
            <ul className="poppins-light list-image-[url(/right-icon.svg)]">
              <li className="text-[18px]">MOPA : 42 Km</li>
              <li className="text-[18px]">Dabolim : 23 Km</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 py-4">
          <div className="text-2xl lg:py-0 py-6 ">
            <p className="text-black poppins-light relative bg-[#ABD2D3] w-[300px] lg:h-[100px] py-6 flex justify-center items-center">
              Railway Stations
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="">
            <ul className="poppins-light list-image-[url(/right-icon.svg)]">
              <li className="text-[18px]">Thivim: 13Km</li>
              <li className="text-[18px]">Pernem: 14 Km</li>
            </ul>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
}

export default Content;
