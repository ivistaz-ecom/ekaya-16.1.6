"use client";
import React, { useState, useEffect } from "react";
import configData from "../../../config.json";
import AOS from "aos";
import Image from "next/image";

function Banner({ slug }) {
  useEffect(() => {
    AOS.init({
      // Initialize AOS with your desired configuration options
      //   duration: 800, // Duration of the animation
      //   easing: "ease-in-out", // Easing option
      once: false, // Whether animation should only happen once
    });
  }, []);

  const [pageTitle, setPageTitle] = useState();
  const [bannerImage, setBannerImage] = useState();
  const [error, setError] = useState(false);

  const fetchPost = async () => {
    try {
      const postResponse = await fetch(
        `${configData.SERVER_URL}posts?_embed&slug=${slug}`
      );
      const postData = await postResponse.json();

      if (postData.length == 0) {
        setError(true);
      } else {
        setPageTitle(postData[0].title.rendered);
        
        // Get banner image from ACF field first, then fallback to featured media
        const acfData = postData[0].acf;
        let imageUrl = null;
        
        // Check ACF banner_image field (could be URL string or object)
        if (acfData?.banner_image) {
          if (typeof acfData.banner_image === 'string') {
            imageUrl = acfData.banner_image;
          } else if (typeof acfData.banner_image === 'object' && acfData.banner_image.url) {
            imageUrl = acfData.banner_image.url;
          } else if (typeof acfData.banner_image === 'object' && acfData.banner_image.sizes) {
            imageUrl = acfData.banner_image.sizes.full || 
                      acfData.banner_image.sizes.large || 
                      acfData.banner_image.sizes.medium_large;
          }
        }
        
        // Fallback to featured media if ACF banner image not found
        if (!imageUrl) {
          imageUrl = postData[0]["_embedded"]?.["wp:featuredmedia"]?.[0]?.["source_url"];
        }
        
        // Final fallback to default banner
        setBannerImage(imageUrl || "/blogs/banner.png");
      }
    } catch (error) {
      console.error("Error fetching post:", error);
      setError(true);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return (
    <>
      {error ? (
        <div
          className="h-[40vh] bg-[#5CA2B0] relative mx-auto"
          data-aos="fade-down"
        >
          <div
            className="w-full absolute bottom-0 lg:py-12 text-center pb-28 mx-auto"
            data-aos="fade-down"
          >
            <h1 className="lg:text-[10em] md:text-5xl text-3xl text-white poppins-medium">
              404
            </h1>
          </div>
        </div>
      ) : (
        bannerImage && (
          <div className="lg:h-[100vh] h-[80vh] relative mx-auto" data-aos="fade-down">
            <Image
              src={bannerImage}
              alt="Banner"
              width={1000}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
            {/* Black overlay with 25% opacity */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="lg:w-[50%] w-full absolute bottom-0 lg:py-12 lg:ml-40 md:ml-20 pb-2 z-20">
              <h1
                className="lg:!text-6xl md:text-5xl !text-3xl lg:px-0 px-10 text-white poppins-light !font-light"
                dangerouslySetInnerHTML={{ __html: pageTitle }}
              />
            </div>
          </div>
        )
      )}
    </>
  );
}

export default Banner;
