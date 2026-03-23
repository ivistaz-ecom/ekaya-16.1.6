import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/EkayaSpaces/",
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/ekayaspaces?igsh=NzQ5bW41bmU5bnpn",
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/ekaya-spaces/",
      label: "LinkedIn",
    },
    { href: "https://www.youtube.com/@ekayaspaces", label: "YouTube" },
  ];

  const projects = [
    {
      title: "Projects in Bangalore",
      links: [
        { href: "/about-embrace", label: "Embrace" },
        { href: "/about-ellen", label: "Ellen" },
        { href: "/takshavi", label: "Takshavi" },
      ],
    },
    {
      title: "Projects in Goa",
      links: [
        // { label: "Goa - Dona Paula" },
        // { href: "/about-dona-paula", label: "Dona Paula" },
        { href: "/vista-do-mar", label: "Vista Do Mar" },
        // { href: "/about-moira", label: "Moira" },
        { href: "/about-amora", label: "Amora" },
        { href: "/about-lucilia", label: "Lucilia" },
      ],
    },
  ];

  const aboutLinks = [
    { href: "/about-us", label: "Our Story" },
    { href: "/our-team", label: "Our Team" },
    { href: "/why-ekaya", label: "Why Ekaya" },
    { href: "/blogs", label: "Blogs" },
    { href: "/sustainability", label: "Sustainability" },
  ];

  return (
    <div className="z-50">
      <div className="lg:mt-[100px] mt-[30px] grid lg:grid-cols-4 grid-cols-2 overflow-hidden z-5 max-w-7xl mx-auto ">
        {socialLinks.map((link, index) => (
          <Link
            target="_blank"
            key={index}
            href={link.href}
            className="justify-center align-center flex border group hover:bg-e-green transition-all duration-300 hover:text-white border-e-green p-4 text-xl poppins-light"
          >
            {link.label}
            <div className="[grid-area:1/1] flex items-center justify-center transition ease-in-out group-hover:duration-300 translate-y-0 -translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-2">
              ↗
            </div>
          </Link>
        ))}
      </div>

      <footer className="mx-auto bg-gray-200 lg:pt-6 p-6 lg:p-0">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-3 grid-1 border-b border-gray-300 justify-between items-center hidden lg:space-x-44 md:space-x-0">
            <div>
              <h3 className="text-xl font-medium pb-5 poppins-medium">
                Contact Details
              </h3>
            </div>

            <div className="mt-14 lg:mt-0">
              <h3 className="text-xl font-medium pb-5 poppins-medium">
                Our Projects
              </h3>
            </div>
            <div className="mt-14 lg:mt-0">
              <h3 className="text-xl font-medium pb-5 poppins-medium">
                About Ekaya
              </h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-1 py-5 lg:items-stretch lg:space-x-32 md:space-x-0">
            <div className="flex flex-col h-full">
              <div className="lg:hidden">
                <h3 className="text-xl font-medium pb-3 poppins-medium">
                  Contact Details
                </h3>

                <hr className="h-px border-t border-gray-300 pb-4 mx-auto" />
              </div>
              <div className="flex flex-col h-full">
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-light text-gray-600 pb-6 poppins-light">
                  Ekaya Spaces <br />
                    No.136, Residency Road, {" "}
                    <br />
                    Shanthala Nagar, <br />G.5 Cears Plaza, <br /> Bangalore - 560025
                  </p>
                  <p className="text-xl font-light text-gray-600 poppins-light">
                    <span className="font-medium">Phone:</span>{" "}
                    <Link href="tel:++91 8217479108">+91 82174 79108</Link>
                  </p>
                  <p className="text-xl font-light text-gray-600 poppins-light">
                    <span className="font-medium">Email:</span>{" "}
                    <Link href="mailto:info@ekaya-spaces.com">
                      info@ekaya-spaces.com
                    </Link>
                  </p>
                </div>
                <div className="flex justify-start mt-auto pt-6">
                  <Image
                    src="/footer-logo.svg"
                    alt="Ekaya logo"
                    className="pb-6"
                    width={300}
                    height={300}
                    loading="eager"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 lg:mt-0">
              <div className="lg:hidden">
                <h3 className="text-xl font-medium pb-3 poppins-medium">
                  Our Projects
                </h3>

                <hr className="h-px border-t border-gray-300 pb-4 mx-auto" />
              </div>
              {projects.map((project, index) => (
                <div key={index}>
                  <h4 className="text-lg border p-2 border-e-green w-[220px]">
                    {project.title}
                  </h4>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    {project.links.map((link, i) =>
                      link.href ? (
                        <li key={i}>
                          <Link
                            href={link.href}
                            className="block px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ) : (
                        <li
                          key={i}
                          className="px-4 text-e-green poppins-light text-[18px]"
                        >
                          {link.label}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-5 lg:mt-0 lg:pl-10 md:pl-0">
              <div className="lg:hidden">
                <h3 className="text-xl font-medium pb-3 poppins-medium">
                  About Ekaya
                </h3>

                <hr className="h-px border-t border-gray-300 pb- mx-auto" />
              </div>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-400 poppins-light">
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="block lg:px-4 py-2 poppins-light text-[18px] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl lg:w-[80%] mx-auto">
          <hr className="h-px border-t border-gray-300 mx-auto" />
          <div className="lg:flex justify-between py-6">
            <div className="text-[18px] poppins-light text-gray-600 lg:order-1 order-2">
              ©{new Date().getFullYear()} Ekaya. All Rights Reserved.
            </div>
            <div className="text-xl poppins-light text-gray-600 lg:order-2 order-1">
              <Link href="/terms-of-use">Terms of Use</Link> |{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> |{" "}
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
          {/* <hr className="h-px border-t border-gray-300 mx-auto" /> */}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
