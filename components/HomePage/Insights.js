"use client"
import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import configData from "../../config.json"
import Link from "next/link"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

function Insights() {
  const [Blogs, setData] = useState([])
  const [isDesktop, setIsDesktop] = useState(false)
  const sliderRef = useRef(null)
  const getPlainTitle = (title = "") =>
    title.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim()

  const fetchPost = async () => {
    try {
      const postResponse = await fetch(
        `${configData.SERVER_URL}posts?_embed&categories[]=2&&production[]=${configData.SERVER}&status[]=publish`,
      )
      const postData = await postResponse.json()

      if (postResponse.ok) {
        setData(postData)
      } else {
        console.error(`Failed to fetch post. Status: ${postResponse.status}`)
      }
    } catch (error) {
      console.error("Error fetching post:", error)
    }
  }

  useEffect(() => {
    fetchPost()

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const showArrows = !isDesktop && Blogs.length > 1

  const NextArrow = ({ onClick }) => (
    <div
      className="in-arrow absolute -bottom-10  right-5  cursor-pointer pe-20"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-5xl rounded-full" />
    </div>
  )

  const PrevArrow = ({ onClick }) => (
    <div
      className="in-arrow absolute -bottom-10  left-5 pl-20  cursor-pointer flex justify-center items-center"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-5xl  rounded-full" />
    </div>
  )

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: showArrows ? <NextArrow /> : null,
    prevArrow: showArrows ? <PrevArrow /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className="text-center mt-[0px] container mx-auto">
        <h2 className="lg:text-5xl text-4xl poppins-regular py-10">Insights</h2>
        <p className="poppins-light text-[18px]">
          Gain valuable insights into the world of luxury real estate and what
          makes an Ekaya home the right choice for discerning buyers.
        </p>
      </div>
      <div className="mx-auto mt-10 justify-center container px-4 lg:px-0 z-10">
        <Slider {...settings} ref={sliderRef} className="z-10">
          {Blogs.map((items, index) => {
            // Safely get featured media image URL
            const featuredImageUrl =
              items["_embedded"]?.["wp:featuredmedia"]?.[0]?.["source_url"] ||
              "/blogs/banner.png"

            return (
              <div
                className={`z-10 lg:max-w-sm dark:bg-gray-800 dark:border-gray-700 ${
                  items.acf?.css || ""
                }`}
                key={index}
              >
                <Link href={`/blogs/${items.slug}`}>
                  <Image
                    className="rounded-0 w-full"
                    src={featuredImageUrl}
                    alt={items.title?.rendered || "Blog post"}
                    width={300}
                    height={300}
                    sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    quality={60}
                  />
                  <div className="p-5">
                    <h3
                      className="mb-2 text-start text-2xl font-light tracking-tight poppins-regular text-gray-900 dark:text-white post-content-title"
                      dangerouslySetInnerHTML={{
                        __html: items.title?.rendered ?? "",
                      }}
                    />
                    <p
                      className="mb-3 text-start font-normal text-base poppins-regular text-gray-700 dark:text-gray-400 post-content"
                      dangerouslySetInnerHTML={{
                        __html: items.excerpt.rendered,
                      }}
                    />
                    <Link
                      href={`/blogs/${items.slug}`}
                      aria-label={`Read more about ${getPlainTitle(items.title?.rendered || "this article")}`}
                    >
                      <p className="text-start font-normal flex items-center w-40 gap-2 text-base poppins-regular bg-white shadow-md rounded-full dark:text-gray-400 px-5 py-1 border hover:bg-e-green hover:text-white transition-all duration-300 text-e-green ">
                        Read More <IoIosArrowForward className="text-2xl" />
                      </p>
                    </Link>
                  </div>
                </Link>
              </div>
            )
          })}
        </Slider>
      </div>
      <div className="z-0 -mt-[15em] bg-no-repeat bg-white bg-cover bg-[url('/background.jpg')] bg-blend-multiply h-screen relative"></div>
    </>
  )
}

export default Insights
