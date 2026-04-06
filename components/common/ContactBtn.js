import Link from "next/link";
import React from "react";

function ContactBtn() {
  return (
    <div className="absolute lg:right-[11%] right-[11%] bottom-12  md:bottom-44 z-0">
      <Link
        href="#contactpage"
        aria-label="Contact us"
        className="flex items-center gap-2 bg-[#5CA2B0] hover:bg-[#fff] text-white hover:text-[#5CA2B0] py-3 px-6 rounded-none transition-all duration-300 group"
      >
        <span className="poppins-light tracking-wide">CONTACT US</span>
        <svg
          className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 14 10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
}

export default ContactBtn;
