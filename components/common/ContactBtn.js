"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import {
  getContactSectionId,
  hasContactSectionOnPath,
  normalizePathname,
  DEFAULT_CONTACT_SECTION_ID,
} from "./contactSectionIds";

function ContactBtn() {
  const pathname = usePathname();
  const p = normalizePathname(pathname);
  const onPageWithContact = hasContactSectionOnPath(pathname);
  const sectionId = getContactSectionId(pathname);

  const contactHref = onPageWithContact
    ? p === "/"
      ? `/#${sectionId}`
      : `${p}#${sectionId}`
    : `/#${DEFAULT_CONTACT_SECTION_ID}`;

  const scrollToContact = () => {
    const id = onPageWithContact ? sectionId : DEFAULT_CONTACT_SECTION_ID;
    const pathForHash = onPageWithContact ? p : "/";
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `${pathForHash}#${id}`);
  };

  return (
    <div className="absolute lg:right-[11%] right-[11%] bottom-12  md:bottom-44 z-0">
      <Link
        href={contactHref}
        className="flex items-center gap-2 bg-[#5CA2B0] hover:bg-[#fff] text-white hover:text-[#5CA2B0] py-3 px-6 rounded-none transition-all duration-300 group  poppins-light tracking-wide"
        onClick={(e) => {
          if (!onPageWithContact) return;
          const el = document.getElementById(sectionId);
          if (el) {
            e.preventDefault();
            scrollToContact();
          }
        }}
      >
        CONTACT US
        <svg
          className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 14 10"
          aria-hidden="true"
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
