"use client"
import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

/** Place files in public/lucilia_carousel/ — Image 1.webp … Image 12.webp */
const LUCILIA_SLIDES = Array.from({ length: 12 }, (_, i) => {
  const n = i + 1
  return {
    src: `/lucilia_carousel/Image%20${n}.webp`,
    alt: `Lucilia — slide ${n} of 12`,
  }
})

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
          {LUCILIA_SLIDES.map(({ src, alt }, index) => (
            <div className={`p-2 ${index === 0 ? "z-10" : ""}`} key={src}>
              <img src={src} className="w-full h-auto" alt={alt} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Carousel
