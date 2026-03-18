import React from "react";
import Banner from "../../components/Aboutus/Banner";
import Content from "../../components/Aboutus/Content";

export const metadata = {
  title:
    "Ekaya Spaces: Pioneering Luxury Real Estate with Surbhi Sharma and Chethan Puvannaa",
  description:
    "Discover Ekaya Spaces, founded by Surbhi Sharma and Chethan Puvannaa in 2014, a leader in luxury real estate development in sought-after locations. Explore our journey of excellence and innovation in creating unique, high-quality properties that offer not just luxury but lasting value",
  alternates: { canonical: "https://ekaya-spaces.com/about-us" },
  openGraph: {
    type: "website",
    url: "https://ekaya-spaces.com/about-us",
    title:
      "Ekaya Spaces: Pioneering Luxury Real Estate with Surbhi Sharma and Chethan Puvannaa",
    description:
      "Discover Ekaya Spaces, founded by Surbhi Sharma and Chethan Puvannaa in 2014, a leader in luxury real estate development in sought-after locations. Explore our journey of excellence and innovation in creating unique, high-quality properties that offer not just luxury but lasting value",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ekaya Spaces: Pioneering Luxury Real Estate with Surbhi Sharma and Chethan Puvannaa",
    description:
      "Discover Ekaya Spaces, founded by Surbhi Sharma and Chethan Puvannaa in 2014, a leader in luxury real estate development in sought-after locations. Explore our journey of excellence and innovation in creating unique, high-quality properties that offer not just luxury but lasting value",
  },
};

function AboutUs() {
  return (
    <>
      <Banner />
      <Content />
    </>
  );
}

export default AboutUs;
