'use client'
import React, { useEffect} from 'react'
import AOS from "aos";
import Image from 'next/image'
import VerticleLines from '../../components/common/VerticalLines'

function Banner() {

  useEffect(() => {
    AOS.init({
      // Initialize AOS with your desired configuration options
      //   duration: 800, // Duration of the animation
      //   easing: "ease-in-out", // Easing option
      once: false // Whether animation should only happen once
    });
  }, []);


  return (
    <div className="h-[70vh] relative mx-auto" data-aos='fade-down'>
       <Image
        src="/joint-ventures.webp"
        alt="Banner"
        width={1000} // Adjust width and height according to your image dimensions
        height={500}
        className='w-full h-full'
        priority // Preload the image
      />
          <div className='w-[80%] absolute bottom-40 py-12 ml-40' data-aos='fade-down'>
              <h1 className='text-6xl text-white poppins-light'>
              Joint Ventures
              </h1>
      </div>
<VerticleLines/>
    </div>
  )
}

export default Banner
