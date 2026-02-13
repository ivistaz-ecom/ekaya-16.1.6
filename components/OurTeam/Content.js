import React from "react";
import Image from "next/image";

function Content() {
  return (
    <>
      <div className="lg:mt-[100px] mt-10 w-[80%] mx-auto" data-aos="fade-down">
        <p className="poppins-light text-[18px] text-center pb-5">
          Our company is led by a dynamic team of partners with extensive
          experience in real estate development, design, and engineering.
          Together, we bring a wealth of knowledge and a shared passion for
          creating exceptional spaces that harmonize with our clients’s
          surroundings.
        </p>
      </div>

      <div className="w-[80%] mx-auto">
        <div
          class="flex flex-col items-center bg-white md:flex-row lg:w-[90%]"
          data-aos="fade-right"
        >
          <Image
            class="object-cover lg:w-[25em] sm:w-[14em] sm:mr-10 w-full"
            src="/our-team/1.png"
            alt="ekaya-spaces"
            width={800}
            height={500}
          />
          <div class="flex flex-col justify-between leading-normal lg:py-0 py-6">
            <h5 class="mb-2 text-2xl poppins-medium tracking-tight text-[#5CA2B0] dark:text-white">
              Real Estate Visionaries
            </h5>
            <p class="mb-3 poppins-light text-[18px] text-start pb-5">
              Our partners are seasoned professionals in the real estate
              industry, each with a proven track record of successful projects
              and a keen understanding of market trends. They possess a
              strategic vision for Ekaya Spaces, driving innovation and
              excellence in every aspect of our developments.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col-reverse items-center bg-white md:flex-row lg:w-[90%] justify-items-end"
          data-aos="fade-left"
        >
          <div class="flex flex-col justify-between leading-normal lg:py-0 py-6">
            <h5 class="mb-2 text-2xl poppins-medium tracking-tight text-[#5CA2B0] dark:text-white lg:ml-36">
              Design Experts
            </h5>
            <p class="mb-3 poppins-light text-[18px] text-start pb-5 lg:ml-36">
              Drawing from backgrounds in architecture and interior design, our
              team infuses creativity and aesthetics into every project. We
              believe that thoughtful design enhances livability and inspires
              connection, resulting in spaces that are as functional as they are
              beautiful.
            </p>
          </div>
          <Image
            class="object-cover lg:w-[25em] sm:w-[14em] sm:ml-10 w-full"
            src="/our-team/2.png"
            alt="ekaya-spaces"
            width={800}
            height={500}
          />
        </div>

        <div
          class="flex flex-col items-center bg-white md:flex-row w-[90%]"
          data-aos="fade-right"
        >
          <Image
            class="object-cover lg:w-[25em] sm:w-[14em] sm:mr-10"
            src="/our-team/3.png"
            alt="ekaya-spaces"
            width={800}
            height={500}
          />
          <div class="flex flex-col justify-between leading-normal lg:py-0 py-6">
            <h5 class="mb-2 text-2xl poppins-medium tracking-tight text-[#5CA2B0] dark:text-white">
              Highly Qualified Engineers
            </h5>
            <p class="mb-3 poppins-light text-[18px] text-start pb-5">
              We possess a team of highly qualified engineers who not only
              possess technical expertise but also share a deep connection to
              the local area. Their understanding of regional nuances allows us
              to integrate sustainable solutions and innovative technologies
              seamlessly into our developments.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col-reverse items-center bg-white md:flex-row lg:w-[90%] justify-items-end"
          data-aos="fade-left"
        >
          <div class="flex flex-col justify-between leading-normal lg:py-0 py-6">
            <h5 class="mb-2 text-2xl poppins-medium tracking-tight text-[#5CA2B0] dark:text-white lg:ml-36">
              Community Commitment
            </h5>
            <p class="mb-3 poppins-light text-[18px] text-start pb-5 lg:ml-36">
              Beyond their professional achievements, the team is dedicated to
              fostering community and sustainability. We prioritize creating
              spaces that enrich the lives of residents and contribute
              positively to the neighbourhoods we serve.
            </p>
          </div>
          <Image
            class="object-cover lg:w-[25em] sm:w-[14em] sm:ml-10"
            src="/our-team/4.png"
            alt="ekaya-spaces"
            width={800}
            height={500}
          />
        </div>

        <div
          class="flex flex-col items-center bg-white md:flex-row lg:w-[90%]"
          data-aos="fade-right"
        >
          <Image
            class="object-cover lg:w-[25em] sm:w-[14em] sm:mr-10"
            src="/our-team/5.png"
            alt="ekaya-spaces"
            width={800}
            height={500}
          />
          <div class="flex flex-col justify-between leading-normal lg:py-0 py-6">
            <h5 class="mb-2 text-2xl poppins-medium tracking-tight text-[#5CA2B0] dark:text-white lg:ml-36">
              Collaborative Spirit
            </h5>
            <p class="mb-3 poppins-light text-[18px] text-start pb-5 lg:ml-36">
              Collaboration is at the heart of everything we do. Our diverse
              team works synergistically, leveraging our collective strengths to
              deliver exceptional results and exceed expectations.
            </p>
          </div>
        </div>

        <div className="w-[80%] mx-auto text-center py-12">
          <h4 className="text-5xl text-black poppins-light pb-6">
            Join Our Vision
          </h4>
          <p className="text-[18px] text-black poppins-light">
            Discover the passion and expertise behind Ekaya Spaces. Meet our
            team of visionaries and experience the difference of working with a
            company driven by innovation, integrity, and a commitment to
            excellence.
          </p>
        </div>
      </div>
    </>
  );
}

export default Content;
