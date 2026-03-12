"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { initFlowbite } from "flowbite";
import { FaBarsStaggered, FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Header({ stats }) {
  const [status, setStatus] = useState(false);
  const [ekaya, setEkaya] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showOngoing, setShowOngoing] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showUpcoming, setShowUpcoming] = useState(false);
  const [showEkaya, setShowEkaya] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDropdown = (type) => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };

  const handleMobileClick = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleToggle = () => {
    setStatus(!status);
    setEkaya(false);
  };
  const handleEkaya = () => {
    setEkaya(!ekaya);
    setStatus(false);
  };

  const handleClick = () => {
    setStatus(false);
    setEkaya(false);
    // alert('hello')
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   useEffect(() => {
  //     initFlowbite();

  // },[])

  return (
    <>
      <span className="absolute w-full z-0" onClick={handleClick}></span>
      <nav
        className={`${
          isScrolled ? "bg-[#5CA2B0]" : "bg-transparent bg-opacity-5"
        } transition-all duration-300 fixed w-full z-50 top-0 start-0 border-b border-[#f8fafc7a]`}
      >
        <div className="flex justify-between p-4 lg:w-[80%] mx-auto  items-center z-50 ">
          <div className="text-center lg:hidden">
            <button
              className="text-white bg-white rounded-lg px-2 py-2"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBarsStaggered size={23} color="black" />
            </button>
          </div>
          <div className="">
            <div className="hidden w-full lg:block md:w-auto" id="navbar-dropdown">
              <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center text-white justify-between text-[18px] poppins-light hover:text-white"
                    onClick={handleToggle}
                  >
                    Our Projects{" "}
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {status && (
                    <div className="z-50 top-20 absolute font-normal bg-white divide-y divide-gray-100  shadow dark:bg-gray-700 dark:divide-gray-600 w-[600px]">
                      <div className="flex justify-between p-0">
                        <div className="p-0 w-full">
                          <p className="border-b border-gray-400 p-2 poppins-light text-[18px]">
                            Ongoing Projects
                          </p>
                          <ul
                            className="py-2 text- text-gray-700 dark:text-gray-400"
                            aria-labelledby="dropdownLargeButton"
                          >
                            <li>
                              <p className="px-4 text-e-green poppins-light text-[18px]">
                                Goa
                              </p>
                            </li>
                            {/* <li>
                              <Link
                                onClick={handleClick}
                                href="/about-dona-paula"
                                className="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                — Dona Paula
                              </Link>
                            </li> */}
                            <li>
                              <Link
                                onClick={handleClick}
                                href="/vista-do-mar"
                                class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                — Vista Do Mar
                              </Link>
                            </li>
                            <li className="pt-4">
                              <p className="px-4 text-e-green poppins-light text-[18px]">
                                Bangalore
                              </p>
                            </li>
                            <li>
                              <Link
                                onClick={handleClick}
                                href="/takshavi"
                                class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                — Takshavi
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-200 p-0 w-full">
                          <p className="border-b border-gray-400 p-2 poppins-light text-[18px]">
                            Completed Projects
                          </p>
                          <ul
                            className="py-2 text- text-gray-700 dark:text-gray-400"
                            aria-labelledby="dropdownLargeButton"
                          >
                            <li>
                              <p className="px-4 text-e-green poppins-light text-[18px]">
                                Bangalore
                              </p>
                            </li>
                            <li>
                              <Link
                                onClick={handleClick}
                                href="/about-embrace"
                                className="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                — Embrace
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={handleClick}
                                href="/about-ellen"
                                class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                — Ellen
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="p-0 w-full">
                          <p className="border-b border-gray-400 p-2 poppins-light text-[18px]">
                            Upcoming Projects
                          </p>
                          <ul
                            className="py-2 text- text-gray-700 dark:text-gray-400"
                            aria-labelledby="dropdownLargeButton"
                          >
                            <li>
                              <p className="px-4 text-e-green poppins-light text-[18px]">
                                Goa
                              </p>
                            </li>

                            {/* <li>
                              <Link
                                onClick={handleClick}
                                href="/about-moira"
                                className="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                — Moira
                              </Link>
                            </li> */}
                            <li>
                              <Link
                                onClick={handleClick}
                                href="/about-amora"
                                className="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                — Amora
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={handleClick}
                                href="/about-lucilia"
                                className="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                — Lucilia
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                <li>
                  <button
                    id="dropdownNavbarLink1"
                    data-dropdown-toggle="dropdownNavba1r"
                    class="flex items-center text-white justify-between text-[18px] poppins-light hover:text-white"
                    onClick={handleEkaya}
                  >
                    About Ekaya{" "}
                    <svg
                      class="w-2.5 h-2.5 ms-2.5"
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
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {ekaya && (
                    <div class="z-50 top-20 absolute font-normal bg-white divide-y divide-gray-100  shadow dark:bg-gray-700 dark:divide-gray-600 w-[200px]">
                      <div className="flex justify-between p-0">
                        <div className="p-0 w-full">
                          <ul
                            class="py-2 text- text-gray-700 dark:text-gray-400"
                            aria-labelledby="dropdownLargeButton"
                          >
                            <li>
                              <Link
                                onClick={handleClick}
                                href="/about-us"
                                class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Our Story
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={handleClick}
                                href="/our-team"
                                class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Our Team
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={handleClick}
                                href="why-ekaya"
                                class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Why Ekaya
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={handleClick}
                                href="/sustainability"
                                class="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Sustainability
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:mr-[00px] w-40 lg:w-60 md:w-96">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="/logo.svg" className="h-8" alt="Ekaya" />
            </Link>
          </div>
          <Link
            href="/contact-us"
            className="flex md:order-2 space-x-3 md:space-x-0"
          >
            <button
              type="button"
              className="text-e-green bg-white hover:bg-black hover:border-white hover:text-white poppins-normal rounded-full text- lg:px-20 px-5 py-2.5 text-center inline-flex items-center"
            >
              INQUIRE
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
            </button>
          </Link>
        </div>
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={handleClick}
          >
            <div
              className="absolute top-0 left-0 w-3/4 h-full bg-white z-50 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <img src="/logo.svg" className="h-8" alt="Ekaya" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 text-2xl font-bold p-2"
                >
                  <div>
                    <AiOutlineClose
                      className="bg-[#5CA2B0] text-white rounded-full -mx-64 md:-mx-[680px] p-2 mt-3"
                      size={35}
                    />
                  </div>
                </button>
              </div>
              <ul className="space-y-7 text-gray-700 text-lg">
                {/* Ongoing Projects */}
                <li>
                  <button
                    onClick={() => handleDropdown("ongoing")}
                    className="flex justify-between w-full"
                  >
                    Ongoing Projects{" "}
                    <span>
                      {openDropdown === "ongoing" ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </button>
                  {openDropdown === "ongoing" && (
                    <>
                      <h3 className=" text-xl bg-[#5CA2B0] px-5 p-1 rounded-md text-white mt-4">
                        Goa
                      </h3>
                      <ul className="pl-4 space-y-2 pb-3">
                        {/* <li className="pt-3"><Link href="/about-dona-paula" onClick={handleMobileClick}>— Dona Paula</Link></li> */}
                        <li>
                          <Link
                            href="/vista-do-mar"
                            onClick={handleMobileClick}
                          >
                            — Vista Do Mar
                          </Link>
                        </li>
                      </ul>
                      <h3 className=" text-xl bg-[#5CA2B0] px-5 p-1 rounded-md text-white">
                        Bangalore
                      </h3>
                      <ul className="pl-4 space-y-2 text-">
                        <li className="pt-3">
                          <Link href="/takshavi" onClick={handleMobileClick}>
                            — Takshavi
                          </Link>
                        </li>
                      </ul>
                    </>
                  )}
                </li>

                {/* Completed Projects */}
                <li>
                  <button
                    onClick={() => handleDropdown("completed")}
                    className="flex justify-between w-full"
                  >
                    Completed Projects{" "}
                    <span>
                      {openDropdown === "completed" ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </button>
                  {openDropdown === "completed" && (
                    <>
                      <h3 className=" text-xl bg-[#5CA2B0] px-5 p-1 rounded-md text-white mt-4">
                        Bangalore
                      </h3>
                      <ul className="pl-4 space-y-2 text-">
                        <li className="pt-3">
                          <Link
                            href="/about-embrace"
                            onClick={handleMobileClick}
                          >
                            Embrace
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-ellen" onClick={handleMobileClick}>
                            Ellen
                          </Link>
                        </li>
                      </ul>
                    </>
                  )}
                </li>

                {/* Upcoming Projects */}
                <li>
                  <button
                    onClick={() => handleDropdown("upcoming")}
                    className="flex justify-between w-full"
                  >
                    Upcoming Projects{" "}
                    <span>
                      {openDropdown === "upcoming" ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </button>
                  {openDropdown === "upcoming" && (
                    <>
                      <h3 className=" text-xl bg-[#5CA2B0] px-5 p-1 rounded-md text-white mt-4">
                        Goa
                      </h3>
                      <ul className="pl-4 space-y-2 text-">
                        <li className="pt-3">
                          <Link href="/about-moira" onClick={handleMobileClick}>
                            — Moira
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-amora" onClick={handleMobileClick}>
                            — Amora
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about-lucilia"
                            onClick={handleMobileClick}
                          >
                            — Lucilia
                          </Link>
                        </li>
                      </ul>
                    </>
                  )}
                </li>

                {/* About Ekaya */}
                <li>
                  <button
                    onClick={() => handleDropdown("about")}
                    className="flex justify-between w-full"
                  >
                    <span>About Ekaya</span>{" "}
                    <span>
                      {openDropdown === "about" ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </button>
                  {openDropdown === "about" && (
                    <ul className="pl-4 space-y-2 text-">
                      <li className="pt-3">
                        <Link href="/about-us" onClick={handleMobileClick}>
                          Our Story
                        </Link>
                      </li>
                      <li>
                        <Link href="/our-team" onClick={handleMobileClick}>
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link href="/why-ekaya" onClick={handleMobileClick}>
                          Why Ekaya
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sustainability"
                          onClick={handleMobileClick}
                        >
                          Sustainability
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
