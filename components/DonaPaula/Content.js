import React from "react";
import Image from "next/image";

const contentData = [
  {
    text: "Dona Paula boasts a rich historical tapestry, with tales dating back to the colonial era of Portuguese rule in Goa. Legend has it that Dona Paula de Menezes, a noblewoman of Portuguese descent, tragically fell in love with a local fisherman, only to meet her demise by plunging into the Arabian Sea from the precipice now known as the Dona Paula Viewpoint. Her love story has since become the subject of folklore and continues to intrigue visitors to this day.",
    imgSrc: "/dona-paula/1.webp",
    imgAlt: "moira",
    reverse: false,
  },
  {
    text: "Furthermore, Dona Paula’s strategic location along the coast made it a significant port during the colonial era, facilitating trade and commerce between Portugal and other parts of Asia. The remnants of this maritime heritage can still be seen in the quaint fishing villages and historic landmarks that dot the coastline.",
    imgSrc: "/dona-paula/2.webp",
    imgAlt: "dona paula",
    reverse: true,
  },
  {
    text: "Rich in cultural heritage, Dona Paula boasts landmarks such as the Cabo Raj Bhavan, once a Portuguese fort and now the official residence of the Governor of Goa. Its vibrant markets and proximity to renowned beaches like Miramar and Vainguinim further elevate its charm, offering a perfect blend of relaxation and exploration.",
    imgSrc: "/dona-paula/3.webp",
    imgAlt: "dona paula",
    reverse: false,
  },
  {
    text: "With its timeless beauty, affluent ambiance, and enchanting coastal vistas, Dona Paula continues to enchant visitors and residents alike, promising an unforgettable experience amidst the wealth and luxury of Goa’s coastal paradise.",
    imgSrc: "/dona-paula/4.webp",
    imgAlt: "dona paula",
    reverse: true,
  },
];

function Content() {
  return (
    <div className="z-50 overflow-hidden w-full ">
      <div className="lg:mt-[100px] mt-10 lg:w-[80%] mx-auto px-4 lg:px-0">
        <p className="poppins-light text-[18px] text-start pb-5">
          Nestled along the picturesque coastline of Goa, Dona Paula stands as a
          testament to the region’s timeless allure and natural beauty. Named
          after Dona Paula de Menezes, a historical figure enveloped in
          folklore, this iconic locale captivates visitors with its panoramic
          vistas of the Arabian Sea and verdant landscapes.
        </p>
        <p className="poppins-light text-[18px] text-start pb-5">
          Renowned as the “Lover’s Paradise,” Dona Paula beckons romantics and
          adventurers alike to bask in its romantic ambiance and witness the
          breathtaking confluence of the Mandovi and Zuari rivers. The famed
          Dona Paula Viewpoint offers a serene retreat, where one can immerse
          themselves in the tranquil atmosphere and marvel at the scenic
          splendor that surrounds them.
        </p>
      </div>

      <div className="lg:justify-items-end z-50 lg:w-full w-[90%] mx-auto">
        {contentData.map((item, index) => (
          <div
            key={index}
            className={`flex ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col-reverse lg:items-center items-end bg-white md:flex-col-reverse justify-items-end`}
            data-aos={item.reverse ? "fade-left" : "fade-right"}
          >
            <div className="flex flex-col justify-between leading-normal lg:pt-0 pt-6">
              <p className="mb-3 poppins-light text-[18px] text-start pb-5 lg:ml-36">
                {item.text}
              </p>
            </div>
            <Image
              className={`object-cover lg:w-[30em]  sm:w-[20em] ${item.reverse ? "lg:mr-10" : ""}`}
              src={item.imgSrc}
              alt={item.imgAlt}
              width={600}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
