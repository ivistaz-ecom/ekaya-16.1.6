import React from "react";
import Image from "next/image";

function Content() {
  return (
    <>
      <div className="lg:mt-[100px] mt-10 w-[80%] mx-auto" data-aos="fade-down">
        <p className="poppins-light text-[18px] text-center pb-5">
          We specialize in developing boutique real estate projects that
          prioritize community, environmental harmony, and personalized service.
          Our approach focuses on creating intimate spaces that foster a sense
          of belonging and reflect the unique charm of their surroundings.
        </p>
      </div>

      <div className="w-[80%] mx-auto">
        <div
          class="flex lg:flex-col flex-col-reverse lg:items-start bg-[#E5E8EB]  lg:w-[80%] lg:relative lg:left-[7em] lg:py-20"
          data-aos="fade-right"
        >
          <div class="flex flex-col justify-between leading-normal lg:pl-[20em] lg:pr-28 py-7 lg:px-0 px-7">
            <h5 class="mb-4 text-2xl poppins-medium tracking-tight text-gray-900 dark:text-white">
              Boutique Projects for Community Living
            </h5>
            <p class="mb-3 poppins-light text-[18px] text-start pb-5">
              We are committed to boutique real estate development, steering
              clear of large-scale projects to preserve intimacy and promote
              community interaction. Our developments are thoughtfully designed
              to encourage meaningful connections among residents, ensuring a
              close-knit and vibrant community atmosphere.
            </p>
          </div>
          <div className="lg:absolute lg:left-0 lg:-ml-40">
            <Image
              class="object-cover lg:w-[25em]"
              src="/why-ekaya/1.webp"
              alt="ekaya-spaces"
              width={800}
              height={500}
            />
          </div>
        </div>

        <div
          class="flex flex-col lg:items-start bg-[#E5E8EB] lg:w-[80%] relative lg:-left-[3em] lg:py-20 my-20"
          data-aos="fade-right"
        >
          <div className="lg:absolute lg:-right-40 ">
            <Image
              class="object-cover lg:w-[25em] w-full"
              src="/why-ekaya/2.webp"
              alt="ekaya-spaces"
              width={800}
              height={500}
            />
          </div>
          <div class="flex flex-col justify-between leading-normal lg:pl-[10em] lg:pr-[20em] py-7 lg:px-0 px-7">
            <h5 class="mb-4 text-2xl poppins-medium tracking-tight text-gray-900 dark:text-white">
              Designs Inspired by the Environment
            </h5>
            <p class="mb-3 poppins-light text-[18px] text-start pb-5">
              We believe in harmonizing architecture with nature. Each Ekaya
              Spaces project is meticulously planned to complement its natural
              surroundings, integrating sustainable design elements that
              minimize environmental impact. From green spaces to eco-friendly
              features, our designs celebrate the beauty of the environment.
            </p>
          </div>
        </div>

        <div
          class="flex flex-col-reverse lg:items-start bg-[#E5E8EB] lg:w-[80%] relative lg:left-[7em] lg:py-20"
          data-aos="fade-right"
        >
          <div class="flex flex-col justify-between leading-normal lg:pl-[20em] lg:pr-28 py-7 lg:px-0 px-7">
            <h5 class="mb-4 text-2xl poppins-medium tracking-tight text-gray-900 dark:text-white">
              Personalized Relationships
            </h5>
            <p class="mb-3 poppins-light text-[18px] text-start pb-5">
              At Ekaya Spaces, we value personal connections. We pride ourselves
              on fostering one-on-one relationships with every customer,
              understanding their unique preferences and aspirations. Our
              dedicated team is committed to delivering tailored solutions and
              exceptional service throughout the entire journey.
            </p>
          </div>
          <div className="lg:absolute lg:left-0 lg:-ml-40">
            <Image
              class="object-cover lg:w-[25em] w-full"
              src="/why-ekaya/3.webp"
              alt="ekaya-spaces"
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto text-center py-12">
        <h4 className="lg:text-5xl md:text-5xl text-3xl text-black poppins-light pb-6">
          Your Boutique Living Experience Awaits
        </h4>
        <p className="text-[18px] text-black poppins-light">
          Explore our exclusive portfolio of boutique real estate projects and
          discover a new standard of community living with Ekaya Spaces. Whether
          you’re seeking a serene residential enclave or a distinctive
          commercial space, we invite you to experience the essence of
          personalized luxury.
        </p>
      </div>
    </>
  );
}

export default Content;
