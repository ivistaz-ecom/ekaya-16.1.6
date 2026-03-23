"use client"

import { useRef } from "react"
import Slider from "react-slick"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Sample data
const gymData = [
  {
    image: "/VistaDoMar/Gym_Final@2x.webp",
    title: "Wellness Studio",
    description:
      "Pursue your fitness goals in our fully-equipped gymnasium, available at your convenience with reliable power backup.",
  },
  {
    image: "/VistaDoMar/Pool_Final@2x.webp",
    title: "The Aqua Retreat: Swim, Soak, Sun",
    description:
      "Relax and rejuvenate in our expansive swimming pool and jacuzzi, offering uninterrupted hydrotherapy experiences.",
  },
  {
    image: "/VistaDoMar/Play_Area_Final@2x.webp",
    title: "The Harmony Park: Grill, Gather, Ground",
    description:
      "Immerse yourself in lush greenery and tranquil surroundings on our meticulously landscaped ground floor.",
  },
  {
    image: "/VistaDoMar/Sauna_Final@2x.webp",
    title: "Thermal Suite with Steam & Dry Sauna",
    description:
      "Unwind in our steam and sauna rooms, accessible round the clock for your relaxation needs.",
  },
]

// Custom arrow components (no absolute positioning here)
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className=" rounded-full shadow-lg p-2 pointer-events-auto"
  >
    <Image src="/VistaDoMar/right.svg" alt="Previous" width={24} height={24} />
  </button>
)

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className=" rounded-full shadow-lg p-2 pointer-events-auto"
  >
    <Image
      src="/VistaDoMar/left.svg"
      alt="Next"
      width={24}
      height={24}
      className=""
    />
  </button>
)

const GymCarousel = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    arrows: false, // We will render custom arrows manually
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className="  relative ">
      <Slider ref={sliderRef} {...settings} className="z-10">
        {gymData.map((item, index) => (
          <div key={index} className="z-10">
            <div className="relative overflow-hidden">
              {/* Image with arrows inside */}
              <div className="relative w-full h-[500px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
                {/* Arrows */}
                <div className="absolute inset-0 flex justify-between items-center px-4 z-10 pointer-events-none">
                  <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
                  <NextArrow onClick={() => sliderRef.current?.slickNext()} />
                </div>
              </div>

              {/* Content below the image */}
              <div className="bg-[#e8f9f9] p-6 text-center">
                <h3 className="lg:text-[36px] text-[28px] poppins-light  mb-2">
                  {item.title}
                </h3>
                <p className="lg:text-[18px] text-gray-700 poppins-light ">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default GymCarousel
