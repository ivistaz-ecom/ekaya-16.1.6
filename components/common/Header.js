"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { FaBarsStaggered, FaChevronUp } from "react-icons/fa6"
import { FaChevronDown } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"

// Shared nav data (single source of truth)
const PROJECTS = {
  ongoing: [
    {
      region: "Goa",
      links: [{ href: "/vista-do-mar", label: "Vista Do Mar" }],
    },
    { region: "Bangalore", links: [{ href: "/takshavi", label: "Takshavi" }] },
  ],
  completed: [
    {
      region: "Bangalore",
      links: [
        { href: "/about-embrace", label: "Embrace" },
        { href: "/about-ellen", label: "Ellen" },
      ],
    },
  ],
  upcoming: [
    {
      region: "Goa",
      links: [
        { href: "/about-amora", label: "Amora" },
        { href: "/about-lucilia", label: "Lucilia" },
      ],
    },
  ],
}

const ABOUT_LINKS = [
  { href: "/about-us", label: "Our Story" },
  { href: "/our-team", label: "Our Team" },
  { href: "/why-ekaya", label: "Why Ekaya" },
  { href: "/sustainability", label: "Sustainability" },
]

const linkClass =
  "block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"

const ChevronIcon = ({ isOpen, className = "w-2.5 h-2.5 ms-2.5" }) =>
  isOpen ? (
    <FaChevronUp className={className} />
  ) : (
    <FaChevronDown className={className} />
  )

