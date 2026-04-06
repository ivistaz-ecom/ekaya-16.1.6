"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import Contact from "../HomePage/Contact";

function Content() {
  useEffect(() => {
    AOS.init({
      // Initialize AOS with your desired configuration options
      //   duration: 800, // Duration of the animation
      //   easing: "ease-in-out", // Easing option
      once: false, // Whether animation should only happen once
    });
  }, []);

  return (
    <>
      <div className="lg:mt-[100px] mt-10 lg:w-[80%] lg:p-0 p-5 mx-auto pb-16">
        {/* <h1 className='text-2xl text-e-green font-light tracking-[0.2em] pb-12'>ABOUT US</h1> */}
        <p className="poppins-light text-[18px] text-start lg:pb-5">
          Moira, a serene village nestled in the verdant landscapes of Goa,
          holds a rich historical tapestry woven with Portuguese influence.
          Initially known as ‘Moiro’ during the colonial era, it stands as a
          testament to Goa’s cultural amalgamation. The village witnessed
          Portuguese colonization, reflected in its architecture, cuisine, and
          lifestyle. Over time, Moira has evolved into a tranquil haven,
          preserving its colonial charm while embracing modernity.
        </p>
        {/* <p className='poppins-light text-[18px] text-start pb-5'>Renowned as the “Lover’s Paradise,” Dona Paula beckons romantics and adventurers alike to bask in its romantic ambiance and witness the breathtaking confluence of the Mandovi and Zuari rivers. The famed Dona Paula Viewpoint offers a serene retreat, where one can immerse themselves in the tranquil atmosphere and marvel at the scenic splendor that surrounds them.</p> */}
      </div>

      <div
        className="flex flex-col items-center bg-e-green-light md:flex-row lg:w-[90%]"
        
      >
        <Image
          className="object-cover lg:w-[30em] w-full p-5 lg:p-0 lg:mr-6"
          src="/moira/1.png"
          alt="moira"
          width={300}
          height={500}
        />
        <div className="flex flex-col justify-between leading-normal lg:p-10 p-5">
          <p className="mb-3 poppins-light text-[18px] text-start pb-5">
            In recent years, Moira has emerged as the new real estate hub for
            the affluent seeking a retreat from bustling city life. The
            village’s rustic allure, adorned with winding lanes, lush greenery,
            and old-world charm, appeals to those craving a blend of luxury and
            tranquility. The rich and famous are drawn to Moira for its quaint
            ambience, away from the commercialized bustle of other coastal areas
            in Goa.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col items-center bg-e-green-light my-10 md:flex-row lg:w-[90%]"
        
      >
        <div className="flex flex-col justify-between leading-normal">
          <p className="mb-3 poppins-light text-[18px] text-start pb-5 lg:ml-36 lg:p-0 p-5">
            One of Moira’s irresistible charms is its proximity to Goa’s
            renowned beaches. Just a short drive away, residents and visitors
            can revel in the sun-kissed shores of Calangute, Baga, and Anjuna
            beaches. These iconic destinations offer a plethora of water sports,
            beachfront shacks serving delectable seafood, and vibrant nightlife,
            ensuring endless entertainment and relaxation.
          </p>
        </div>
        <Image
          className="object-cover lg:w-[30em] w-full p-5 lg:p-0 lg:mr-6"
          src="/moira/2.png"
          alt="moira"
          width={300}
          height={500}
        />
      </div>

      <div
        className="flex flex-col items-center bg-e-green-light my-10 md:flex-row  justify-items-end lg:w-[90%] "
        
      >
        <Image
          className="object-cover lg:w-[30em] w-full p-5 lg:p-0 lg:mr-6"
          src="/moira/3.png"
          alt="moira"
          width={300}
          height={500}
        />
        <div className="flex flex-col justify-between leading-normal lg:p-10 p-5">
          <p className="mb-3 poppins-light text-[18px] text-start ">
            Moreover, Moira’s strategic location near Assagao adds to its
            allure. Assagao, a neighboring village known for its bohemian vibe,
            hosts an array of chic cafes, boutique stores, and gourmet
            restaurants. Indulging in a culinary journey through Assagao’s
            quaint eateries becomes a delightful pastime for residents of Moira,
            offering a taste of Goa’s diverse gastronomy.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col items-center bg-e-green-light md:flex-row lg:w-[90%] float-right mb-20"
        
      >
        <div className="flex flex-col justify-between leading-normal lg:p-10 p-5">
          <p className="mb-3 poppins-light text-[18px] text-start pb-5 lg:ml-36">
            Additionally, Moira’s accessibility is enhanced by its proximity to
            the newly constructed Mopa Airport. The airport, situated in Pernem
            taluka, significantly reduces travel time for residents and
            visitors, making Moira an even more desirable destination. With
            seamless connectivity to domestic and international destinations,
            Moira becomes a gateway to leisure and luxury, further elevating its
            status as a premier destination in Goa’s real estate landscape.
          </p>
        </div>
        <Image
           className="object-cover lg:w-[30em] w-full p-5 lg:p-0 lg:mr-6"
          src="/moira/4.png"
          alt="moira"
          width={300}
          height={500}
        />
      </div>
      <div>
      <div  className="mt-[450px]">
      <Contact />
      </div>
      </div>
    </>
  );
}

export default Content;
