"use client"
import React, { useEffect, useState } from "react"
import AOS from "aos"
import ContactBtn from "../common/ContactBtn"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Add more banners here — optional `mobile` falls back to `desktop`
const banners = [
  {
    desktop: "/home/Banner_1.jpg",
    mobile: "/home/Banner_1-Mobile.jpg",
    alt: "Banner 1",
    contactAlign: "left",
  },
  {
    desktop: "/home/Banner-2.jpg",
    mobile: "/home/Banner-2-Mobile.jpg",
    alt: "Banner 2",
    contactAlign: "right",
  },
  {
    desktop: "/home/Banner-3.jpg",
    mobile: "/home/Banner-3-Mobile.jpg",
    alt: "Banner 3",
    contactAlign: "right",
  },
]

function Banner() {
  useEffect(() => {
    AOS.init({ once: false })
  }, [])

  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false,
    cssEase: "linear",
    beforeChange: (_current, next) => setCurrentSlide(next),
  }

  const contactAlign = banners[currentSlide]?.contactAlign || "right"

  return (
    <div className="relative w-full lg:h-screen h-[100vh] overflow-hidden z-0">
      <Slider {...settings} className="banner-slider h-full">
        {banners.map((banner, index) => (
          <div key={banner.desktop} className="relative w-full h-[100vh] lg:h-screen">
            <Image
              src={isMobile ? banner.mobile || banner.desktop : banner.desktop}
              alt={banner.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </Slider>

      <div className="absolute inset-0 z-[100] pointer-events-none">
        <div className="pointer-events-auto">
          <ContactBtn align={contactAlign} />
        </div>
      </div>

      <style jsx global>{`
        .banner-slider,
        .banner-slider .slick-list,
        .banner-slider .slick-track,
        .banner-slider .slick-slide,
        .banner-slider .slick-slide > div {
          height: 100%;
        }
        .banner-slider .slick-list {
          z-index: 0;
        }
        .banner-slider .slick-dots {
          bottom: 24px;
          z-index: 110;
        }
        .banner-slider .slick-dots li button:before {
          color: #fff;
          opacity: 0.5;
          font-size: 10px;
        }
        .banner-slider .slick-dots li.slick-active button:before {
          color: #fff;
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

export default Banner
