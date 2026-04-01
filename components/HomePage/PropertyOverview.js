"use client";
import React, { useState, useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
// import { ReactComponent as PrevArrow } from '../../public/left-black.svg'; // Import your custom SVG arrows
// import { ReactComponent as NextArrow } from '../../public/right-black.svg'; // Import your custom SVG arrows

function Crafted() {
  const sliderRef = useRef(null);

  const NextArrow = ({ onClick }) => (
    <div className="arrow next-arrow" onClick={onClick}>
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
                stroke-width="2"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev-arrow" onClick={onClick}>
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
              stroke-width="2"
            />
          </g>
        </g>
      </svg>
    </div>
  );

  const [takshavi, setTakshavi] = useState(true);
  const [embrace, setEmbrace] = useState(false);
  const [ellen, setEllen] = useState(false);
  const [vista, setVista] = useState(true);
  const [amora, setAmora] = useState(false);
  const [lucilia, setLucilia] = useState(false);
  //     const [goa, setGoa] = useState(false)

  const handletakshavi = () => {
    setTakshavi(true);
    setEmbrace(false);
    setEllen(false);
    // setGoa(false)
  };
  const handleembrace = () => {
    setEmbrace(true);
    setTakshavi(false);
    setEllen(false);
    // setGoa(false)
  };
  const handleellen = () => {
    setEmbrace(false);
    setTakshavi(false);
    setEllen(true);
    // setGoa(false)
  };

  const handlevista = () => {
    setVista(true);
    setAmora(false);
    setLucilia(false);
    //setTakshavi(false)
    //setEllen(true)
    // setGoa(false)
  };
  const handleamora = () => {
    setVista(false);
    setLucilia(false);
    setAmora(true);
  };
  const handlelucilia = () => {
    setVista(false);
    setAmora(false);
    setLucilia(true);
  };

  //     const handleGoa = () => {
  //         setGoa(true)
  //         setBangalore(false)
  // }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow onClick={() => sliderRef.current.slickPrev()} />, // Pass onClick handler to prev arrow
    nextArrow: <NextArrow onClick={() => sliderRef.current.slickNext()} />, // Pass onClick handler to next arrow
  };

  return (
    <>
      <div className="text-center lg:mt-[100px] mt-5 lg:w-[80%] mx-auto z-10 relative">
        <h1 className="text-2xl text-e-green font-light tracking-[0.2em]">
          PROPERTY OVERVIEW
        </h1>
        <h2 className="lg:text-5xl text-3xl poppins-regular lg:py-10 py-5">
          Strategically located
          <br />
          masterpieces
        </h2>

        <div class="mb-4 mx-auto">
          <ul
            class="justify-center flex lg:flex-wrap -mb-px text-sm font-medium text-center"
            id="default-styled-tab"
            data-tabs-toggle="#default-styled-tab-content"
            data-tabs-active-classes="text-white w-[200px] bg-e-green"
            data-tabs-inactive-classes="text-white"
            role="tablist"
          >
            <li
              class="me-2 mx-2 bg-gray-800 text-white w-[200px]"
              role="presentation"
            >
              <button
                class="inline-block p-4 text-[18px] font-light hover:bg-e-green hover:w-[200px] hover:border-gray-300 dark:hover:text-gray-300"
                id="profile-styled-tab"
                data-tabs-target="#styled-profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="true"
              >
                Bengaluru
              </button>
            </li>
            <li
              class="me-2 mx-2 bg-gray-800 text-white w-[200px]"
              role="presentation"
            >
              <button
                class="inline-block p-4 text-[18px] font-light hover:bg-e-green hover:w-[200px] hover:border-gray-300 dark:hover:text-gray-300"
                id="dashboard-styled-tab"
                data-tabs-target="#styled-dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Goa
              </button>
            </li>
          </ul>
        </div>
        <div id="default-styled-tab-content" className="z-10 relative">
          <div
            class="hidden p-4"
            id="styled-profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="lg:flex gap-4">
              <div className="lg:w-[380px] w-full">
                <div id="accordion-collapse1" data-accordion="collapse">
                  <h2 id="accordion-collapse-heading-11">
                    <button
                      type="button"
                      class="bg-gray-800 text-white flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 gap-3 poppins-light text-[18px]"
                      data-accordion-target="#accordion-collapse-body-11"
                      aria-expanded="true"
                      aria-controls="accordion-collapse-body-11"
                    >
                      <span>Ongoing Projects</span>
                      <svg
                        data-accordion-icon
                        class="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-11"
                    class="hidden"
                    aria-labelledby="accordion-collapse-heading-11"
                  >
                    <div class=" border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                      <button
                        className="bg-e-green w-full font-light text-start p-4 text-[18px] text-white flex justify-between items-center"
                        onClick={handletakshavi}
                      >
                        Takshavi
                        <svg
                          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <h2 id="accordion-collapse-heading-22" className="mt-5">
                    <button
                      type="button"
                      class="bg-gray-800 text-white flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200  gap-3 poppins-light text-[18px]"
                      data-accordion-target="#accordion-collapse-body-22"
                      aria-expanded="false"
                      aria-controls="accordion-collapse-body-22"
                    >
                      <span>Completed Projects</span>
                      <svg
                        data-accordion-icon
                        class="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-22"
                    class="hidden"
                    aria-labelledby="accordion-collapse-heading-22"
                  >
                    <div class=" border-gray-200 dark:border-gray-700">
                      <button
                        className="bg-e-green w-full font-light text-start p-4 text-[18px] text-white flex justify-between items-center"
                        onClick={handleembrace}
                      >
                        Embrace
                        <svg
                          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                      <button
                        className="bg-e-green w-full border-t border-white font-light text-start p-4 text-[18px] text-white flex justify-between items-center"
                        onClick={handleellen}
                      >
                        Ellen
                        <svg
                          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[800px] w-full">
                {/* takshavi card                   */}
                {takshavi && (
                  <div class="mt-4 lg:mt-0 dark:bg-gray-800 z-10 relative">
                    <Slider ref={sliderRef} {...settings}>
                      {/* <div>
                        <Image
                          src="/takshavi/takshavi-comp2.webp"
                          className="w-full h-[400px]"
                          width={800}
                          height={400}
                        />
                      </div> */}
                      <div>
                        <Image
                          src="/takshavi/takshavi-comp.webp"
                          alt="Takshavi boutique residential development, architectural exterior view"
                          className="w-full h-[400px] object-cover"
                          width={800}
                          height={400}
                          sizes="(min-width: 1024px) 800px, 100vw"
                          quality={65}
                        />
                      </div>
                      <div>
                        <Image
                          src="/home/takshavi-3.png"
                          alt="Takshavi residential enclave on Spencer Road, Frazer Town, Bangalore"
                          className="w-full h-[400px] object-cover"
                          width={800}
                          height={400}
                          sizes="(min-width: 1024px) 800px, 100vw"
                          quality={65}
                        />
                      </div>
                    </Slider>
                    <div className="text-start">
                      <h3 className="text-[34px] py-2 px-4 font-regular">
                        Takshavi
                      </h3>
                      <p className="text-[18px] px-4 py-2 font-light mb-6">
                        Ekaya Spaces proudly unveils Takshavi, a boutique
                        residential enclave nestled in the heart of Frazer
                        Town’s Spencer Road.
                      </p>
                      <Link
                        href="/takshavi"
                        className="p-4 px-12 mt-4 ml-4 bg-e-green text-white"
                      >
                        Know more
                      </Link>
                    </div>
                  </div>
                )}

                {embrace && (
                  <div class="mt-4 lg:mt-0 dark:bg-gray-800 z-10 relative">
                    <Slider ref={sliderRef} {...settings}>
                      <div>
                        <Image
                          src="/embrace.png"
                          alt="Embrace luxury apartment block, Ekaya Spaces"
                          className="w-[800px] h-[400px]"
                          width={800}
                          height={400}
                        />
                      </div>
                      <div>
                        <Image
                          src="/home/embrace/embrace-1.png"
                          alt="Embrace residential project exterior and landscaping"
                          className="w-[800px] h-[400px]"
                          width={800}
                          height={400}
                        />
                      </div>
                      <div>
                        <Image
                          src="/home/embrace/embrace-2.png"
                          alt="Embrace modern homes and building facade"
                          className="w-[800px] h-[400px]"
                          width={800}
                          height={400}
                        />
                      </div>
                    </Slider>
                    <div className="text-start">
                      <h3 className="text-[34px] py-2 px-4 font-regular">
                        Embrace
                      </h3>
                      <p className="text-[18px] px-4 py-2 font-light mb-6">
                        Modern Idyll in a Three-Storey Block with six Luxurious
                        Homes
                      </p>
                      <Link
                        href="/about-embrace"
                        className="p-4 px-12 mt-4 ml-4 bg-e-green text-white"
                      >
                        Know more
                      </Link>
                    </div>
                  </div>
                )}

                {ellen && (
                  <div class="mt-4 lg:mt-0 dark:bg-gray-800 z-10 relative">
                    <Slider ref={sliderRef} {...settings}>
                      <div>
                        <Image
                          src="/home/ellen/ellen-1.png"
                          alt="Ellen premium apartment block, exterior view"
                          className="w-full h-[400px]"
                          width={800}
                          height={400}
                        />
                      </div>
                      <div>
                        <Image
                          src="/home/ellen/ellen-2.png"
                          alt="Ellen three-storey residential homes by Ekaya Spaces"
                          className="w-full h-[400px]"
                          width={800}
                          height={400}
                        />
                      </div>
                    </Slider>
                    <div className="text-start">
                      <h3 className="text-[34px] py-2 px-4 font-regular">
                        Ellen
                      </h3>
                      <p className="text-[18px] px-4 py-2 font-light mb-6">
                        A premium three-storey apartment block, with a total of
                        11 spacious modern homes,
                      </p>
                      <Link
                        href="/about-ellen"
                        className="p-4 px-12 mt-4 ml-4 bg-e-green text-white"
                      >
                        Know more
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* takshavi end here */}
            </div>
          </div>

          <div
            class="hidden p-4"
            id="styled-dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <div className="lg:flex gap-4">
              <div className="lg:w-[480px]">
                <div id="accordion-collapse" data-accordion="collapse">
                  <h2 id="accordion-collapse-heading-10">
                    <button
                      type="button"
                      class="bg-gray-800 text-white flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 gap-3 poppins-light text-[18px]"
                      data-accordion-target="#accordion-collapse-body-10"
                      aria-expanded="true"
                      aria-controls="accordion-collapse-body-10"
                    >
                      <span>Ongoing Projects</span>
                      <svg
                        data-accordion-icon
                        class="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-10"
                    class="hidden"
                    aria-labelledby="accordion-collapse-heading-10"
                  >
                    <div class=" border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                      <button
                        className="bg-e-green w-full font-light text-start p-4 text-[18px] text-white flex justify-between items-center"
                        onClick={handlevista}
                      >
                        Vista Do Mar
                        <svg
                          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <h2 id="accordion-collapse-heading-2" className="mt-5">
                    <button
                      type="button"
                      class="bg-gray-800 text-white flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200  gap-3 poppins-light text-[18px]"
                      data-accordion-target="#accordion-collapse-body-2"
                      aria-expanded="false"
                      aria-controls="accordion-collapse-body-2"
                    >
                      <span>Upcoming Projects</span>
                      <svg
                        data-accordion-icon
                        class="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-2"
                    class="hidden"
                    aria-labelledby="accordion-collapse-heading-2"
                  >
                    <div class="border border-b-0 border-gray-200 dark:border-gray-700">
                      <button
                        className="bg-e-green w-full font-light text-start p-4 text-[18px] text-white"
                        onClick={handleamora}
                      >
                        Amora
                      </button>
                    </div>
                    <div class="border border-b-0 border-gray-200 dark:border-gray-700">
                      <button
                        className="bg-e-green w-full font-light text-start p-4 text-[18px] text-white"
                        onClick={handlelucilia}
                      >
                        Lucilia
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {vista && (
                <div className="lg:mt-0 mt-4 lg:w-[800px] z-10 relative">
                  <Slider ref={sliderRef} {...settings}>
                    <div>
                      <Image
                        src="/home/vista-do-mar/vista-1.png"
                        alt="Vista Do Mar luxury apartments in Dona Paula, Goa"
                        className="w-[800px] h-[400px]"
                        width={800}
                        height={400}
                      />
                    </div>
                    <div>
                      <Image
                        src="/home/vista-do-mar/vista-2.png"
                        alt="Vista Do Mar coastal residential development, second view"
                        className="w-[800px] h-[400px]"
                        width={800}
                        height={400}
                      />
                    </div>
                  </Slider>
                  <div className="text-start">
                    <h3 className="text-[34px] py-2 px-4 font-regular">
                      Vista Do Mar
                    </h3>
                    <p className="text-[18px] px-4 py-2 font-light mb-6">
                      A luxury apartment project in Dona Paula -Goa
                    </p>
                    <Link
                      href="/vista-do-mar"
                      className="p-4 px-12 mt-4 ml-4 bg-e-green text-white"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
              )}

              {amora && (
                <div className="lg:mt-0 mt-4 lg:w-[800px] z-10 relative">
                  <Slider ref={sliderRef} {...settings}>
                    <div>
                      <Image
                        src="/vista-do-mar.png"
                        alt="Amora upcoming residential project in Moira, Goa"
                        className="w-[800px] h-[400px]"
                        width={800}
                        height={400}
                      />
                    </div>
                    <div>
                      <Image
                        src="/vista-do-mar.png"
                        alt="Amora coastal homes, alternate view"
                        className="w-[800px] h-[400px]"
                        width={800}
                        height={400}
                      />
                    </div>
                  </Slider>
                  <div className="text-start">
                    <h3 className="text-[34px] py-2 px-4 font-regular">
                      Amora
                    </h3>
                    <p className="text-[18px] px-4 py-2 font-light mb-6">
                      Located in the serene coastal town of Moira
                    </p>
                    <Link
                      href="/about-amora"
                      className="p-4 px-12 mt-4 ml-4 bg-e-green text-white"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
              )}
              {lucilia && (
                <div className="lg:mt-0 mt-4 lg:w-[800px] z-10 relative">
                  <Slider ref={sliderRef} {...settings}>
                    <div>
                      <Image
                        src="/lucilia/slide-1.webp"
                        alt="Lucilia residential project in Taleigao, Goa"
                        className="w-[800px] h-[400px] object-cover"
                        width={800}
                        height={400}
                      />
                    </div>
                    <div>
                      <Image
                        src="/lucilia/slide-2.webp"
                        alt="Lucilia premium enclave, architectural view"
                        className="w-[800px] h-[400px] object-cover"
                        width={800}
                        height={400}
                      />
                    </div>
                  </Slider>
                  <div className="text-start">
                    <h3 className="text-[34px] py-2 px-4 font-regular">
                      Lucilia
                    </h3>
                    <p className="text-[18px] px-4 py-2 font-light mb-6">
                      Nestled in the evolving premium enclave of Taleigao
                    </p>
                    <Link
                      href="/about-lucilia"
                      className="p-4 px-12 mt-4 ml-4 bg-e-green text-white"
                    >
                      Know more
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Crafted;
