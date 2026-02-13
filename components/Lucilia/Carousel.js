"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
  const sliderRef = useRef(null);
  const NextArrow = ({ onClick }) => (
    <div
      className="in-arrow lg:w-[90%] sm:w-[90%] w-[80%] lg:-bottom-[10%] -bottom-[15%] next-arrow"
      onClick={onClick}
    >
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
            fill="#5CA2B0"
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
    <div
      className="in-arrow lg:w-[90%] sm:w-[90%] w-[80%] lg:-bottom-[10%] -bottom-[15%] prev-arrow"
      onClick={onClick}
    >
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
          fill="#5CA2B0"
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
    autoplay: false,
    // prevArrow: <PrevArrow onClick={() => sliderRef.current.slickPrev()} />, // Pass onClick handler to prev arrow
    // nextArrow: <NextArrow onClick={() => sliderRef.current.slickNext()} />, // Pass onClick handler to next arrow
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
    <>
      <div
        className="lg:w-[80%] sm:w-[80%] w-full mx-auto p-5 py-10"
        data-aos="fade-down"
      >
        <Slider ref={sliderRef} {...settings} className="z-10">
          <div className="p-2 z-10">
            <Image
              src="/lucilia/slide-1.webp"
              alt="slide-1"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-2">
            <Image
              src="/lucilia/slide-2.webp"
              alt="slide-2"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
        </Slider>
        {/* <div className="text-[18px] poppins-light border border-e-green lg:w-[490px] p-6 my-12 mx-auto">
          <a
            href="#contactpage"
            class="text-black dark:text-black underline hover:underline"
          >
            Click here
          </a>{" "}
          to fill the form for the project brochure
        </div> */}
      </div>
    </>
  );
};

export default Carousel;
