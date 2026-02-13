"use client";
import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Map from "../../utils/Map";
import Link from "next/link";

const FloorPlan = [
  {
    id: "1",
    floor: "/takshavi/floor-1.webp",
    plan_name: "Floor plan 1",
  },
  {
    id: "2",
    floor: "/takshavi/floor-2.webp",
    plan_name: "Floor Plan 2",
  },
  {
    id: "3",
    floor: "/takshavi/floor-3.webp",
    plan_name: "3D Design 1",
  },
  {
    id: "4",
    floor: "/takshavi/floor-4.webp",
    plan_name: "3D Design 2",
  },
];

function Content() {
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
    <div>
      <div className="mt-10 lg:mt-[100px] lg:w-[80%] mx-auto lg:p-0 p-5">
        <h4 className="lg:text-4xl sm:text-4xl text-2xl text-black poppins-light pb-6">
          Tranquil Living in
          <br /> Frazer Town’s Spencer Road
        </h4>
        <p className="poppins-light text-[18px] text-start pb-5">
          Ekaya Spaces proudly unveils Takshavi, a boutique residential enclave
          nestled in the heart of Frazer Town’s Spencer Road. With a modest yet
          sophisticated approach, Takshavi offers seven meticulously crafted
          3-bedroom apartments, each designed to provide residents with a serene
          haven amidst the urban landscape.
        </p>
        <p className="poppins-light text-[18px] text-start pb-5">
          Positioned within the tranquil surroundings of Frazer Town, Takshavi
          enjoys a coveted location that grants easy access to nearby parks,
          esteemed educational institutions, and essential amenities. Its
          integration into the neighborhood fabric reflects a commitment to
          fostering a sense of community and belonging.
        </p>
        <p className="poppins-extralight  text-[24px] text-start">
          Our homes are designed to create a harmonious flow between
          <br />
          interior luxury and the beauty of the outdoors.
        </p>
      </div>
      <div className="w-[80%] mx-auto pt-12">
        <p className="bg-[#DFF3F4] p-4 poppins-light lg:w-[337px] text-center">
          Project Gallery
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <Slider ref={sliderRef} {...settings} className="z-10">
          <div className="z-10">
            <img src="/takshavi/gallery-1.webp" className="" />
          </div>
          <div>
            <img src="/takshavi/gallery-2.webp" className="" />
          </div>
          <div>
            <img src="/takshavi/gallery-3.webp" className="" />
          </div>
        </Slider>
        <div className="text-[18px] poppins-light border border-e-green lg:w-[490px] p-6 my-12">
          <Link
            href="#contactpage"
            class="text-black dark:text-black underline hover:underline"
          >
            Click here
          </Link>{" "}
          to fill the form for the project brochure
        </div>
        <p className="poppins-light text-[18px] text-start pb-5">
          In a practical gesture, Takshavi ensures convenience for its residents
          by providing two dedicated parking spots per apartment, alleviating
          the common urban concern of parking scarcity. Additionally, the
          project incorporates essential features such as 100% generator backup
          and rainwater harvesting systems, prioritizing uninterrupted living
          and environmental consciousness without ostentation.
        </p>
        <p className="poppins-light text-[18px] text-start pb-5">
          Takshavi’s architectural design embodies a harmonious blend of
          contemporary elegance and sustainable principles. Through thoughtful
          planning, each apartment maximizes space and natural light, creating a
          welcoming ambiance conducive to relaxation and rejuvenation.
        </p>
        <p className="poppins-light text-[18px] text-start pb-5">
          With just seven 3-bedroom apartments, Takshavi offers a sense of
          exclusivity and intimacy, allowing residents to enjoy a peaceful
          retreat from the bustling city life. Whether unwinding in the comfort
          of their homes or exploring the nearby amenities, residents are
          invited to experience a lifestyle that seamlessly integrates modern
          comforts with understated luxury.
        </p>
        <p className="poppins-light text-[18px] text-start pb-5">
          In summary, Takshavi by Ekaya Spaces presents a modest yet refined
          living experience in Frazer Town’s Spencer Road. With its limited
          collection of 3-bedroom apartments, practical amenities, and
          commitment to sustainability, Takshavi invites residents to embrace a
          tranquil urban lifestyle without extravagance. Welcome to the essence
          of serene living at Takshavi by Ekaya Spaces.
        </p>
      </div>
      <div className="bg-[#D5F0F0] py-12">
        <div className="w-[80%] mx-auto">
          <h4 className="text-4xl text-black poppins-light pb-6">
            Specifications
          </h4>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Structure</div>
            <div>
              {" "}
              <ul className="poppins-light  list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">
                  RCC structure with concrete/block masonry walls.
                </li>
                <li>
                  Open surface parking on stilt floor.Polished VDF flooring
                </li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Finishes</div>
            <div>
              <p className="poppins-medium text-[18px]">LIVING / DINING</p>
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)] pb-1">
                <li>Creanza vitrified tiles</li>
                <li>Premium emulsion paint for ceiling and walls.</li>
              </ul>
              <p className="poppins-medium text-[18px]">MASTER BEDROOM</p>
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>Creanza vitrified flooring and skirting.</li>
                <li>Premium emulsion paint for ceiling and walls.</li>
              </ul>
              <p className="poppins-medium text-[18px]">OTHER ROOMS BEDROOMS</p>
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>Creanza vitrified flooring and skirting.</li>
                <li>Premium emulsion paint for ceiling and walls.</li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Toilets</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>Creanza Matt finish vitrified tile flooring.</li>
                <li>Vitrified wall tiling upto 7 ft level.</li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Kitchen</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>Vitrified tile flooring.</li>
                <li>Ceramic wall tiling 2 ft above counter level.</li>
                <li>Premium emulsion paint for ceiling and walls.</li>
                <li>
                  2 feet wide 19 mm thick granite counter and SS Sink with drain
                  board.
                </li>
                <li>Provision for exhaust.</li>
                <li>One stainless-steel single bowl sink.</li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Balconies/Utilities</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>Matt finish Vitrified tile flooring and skirting.</li>
                <li>Glass with MS hand rails.</li>
                <li>Cement based paint for ceiling.</li>
                <li>Premium exterior emulsion for walls.</li>
              </ul>
            </div>
          </div>

          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">
              Common areas and Staircase
            </div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>
                  Granite for landing, treads & risers from basement to terrace
                  floor.
                </li>
                <li>Premium emulsion for ceiling and walls.</li>
                <li>Glass with MS hand rails.</li>
              </ul>
            </div>
          </div>

          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">JOINERY</div>
            <div>
              <p className="poppins-medium text-[18px]">Main Door</p>
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">
                  Main door – Teak wood frame and Teak wood shutter with
                  melamine polish.
                </li>
              </ul>
              <p className="poppins-medium text-[18px]">Internal Doors</p>
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>
                  Hard wood frame with both side Masonite skin shutter with
                  paint.
                </li>
              </ul>
              <p className="poppins-medium text-[18px]">Toilet Doors</p>
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>
                  Hard wood frame with Masonite skin shutter on the external
                  side and laminated on the internal side.
                </li>
                <li>UPVC glazed sliding windows.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ABD2D3]">
        <div className="w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">SANITARY & PLUMBING</div>
            <div>
              {" "}
              <ul className="poppins-light  list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">
                  CP Fittings: Jacquar or equvivalent.
                </li>
                <li>Ceramic Fittings: Jacquar or equvivalent</li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">ELECTRICAL</div>
            <div>
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)] pb-1">
                <li>
                  All Products such as switch & accessories, PVC conduit,
                  Switchgear, wiring cable etc., are of reputed make &
                  confirming to ISI standards. Brands such as Le grand or
                  equivalent would used. GM Modular Switches
                </li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">AIR CONDITIONG</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>Provision for Electrical conduit,</li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">TELEPHONE POINTS</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>
                  Provision for Electrical conduit, Drain pipe and outdoor unit
                  space for split type
                </li>
                <li>AC for Living, Dinning & Master Bedroom.</li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">TELEPHONE POINTS</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>In Living Room and in all Bedrooms.</li>
              </ul>
            </div>
          </div>

          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">D.G. KIRLOSKAR MAKE</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>For common area lighting, lifts and pumps.</li>
                <li>4 Kva power back-up for each unit</li>
              </ul>
            </div>
          </div>

          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">ELEVATORS</div>
            <div>
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">
                  Lifts - Make Otis ,Johnson or equivalent. 8 Passenger.
                  Internal elevator for T301
                </li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">SECURITY</div>
            <div>
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">
                  24 hour security & CCTV on all sides of the stilt(Parking)
                  floorincluding lobby area.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Map data={FloorPlan} />
    </div>
  );
}

export default Content;
