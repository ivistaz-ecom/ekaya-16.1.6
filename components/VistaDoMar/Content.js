"use client"
import React, { useRef } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Features from "../../components/VistaDoMar/Features"
import Carousels from "../../components/VistaDoMar/Carousels"
import Contact from "../../components/HomePage/Contact"

function Content() {
  const sliderRef = useRef(null)

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

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow onClick={() => sliderRef.current.slickPrev()} />, // Pass onClick handler to prev arrow
    nextArrow: <NextArrow onClick={() => sliderRef.current.slickNext()} />, // Pass onClick handler to next arrow
    responsive: [
      {
        breakpoint: 1024, // Adjust this value based on your design breakpoints
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Adjust this value based on your design breakpoints
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can add more breakpoints and adjust settings as needed
    ],
  }

  return (
    <div>
      <div className="lg:mt-[100px] mt-10 lg:w-[80%] lg:px-0 px-5 mx-auto">
        <h2 className="text-2xl text-e-green font-light tracking-[0.2em] lg:pb-12 pb-3">
          ABOUT THE PLOT
        </h2>
        <h4 className="lg:text-4xl text-2xl text-black poppins-light pb-6">
          Alvit and Esmeralda’s Journey
        </h4>
        <p className="poppins-light text-[18px] text-start pb-5">
          In the vibrant city of Dar es Salaam, nestled in East Africa, Alvit
          and Esmeralda began their life together. Over the span of five years,
          their family blossomed with the arrival of two daughters, Siandra and
          Jennifer. However, as the tumultuous East African revolution unfolded
          in 1965, the family migrated to Bangalore, India.
        </p>
        <p className="poppins-light text-[18px] text-start pb-5">
          In Bangalore, amidst the bustling streets and new beginnings, Alvit
          and Esmeralda found themselves embracing fresh opportunities. When an
          enticing offer came from Oman, they eagerly seized it. Alvit was
          tasked with spearheading the establishment of the modern Marine patrol
          police division, while Esmeralda took on the responsibility of
          landscaping the vast Royal Oman Police establishments across the
          country.
        </p>
        <p className="poppins-light text-[18px] text-start pb-5">
          A decade of dedication and success later, Alvit and Esmeralda returned
          to Bangalore, their hearts filled with memories of Oman’s beauty and
          prosperity. It was then that Alvit began to dream of building their
          dream villa in Dona Paula, a picturesque coastal town. Meanwhile,
          Siandra embarked on her own journey, finding employment in the
          enchanting state of Goa.
        </p>
        <p className="poppins-light text-[18px] text-start pb-5">
          When the time came for Siandra’s wedding, her parents asked her what
          she desired as a gift. Without hesitation, Siandra expressed her wish
          for a plot of land in Goa.
        </p>
        <p className="poppins-light text-[18px] text-start pb-5">
          Throughout the years, whenever Alvit and Esmeralda visited Goa, they
          would drive from Loutolim, Esmeralda’s grandmother’s home, to Dona
          Paula. Standing on a particular spot overlooking the majestic Marmagoa
          harbor, Alvit would declare, “One day, I will build a house here!”
        </p>
        <p className="poppins-light text-[18px] text-start pb-5">
          Fate intervened, and Alvit finally found three plots in Dona Paula.
          One was gifted to Siandra, another was designated as an orchard, and
          the third became the site of their dream home, named Vista do Mar,
          meaning “views of the sea” in Portuguese.
        </p>
        <p className="poppins-light text-[18px] text-start pb-5">
          Today, the villa still stands proudly as a symbol of Alvit’s vision
          and determination. Ekaya Spaces has collaborated with the family to
          develop a luxury apartment project, aptly named Vista do Mar, ensuring
          that Alvit’s legacy lives on, even though he may no longer be with us.
        </p>
      </div>
      <div
        className="lg:w-[80%] sm:w-[80%] w-full mx-auto p-5"
        data-aos="fade-down"
      >
        <div className="vista-do-mar-slider relative">
          <Slider ref={sliderRef} {...settings} className="z-10">
            <div className="p-2 z-10">
              <img
                src="/VistaDoMar/part-1.webp"
                className=""
                alt="ekaya-spaces"
              />
            </div>
            <div className="p-2">
              <img
                src="/VistaDoMar/part-2.webp"
                className=""
                alt="ekaya-spaces"
              />
            </div>
          </Slider>
        </div>
        <div className="text-[18px] poppins-light border border-e-green lg:w-[490px] p-6 my-12 mx-auto">
          <a
            href="#contact-vista-do-mar"
            className="text-black dark:text-black underline hover:underline"
          >
            Click here
          </a>{" "}
          to fill the form for the project brochure
        </div>
      </div>

      <div className="text-center w-[80%] mx-auto" data-aos="fade-down">
        <h4 className="lg:text-4xl md:text-4xl text-2xl text-black poppins-light pb-6">
          Luxurious Amenities at Oceanfront Apartments
        </h4>
        <p className="poppins-light text-[18px] pb-5 ">
          Indulge in the ultimate luxury living experience with a comprehensive
          array
          <br /> of amenities designed to exceed your expectations:
        </p>
      </div>
      <div className="">
        <Carousels />
      </div>
      <div className="text-center  w-[80%]   mx-auto" data-aos="fade-down">
        <Features />
      </div>

      <div className="bg-[#D5F0F0] py-12" data-aos="fade-down">
        <div className="lg:w-[80%] sm:w-[80%] w-[80%] mx-auto">
          <h4 className="text-4xl text-black poppins-light pb-6">
            Specifications
          </h4>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Structure</div>
            <div>
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
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
                <li>
                  Vitrified tiles : Creanza tiles.1600mm x 1600mm in the land
                  owners share and 800mm x 1600mm in the other apartments.
                </li>
                <li>Premium emulsion paint for ceiling and walls.</li>
              </ul>
              <p className="poppins-medium text-[18px]">MASTER BEDROOM</p>
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>Engineered wood flooring and skirting.</li>
                <li>Premium emulsion paint for ceiling and walls.</li>
              </ul>
              <p className="poppins-medium text-[18px]">OTHER ROOMS BEDROOMS</p>
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>Engineered wood flooring and skirting.</li>
                <li>Premium emulsion paint for walls and ceiling.</li>
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
                <li>
                  False ceiling with grid panels or calcium silicate board.
                </li>
              </ul>
            </div>
          </div>
          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">Kitchen</div>
            <div>
              {" "}
              <ul className="poppins-light text-[18px] list-image-[url(/right-icon.svg)]">
                <li>Vitrified tile flooring. Basic Rate .</li>
                <li>Ceramic wall tiling 2 ft above counter level.</li>
                <li>Premium emulsion paint for ceiling and walls.</li>
                <li>
                  2 feet wide 19 mm thick granite counter and SS Sink with drain
                  board.
                </li>
                <li>Provision for exhaust.</li>
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
                <li>Glass with SS hand rails.</li>
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
                <li>Glass with SS hand rails.</li>
              </ul>
            </div>
          </div>

          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">JOINERY</div>
            <div>
              <p className="poppins-medium text-[18px]">Main Door</p>
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">
                  Teak wood frame and Teak wood shutter with melamine polish and
                  Yale digital locks.
                </li>
              </ul>
              <p className="poppins-medium text-[18px]">Internal Doors</p>
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
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

      <div className="bg-[#ABD2D3]" data-aos="fade-down">
        <div className="w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">SANITARY & PLUMBING</div>
            <div>
              {" "}
              <ul className="poppins-light  list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">CP Fittings: Kohler</li>
                <li>Ceramic Fittings: Kohler</li>
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
                <li>6 Kva power back-up for each unit</li>
              </ul>
            </div>
          </div>

          <hr className="h-px border-t border-gray-300 mx-auto " />
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 py-4">
            <div className="text-2xl poppins-light">ELEVATORS</div>
            <div>
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">
                  Lifts - Make Schindler or equivalent. 12 Passenger.
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
                  Round with clock security with CCTV & intercom facility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto pt-6" data-aos="fade-down">
        <h3 className="lg:text-4xl text-3xl text-black poppins-light pb-6">
          Location Highlights
        </h3>
        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 py-4">
          <div className="text-2xl lg:py-0 py-6 ">
            <p className="text-black poppins-light relative bg-[#ABD2D3] lg:w-[300px] lg:h-[100px] py-6 flex justify-center items-center">
              Hotels
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="lg:col-span-2 col-span-1">
            <ul className="poppins-light list-image-[url(/right-icon.svg)]">
              <li className="text-[18px]">Taj Cidade De Goa : 1.4 Km</li>
              <li className="text-[18px]">
                Goa Marriott Resort & Spa : 5.6 Km
              </li>
              <li className="text-[18px]">Grand Hyatt Goa : 5.6 Km</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 py-4 ">
          <div className="text-2xl lg:py-0 py-6">
            <p className="text-black poppins-light relative bg-[#ABD2D3] lg:w-[300px] lg:h-[240px] py-6 flex justify-center items-center">
              Beaches
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="lg:col-span-2 col-span-1">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">Dona Paula : 1.9 KM</li>
                <li className="text-[18px]">Vainguinim : 1.1 Km</li>
                <li className="text-[18px]">Odxel : 2.5 Km</li>
                <li className="text-[18px]">Miramar : 4.6 Km</li>
                <li className="text-[18px]">Candolim : 23 Km</li>
                <li className="text-[18px]">Calangute : 23</li>
                <li className="text-[18px]">Baga : 26 Km</li>
              </ul>
              <ul className="poppins-light list-image-[url(/right-icon.svg)]">
                <li className="text-[18px]">Anjuna : 30 Km</li>
                <li className="text-[18px]">Vagator : 29 Km</li>
                <li className="text-[18px]">Ashwem : 38 Km</li>
                <li className="text-[18px]">Colva : 33 Km</li>
                <li className="text-[18px]">Majorda : 30Km</li>
                <li className="text-[18px]">Benauim : 36 Km</li>
                <li className="text-[18px]">Varca : 41Km</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 py-4 ">
          <div className="text-2xl lg:py-0 py-6">
            <p className="text-black poppins-light relative bg-[#ABD2D3] lg:w-[300px] lg:h-[100px] py-6 flex justify-center items-center">
              Hospitals
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="col-span-2">
            <ul className="poppins-light list-image-[url(/right-icon.svg)]">
              <li className="text-[18px]">Manipal Hospital : 1 Km</li>
              <li className="text-[18px]">
                Goa Medival College Hospital : 5.6 Km
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 lg:py-4 ">
          <div className="text-2xl">
            <p className="text-black poppins-light relative bg-[#ABD2D3] lg:w-[300px] lg:h-[100px] py-6 flex justify-center items-center">
              Schools
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="lg:py-0 py-6">
            <ul className="poppins-light list-image-[url(/right-icon.svg)]">
              <li className="text-[18px]">Sharada Mandir School : 4.6 Km</li>
              <li className="text-[18px]">
                Maple Bear Canadian Pre School : 1.1 Km
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 py-4 ">
          <div className="text-2xl">
            <p className="text-black poppins-light relative bg-[#ABD2D3] lg:w-[300px] lg:h-[100px] py-6 flex justify-center items-center">
              Airports
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="py-6 lg:py-0">
            <ul className="poppins-light list-image-[url(/right-icon.svg)]">
              <li className="text-[18px]">Dabolim : 27 Km</li>
              <li className="text-[18px]">MOPA : 42 Km</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 py-4 ">
          <div className="text-2xl">
            <p className="text-black poppins-light relative bg-[#ABD2D3] lg:w-[300px] lg:h-[100px] py-6 flex justify-center items-center">
              Railway Stations
              <span className="triangle-right lg:block hidden"></span>
              <span className="triangle-bottom block sm:hidden lg:hidden"></span>
              <span className="triangle-left sm:block lg:hidden hidden"></span>
            </p>
          </div>
          <div className="lg:py-0 py-6">
            <ul className="poppins-light list-image-[url(/right-icon.svg)]">
              <li className="text-[18px]">Karmali : 19 Km</li>
              <li className="text-[18px]">Madgaon : 37 Km</li>
            </ul>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  )
}

export default Content
