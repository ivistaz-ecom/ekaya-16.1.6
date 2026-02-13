import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomPrevArrow = ({ className, onClick }) => (
  <div
    className={`${className} absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-70 rounded-full p-2 hidden sm:flex`}
    onClick={onClick}
  >
    <FaChevronLeft className="text-white" />
  </div>
);

const CustomNextArrow = ({ className, onClick }) => (
  <div
    className={`${className} absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-70 rounded-full p-2 hidden sm:flex`}
    onClick={onClick}
  >
    <FaChevronRight className="text-white" />
  </div>
);

const settings = {
  dots: false,
  arrows: false, // arrows set to false here, but custom arrows can still be added manually if needed
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768, // screens <768px
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function MyComponent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
      <div className="bg-e-green content-center p-6 md:p-10 lg:p-[3em]">
        <p
          className="text-[16px] md:text-[18px] text-white poppins-light"
          data-aos="fade-right"
        >
          Experience the pinnacle of modern living with our spacious homes,
          featuring thoughtful layouts and upscale amenities.
        </p>
      </div>

      <div className="relative w-full lg:col-span-2">
        <Slider {...settings} className="z-10">
          <div className="z-10">
            <Image
              src="/embrace/gallery-001.webp"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
              alt="Slide 1"
            />
          </div>
          <div>
            <Image
              src="/embrace/gallery-002.webp"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
              alt="Slide 2"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
