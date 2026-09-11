"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teamData from "../../data/our-team.json";

const ArrowIcon = ({ direction = "right" }) => (
  <svg
    className={`w-10 h-5 ${direction === "left" ? "rotate-180" : ""}`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 5h12m0 0L9 1m4 4L9 9"
    />
  </svg>
);

const NextArrow = ({ onClick }) => (
  <button
    type="button"
    aria-label="Next slide"
    className="team-carousel-arrow text-e-green"
    onClick={onClick}
  >
    <ArrowIcon direction="right" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    aria-label="Previous slide"
    className="team-carousel-arrow text-e-green"
    onClick={onClick}
  >
    <ArrowIcon direction="left" />
  </button>
);

function Content() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  };

  return (
    <>
      <section className="w-[80%] mx-auto max-w-6xl lg:mt-[80px] mt-10">
        <div className="flex flex-col gap-16 lg:gap-20">
          {teamData.leaders.map((leader) => (
            <article
              key={leader.id}
              className={`flex flex-col items-center gap-8 lg:gap-14 ${
                leader.imagePosition === "right"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              }`}
              data-aos={
                leader.imagePosition === "right" ? "fade-left" : "fade-right"
              }
            >
              <div className="relative w-full md:w-[340px] lg:w-[440px] shrink-0 aspect-[4/5]">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(min-width: 1024px) 440px, (min-width: 768px) 340px, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center leading-normal">
                <h2 className="text-3xl lg:text-4xl poppins-medium tracking-tight text-black">
                  {leader.name}
                </h2>
                <p className="mt-2 text-lg text-gray-500 poppins-light">
                  {leader.role}
                </p>
                <div className="mt-5 space-y-4">
                  {leader.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="poppins-light text-[16px] lg:text-[18px] text-gray-700 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {teamData.departments.map((department) => (
        <section key={department.id} className="mt-16 lg:mt-24" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl text-e-green poppins-light text-center pb-8">
            {department.name}
          </h2>
          <div className="bg-[#D9E8EC] py-10 lg:py-16">
            <div className="w-[80%] mx-auto max-w-6xl flex flex-col gap-12">
              {department.members.map((member) => (
                <article
                  key={member.id}
                  className="flex flex-col md:flex-row items-center gap-8 lg:gap-14"
                >
                  <div className="relative w-full md:w-[340px] lg:w-[440px] shrink-0 aspect-[4/5]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 440px, (min-width: 768px) 340px, 80vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center leading-normal">
                    <h3 className="text-3xl lg:text-4xl poppins-light tracking-tight text-e-green">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-lg lg:text-xl text-black poppins-medium">
                      {member.role}
                    </p>
                    <div className="mt-5 space-y-4">
                      {member.bio.map((paragraph, index) => (
                        <p
                          key={index}
                          className="poppins-light text-[16px] lg:text-[18px] text-gray-700 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="relative z-0 bg-white lg:mt-[80px] mt-12 w-[80%] mx-auto max-w-6xl" data-aos="fade-down">
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 pb-10 lg:pb-14">
          <div className="flex items-start gap-5 max-w-5xl">
            <span className="hidden sm:block w-[2px] h-14 bg-e-green shrink-0 mt-1" />
            <p className="poppins-light text-[18px] text-left text-gray-700 leading-relaxed">
              {teamData.intro}
            </p>
          </div>
          <div className="flex items-center gap-8 shrink-0 sm:ml-auto pb-1">
            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
          </div>
        </div>

        <div className="team-highlights-slider">
          <Slider {...settings} ref={sliderRef}>
            {teamData.highlights.map((item, index) => (
              <div key={item.id} className="px-3 h-full">
                <article className="group h-full flex flex-col">
                  <div className="relative">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 80vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                      <span className="absolute bottom-4 left-4 text-white poppins-light tracking-[0.28em] text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="absolute bottom-0 left-0 h-[3px] w-10 bg-e-green transition-all duration-500 group-hover:w-full" />
                  </div>
                  <h3 className="mt-6 mb-3 text-2xl poppins-medium tracking-tight text-e-green">
                    {item.title}
                  </h3>
                  <p className="poppins-light text-[16px] lg:text-[17px] text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="w-[80%] mx-auto max-w-6xl text-center py-12" data-aos="fade-up">
        <h2 className="text-4xl lg:text-5xl text-black poppins-light pb-6">
          {teamData.cta.title}
        </h2>
        <p className="text-[18px] text-black poppins-light">
          {teamData.cta.description}
        </p>
      </section>
    </>
  );
}

export default Content;
