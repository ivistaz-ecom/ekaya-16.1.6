"use client"
import React, { useRef } from "react"
import Slider from "react-slick"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = () => {
  const sliderRef = useRef(null)

  // Custom arrow UI (matches `VistaDoMar/Content.js`)
  const NextArrow = ({ onClick }) => (
    <div
      className="in-arrow w-12 h-12 flex items-center justify-center lg:-bottom-[10%] -bottom-[15%] next-arrow"
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
                strokeWidth="2"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )

  const PrevArrow = ({ onClick }) => (
    <div
      className="in-arrow w-12 h-12 flex items-center justify-center lg:-bottom-[10%] -bottom-[15%] prev-arrow"
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
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
    </div>
  )

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: (
      <PrevArrow
        onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
      />
    ),
    nextArrow: (
      <NextArrow
        onClick={() => sliderRef.current && sliderRef.current.slickNext()}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div
      className="lg:w-[80%] sm:w-[80%] w-full mx-auto p-5 py-10"
      data-aos="fade-down"
    >
      <div className="vista-do-mar-slider relative">
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
          <div className="p-2">
            <Image
              src="/lucilia/slide-3.webp"
              alt="slide-3"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-2">
            <Image
              src="/lucilia/slide-4.webp"
              alt="slide-4"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-2">
            <Image
              src="/lucilia/slide-5.webp"
              alt="slide-5"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-2">
            <Image
              src="/lucilia/slide-6.webp"
              alt="slide-6"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-2">
            <Image
              src="/lucilia/slide-7.webp"
              alt="slide-7"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-2">
            <Image
              src="/lucilia/slide-8.webp"
              alt="slide-8"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-2">
            <Image
              src="/lucilia/slide-9.webp"
              alt="slide-9"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-2">
            <Image
              src="/lucilia/slide-10.webp"
              alt="slide-10"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-2">
            <Image
              src="/lucilia/slide-11.webp"
              alt="slide-11"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-2">
            <Image
              src="/lucilia/slide-12.webp"
              alt="slide-12"
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Carousel
