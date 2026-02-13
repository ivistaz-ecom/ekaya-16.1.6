"use client";
import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Contact from "../../components/HomePage/Contact";
import Image from "next/image";
import Map from "../../utils/Map";
import ProjectGallery from "./ProjectGallery";
const FloorPlan = [
  {
    id: "1",
    floor: "/embrace/floor-6.webp",
    plan_name: "3D rendered",
  },
  {
    id: "2",
    floor: "/embrace/floor-2.webp",
    plan_name: "Floor plan parking",
  },
  {
    id: "3",
    floor: "/embrace/floor-3.webp",
    plan_name: "Floor plan — 3 floors",
  },
  {
    id: "4",
    floor: "/embrace/floor-41.webp",
    plan_name: "Unit floor plan design layout",
  },
  {
    id: "4",
    floor: "/embrace/floor-5.webp",
    plan_name: "Features",
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
      <div className="lg:mt-[100px] mt-10 lg:w-[80%] mx-auto lg:p-0 p-5">
        <h4 className="lg:text-4xl text-2xl text-black poppins-light pb-6">
          Modern idyll in a three-storey block with
          <br /> six luxurious homes
        </h4>
        <p className="poppins-light text-[18px] text-start pb-5">
          Located in the serene yet prestigious Ganga Nagar, Ekaya’s Embrace is
          a testament to modern luxury, just a gaze away from Bengaluru’s
          stunning Embassy One. Perfectly positioned off Bellary Main Road, this
          elegant abode ensures effortless connectivity to Bengaluru
          International Airport, the essential Columbia Asia Hospital, and
          vibrant market hubs. At Embrace, luxury is reimagined, offering a
          unique blend of comfort and elegance, designed to cater to those who
          aspire for a life beyond the ordinary.
        </p>

        <p className="poppins-light  text-[18px] text-start">
          Our homes are designed to create a harmonious flow between interior
          luxury
          <br />
          and the beauty of the outdoors.
        </p>
      </div>
      <div className="w-[80%] mx-auto pt-12">
        <p className="bg-[#DFF3F4] p-4 poppins-light w-[337px] text-center">
          Project Gallery
        </p>
      </div>
      <div>
      <ProjectGallery />
      </div>
      <div className="lg:w-[80%] mx-auto py-12 lg:py-10 p-5">
        <h4 className="lg:text-4xl text-3xl text-black poppins-light pb-6">
          Spacious, modern homes
          <br />
          with thoughtful layouts
        </h4>
        <p className="poppins-light text-[18px] text-start pb-5">
          Within view of Bengaluru’s newest and hottest landmark destination -
          Embassy One (Four Seasons Hotel and Residences), Ekaya’s Embrace is
          just off Bellary Main Road, cocooned in the most sought after, premium
          residential neighbourhood of Ganga Nagar.
        </p>
        <p className="poppins-light  text-[18px] text-start pb-5">
          At Embrace compromise is never an option. Only the best of everything
          has been utilized, Right from the building material, to its 24-power
          back up, to the maneuver-friendly stilt parking at ground level, to
          the finish with marble and wooden flooring.
        </p>
        <p className="poppins-light  text-[18px] text-start">
          Ideally located, merely a half hour away from the Bengaluru
          International Airport, via NH7, Embrace also boasts of an easy and
          hurdle-free access to the area’s prime market place and health care
          facilities, such as the Columbia Asia hospital. It is strategically
          situated near the CBD and just about 10 to 15 minutes from Cantonment.
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
              <ul className="poppins-light  text-[18px] list-image-[url(/right-icon.svg)]">
                <li className="">
                  RCC structure with concrete/block masonry walls.
                </li>
                <li>Open surface parking on Stilt floor.</li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Finishes</div>
            <div>
              <p className="poppins-medium text-[18px]">LIVING / DINING</p>
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)] pb-1">
                <li>Vitrified Flooring with Marble Finish.</li>
                <li>Oil bound distemper paint for Ceiling and Walls.</li>
              </ul>
              <p className="poppins-medium text-[18px]">MASTER BEDROOM</p>
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)] pb-1">
                <li>Wooden Flooring and Tile Skirting.</li>
                <li>Oil bound distemper paint for Ceiling and Walls.</li>
              </ul>
              <p className="poppins-medium text-[18px]">OTHER BEDROOMS</p>
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)] pb-1">
                <li>Vitrified flooring with Tile Skirting.</li>
                <li>Oil bound distemper paint for Ceiling and Walls.</li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Toilets</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>Matt finish vitrified Tile Flooring.</li>
                <li>Vitrified wall tiling upto 7 ft level.</li>
                <li>False Ceiling with Grid panels.</li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Kitchen</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>Vitrified Tile flooring.</li>
                <li>Ceramic wall tiling 2 ft above Counter level.</li>
                <li>Oil bound distemper paint for Ceiling and Walls.</li>
                <li>
                  2 feet wide 19 mm thick Granite counter and SS Sink with Drain
                  board.
                </li>
                <li>Provision for Exhaust.</li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Balconies/Utilities</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>Matt finishVitrified tile flooring and skirting.</li>
                <li>MS Handrail.</li>
                <li>Cement based paint for Ceiling.</li>
                <li>External Emulsion/Textured paint forWalls.</li>
              </ul>
            </div>
          </div>

          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Common Staircase</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>
                  Granite for landing, treads & risers from Basement to Fourth
                  floor.
                </li>
                <li>MS Handrail.</li>
                <li>
                  OBD paint and texture paint for Walls and OBD for Ceiling.
                </li>
              </ul>
            </div>
          </div>

          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Common Areas</div>
            <div>
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">
                  Granite flooring and skirting for Ground floor and Upper
                  floors.
                </li>
                <li className="text-[18px]">OBD/textured paint forWalls.</li>
                <li className="text-[18px]">OBD paint for Ceiling.</li>
                <li className="text-[18px]">MS Handrail.</li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Joinery</div>
            <div>
              <p className="poppins-medium text-[18px]">Main Door</p>
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">
                  Teak wood frame andTeak wood shutter with melamine polish.
                </li>
              </ul>
              <p className="poppins-medium text-[18px]">Internal Doors</p>
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">
                  Hard wood frame with both side Masonite skin shutter with
                  paint.
                </li>
              </ul>
              <p className="poppins-medium text-[18px]">Toilet Doors</p>
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">
                  Hard wood frame with Masonite skin shutter on the external
                  side and laminated on the internal side.
                </li>
                <li className="text-[18px]">UPVC glazed slidingWindows.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#CAB575] py-12 text-white">
        <div className="w-[80%] mx-auto">
          <h4 className="text-4xl text-white poppins-light pb-6">Features</h4>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">SANITARY & PLUMBING</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li className="">CP Fittings: Kohler or Equivalent make.</li>
                <li>Ceramic Fittings: Kohler or Equivalent make.</li>
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
                  Switchgear,
                </li>
                <li>
                  Wiring cable etc., are of reputed make and confirming to ISI
                  standards.
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
                <li>
                  All Products such as switch & accessories, PVC conduit,
                  Switchgear,
                </li>
                <li>
                  Wiring cable etc., are of reputed make and confirming to ISI
                  standards.
                </li>
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
            <div className="text-2xl poppins-light">D.G</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>For common area lighting, lifts and pumps.</li>
                <li>3 KVA Power Back-up for each Unit.</li>
              </ul>
            </div>
          </div>

          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">ELEVATORS</div>
            <div>
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">
                  Make Schindler or equivalent ( 6 Passengers )
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
                  Round the clock security with Intercom facility.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-px border-t border-gray-300 mx-auto " />
      <div className="bg-[#CAB575] py-12 text-white">
        <div className="w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1">
            <h4 className="text-4xl text-white poppins-light pb-6">
              Amenities
            </h4>
            <div>
              <ul className="poppins-light  list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">Children’s Play Area.</li>
                <li className="text-[18px]">Gymnasium.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Map data={FloorPlan} />

      <Contact />
    </div>
  );
}

export default Content;