function Header({ stats }) {
  const [desktopDropdown, setDesktopDropdown] = useState(null) // "projects" | "ekaya"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null) // "ongoing" | "completed" | "upcoming" | "about"
  const [isScrolled, setIsScrolled] = useState(false)

  const closeAll = () => {
    setDesktopDropdown(null)
    setMobileMenuOpen(false)
    setMobileDropdown(null)
  }

  const toggleDesktopDropdown = (type) => {
    setDesktopDropdown((prev) => (prev === type ? null : type))
  }

  const toggleMobileDropdown = (type) => {
    setMobileDropdown((prev) => (prev === type ? null : type))
  }

  const closeMobileAndNav = () => {
    setMobileMenuOpen(false)
    setMobileDropdown(null)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <span className="absolute w-full z-0" onClick={closeAll} aria-hidden />
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
            <div
              className="hidden w-full lg:block md:w-auto"
              id="navbar-dropdown"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <li>
                  <div
                    onMouseLeave={() => setDesktopDropdown(null)}
                    // keep hover active while crossing the visual gap (mt-7) into dropdown
                    className={`relative inline-block ${
                      desktopDropdown === "projects"
                        ? "before:content-[''] before:absolute before:left-0 before:top-full before:h-7 before:w-[600px]"
                        : ""
                    }`}
                  >
                    <button
                      className="flex items-center text-white justify-between text-[18px] poppins-light hover:text-white"
                      type="button"
                      onMouseEnter={() => setDesktopDropdown("projects")}
                    >
                      Our Projects{" "}
                      <ChevronIcon isOpen={desktopDropdown === "projects"} />
                    </button>
                    {desktopDropdown === "projects" && (
                      <div className="z-50 absolute left-0 top-full mt-7 font-normal bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 w-[600px]">
                        <div className="flex justify-between p-0">
                          {[
                            ["Ongoing Projects", PROJECTS.ongoing, ""],
                            [
                              "Completed Projects",
                              PROJECTS.completed,
                              "bg-gray-200",
                            ],
                            ["Upcoming Projects", PROJECTS.upcoming, ""],
                          ].map(([title, sections, bgClass]) => (
                            <div
                              key={title}
                              className={`p-0 w-full ${bgClass}`}
                            >
                              <p className="border-b border-gray-400 p-2 poppins-light text-[18px]">
                                {title}
                              </p>
                              <ul className="py-2 text-gray-700 dark:text-gray-400">
                                {sections.map(({ region, links }, i) => (
                                  <React.Fragment key={region}>
                                    <li className={i > 0 ? "pt-4" : ""}>
                                      <p className="px-4 text-e-green poppins-light text-[18px]">
                                        {region}
                                      </p>
                                    </li>
                                    {links.map(({ href, label }) => (
                                      <li key={href}>
                                        <Link
                                          onClick={closeAll}
                                          href={href}
                                          className={linkClass}
                                        >
                                          — {label}
                                        </Link>
                                      </li>
                                    ))}
                                  </React.Fragment>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </li>

                <li>
                  <div
                    onMouseLeave={() => setDesktopDropdown(null)}
                    // keep hover active while crossing the visual gap (mt-7) into dropdown
                    className={`relative inline-block ${
                      desktopDropdown === "ekaya"
                        ? "before:content-[''] before:absolute before:left-0 before:top-full before:h-7 before:w-[200px]"
                        : ""
                    }`}
                  >
                    <button
                      className="flex items-center text-white justify-between text-[18px] poppins-light hover:text-white"
                      type="button"
                      onMouseEnter={() => setDesktopDropdown("ekaya")}
                    >
                      About Ekaya{" "}
                      <ChevronIcon isOpen={desktopDropdown === "ekaya"} />
                    </button>
                    {desktopDropdown === "ekaya" && (
                      <div className="z-50 absolute left-0 top-full mt-7 font-normal bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 w-[200px]">
                        <ul className="py-2 text-gray-700 dark:text-gray-400 p-0 w-full">
                          {ABOUT_LINKS.map(({ href, label }) => (
                            <li key={href}>
                              <Link
                                onClick={closeAll}
                                href={href}
                                className={linkClass}
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:mr-[00px] w-40 lg:w-60 md:w-96">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/logo.svg"
                width={32}
                height={32}
                className="w-full h-auto"
                alt="Ekaya"
                fetchPriority="high"
                loading="eager"
                decoding="sync"
              />
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
            onClick={closeAll}
          >
            <div
              className="absolute top-0 left-0 w-3/4 h-full bg-white z-50 px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <img
                  src="/logo.svg"
                  width={32}
                  height={32}
                 className="w-full h-auto"
                  alt="Ekaya"
                  loading="eager"
                />
                <button
                  onClick={closeAll}
                  className="text-gray-700 text-2xl font-bold p-2"
                  aria-label="Close menu"
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
                {[
                  ["ongoing", "Ongoing Projects", PROJECTS.ongoing],
                  ["completed", "Completed Projects", PROJECTS.completed],
                  ["upcoming", "Upcoming Projects", PROJECTS.upcoming],
                ].map(([key, title, sections]) => (
                  <li key={key}>
                    <button
                      onClick={() => toggleMobileDropdown(key)}
                      className="flex justify-between w-full"
                    >
                      {title}{" "}
                      <ChevronIcon
                        isOpen={mobileDropdown === key}
                        className="w-4 h-4"
                      />
                    </button>
                    {mobileDropdown === key && (
                      <div className="mt-4 space-y-4">
                        {sections.map(({ region, links }) => (
                          <div key={region}>
                            <h3 className="text-xl bg-[#5CA2B0] px-5 p-1 rounded-md text-white">
                              {region}
                            </h3>
                            <ul className="pl-4 space-y-2 pt-3">
                              {links.map(({ href, label }) => (
                                <li key={href}>
                                  <Link href={href} onClick={closeMobileAndNav}>
                                    — {label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => toggleMobileDropdown("about")}
                    className="flex justify-between w-full"
                  >
                    About Ekaya{" "}
                    <ChevronIcon
                      isOpen={mobileDropdown === "about"}
                      className="w-4 h-4"
                    />
                  </button>
                  {mobileDropdown === "about" && (
                    <ul className="pl-4 space-y-2 pt-3">
                      {ABOUT_LINKS.map(({ href, label }) => (
                        <li key={href}>
                          <Link href={href} onClick={closeMobileAndNav}>
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
export default Header
