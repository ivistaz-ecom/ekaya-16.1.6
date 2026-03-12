"use client"
import React, { useEffect, useState } from "react"
import AOS from "aos"
import ContactBtn from "../common/ContactBtn"
import Image from "next/image"
import VerticalLines from "../common/VerticalLines"

function Banner() {
  useEffect(() => {
    AOS.init({ once: false })
  }, [])

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const imageSrc = isMobile
    ? "/home/carousel-3-mobile.webp"
    : "/home/carousel-3.webp"

  return (
    <div className="relative w-full lg:h-screen h-[100vh] object-contain overflow-hidden z-0">
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt="Banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <ContactBtn />
      <VerticalLines />
    </div>
  )
}

export default Banner
// Banner.js
